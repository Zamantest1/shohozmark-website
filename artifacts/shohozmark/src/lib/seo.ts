import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  canonical?: string;
}

const SITE_NAME = "ShohozMark";
const SITE_URL = "https://shohozmark.com";
const DEFAULT_DESCRIPTION =
  "ShohozMark — Affordable digital marketing for local businesses in Rajshahi, Bangladesh. Social media, graphic design, SEO, brand identity, and more.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph.jpg`;

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

    const desc = options.description ?? DEFAULT_DESCRIPTION;
    const ogTitle = options.ogTitle ?? options.title;
    const ogDesc = options.ogDescription ?? desc;
    const ogImage = options.ogImage ?? DEFAULT_OG_IMAGE;

    setMeta("description", desc);
    if (options.keywords?.length) {
      setMeta("keywords", options.keywords.join(", "));
    }

    setMeta("og:title", ogTitle, true);
    setMeta("og:description", ogDesc, true);
    setMeta("og:type", options.ogType ?? "website", true);
    setMeta("og:site_name", SITE_NAME, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:url", options.canonical ?? SITE_URL, true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", ogTitle);
    setMeta("twitter:description", ogDesc);
    setMeta("twitter:image", ogImage);
    setMeta("twitter:site", "@shohozmark");

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
  }, [
    options.title,
    options.description,
    options.keywords?.join(","),
    options.canonical,
    options.ogImage,
  ]);
}
