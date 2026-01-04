'use client'

import Link from 'next/link'

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
}

export default function Home() {
  const posts: Post[] = [
    { id: 1, title: 'Getting Started with Next.js', excerpt: 'Learn the basics of Next.js and build your first application.', date: '2024-01-15', author: 'Admin' },
    { id: 2, title: 'Modern Web Development', excerpt: 'Exploring the latest trends in web development.', date: '2024-01-10', author: 'Admin' },
    { id: 3, title: 'Best Practices for React', excerpt: 'Tips and tricks for writing better React code.', date: '2024-01-05', author: 'Admin' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold">blog home</h1>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Welcome to blog home</h2>
          <p className="text-xl text-gray-600 mb-12">a clean, responsive landing page for a blog with a contact form and newsletter signup.</p>
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author} • {post.date}</span>
                  <Link href={`/posts/${post.id}`} className="text-blue-600 hover:text-blue-800">Read More →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
