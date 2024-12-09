import { createClient } from 'contentful';

export const createContentClient = () => {
  return createClient({
    space: "p775hripsfbr",
    accessToken: "Wm-vO1XlQxLiv4r8MCComfYv5b4y_ma_DarloCSs3Hs",
  })
}
const client = createContentClient()

export const getEntriesByType = async (blogPost) => {
  const response = await client.getEntries({
    content_type: blogPost,
  })

  return response.items
}

  export const getBlogPosts = async () => {
  const results = await getEntriesByType('blogPost')
  const blogPosts = results.map((blog) => blog.fields)
  return blogPosts
}