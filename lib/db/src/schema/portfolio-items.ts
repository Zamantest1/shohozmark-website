import { pgTable, serial, text, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const portfolioItemsTable = pgTable("portfolio_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  category: text("category").notNull(),
  industry: text("industry").notNull(),
  description: text("description").notNull(),
  client: text("client").notNull(),
  result: text("result").notNull(),
  coverImage: text("cover_image"),
  images: text("images").array().notNull().default([]),
  testimonialQuote: text("testimonial_quote"),
  testimonialAuthor: text("testimonial_author"),
  featured: boolean("featured").notNull().default(false),
  published: boolean("published").notNull().default(true),
  publishedAt: timestamp("published_at", { withTimezone: true }).notNull().defaultNow(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertPortfolioItemSchema = createInsertSchema(portfolioItemsTable).omit({
  id: true,
  createdAt: true,
});
export type InsertPortfolioItem = z.infer<typeof insertPortfolioItemSchema>;
export type PortfolioItem = typeof portfolioItemsTable.$inferSelect;
