import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().default(true),
    summary: z.string().optional(),
    subtitle: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    screenshot: z.string().optional(),
    order: z.number().default(0),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/settings' }),
  schema: z.object({
    heroTitle: z.string(),
    showDevSection: z.boolean().default(true),
    devIntro: z.string().optional(),
    socialLinks: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
          style: z.enum(['accent-2', 'outline']).default('outline'),
        })
      )
      .default([]),
  }),
});

export const collections = { posts, projects, settings };
