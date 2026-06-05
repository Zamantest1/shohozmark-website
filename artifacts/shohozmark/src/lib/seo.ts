import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
  canonical?: string;
}

const SITE_NAME = "ShohozMark";
const DEFAULT_DESCRIPTION =
  "ShohozMark — Affordable marketing for local businesses in Rajshahi, Bangladesh. Social media, graphic design, SEO, and more.";

export function useSEO(options: SEOOptions): void {
  useEffect(() => {
    const prevTitle = document.title;
    const titleSuffix = options.title.includes(SITE_NAME) ? "" : ` — ${SITE_NAME}`;
    document.title = `${options.title}${titleSuffix}`;

    const setMeta = (name: string, content: string, isOg = false) => {
      const attr = isOg ? "property" : "name";
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
      return el;
    };

    const metas: HTMLMetaElement[] = [];

    if (options.description) {
      metas.push(setMeta("description", options.description));
    }
    if (options.keywords && options.keywords.length > 0) {
      metas.push(setMeta("keywords", options.keywords.join(", ")));
    }

    metas.push(setMeta("og:title", options.ogTitle ?? options.title, true));
    metas.push(
      setMeta("og:description", options.ogDescription ?? options.description ?? DEFAULT_DESCRIPTION, true)
    );
    metas.push(setMeta("og:type", options.ogType ?? "website", true));
    metas.push(setMeta("og:site_name", SITE_NAME, true));

    if (options.canonical) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", options.canonical);
    }

    return () => {
      document.title = prevTitle;
    };
  }, [options.title, options.description, options.keywords?.join(","), options.canonical]);
}
