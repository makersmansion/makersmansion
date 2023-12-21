// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content"

const newsletterCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date({ coerce: true }),
    coverImage: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    socialImage: z.string().optional(),
  }),
})

export const collections = {
  newsletter: newsletterCollection,
}
