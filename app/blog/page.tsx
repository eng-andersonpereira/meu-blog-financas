import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata = {
  title: 'Blog — Finanças Simples',
  description: 'Todos os artigos sobre finanças pessoais',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-gray-500 mb-8">Todos os artigos</p>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
          >
            <span className="text-sm text-gray-400">{post.date}</span>
            <h2 className="font-semibold text-lg mt-1">{post.title}</h2>
            <p className="text-gray-500 text-sm mt-1">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}