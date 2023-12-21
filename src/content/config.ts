// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content"

const newsletterCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    coverImage: z.string(),
    socialImage: z.string().optional(),
  }),
})

export const collections = {
  newsletter: newsletterCollection,
}
