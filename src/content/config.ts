// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a schema for each collection you'd like to validate.
const postsCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});



const recipeCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
});

const booksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    readYear: z.string(),
    readMonth: z.string(),
    description: z.string(),
    rating: z.number(),
    tags: z.array(z.string()),
    genre: z.string(),
    pages: z.number()
  })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  recipes: recipeCollection,
  books: booksCollection,
};
