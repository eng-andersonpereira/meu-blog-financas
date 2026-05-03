import { getAllPosts } from '@/lib/posts'

export default function sitemap() {
  const posts = getAllPosts()

  const postUrls = posts.map((post) => ({
    url: `https://financassimples.com.br/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://financassimples.com.br',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: 'https://financassimples.com.br/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://financassimples.com.br/sobre',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    ...postUrls,
  ]
}