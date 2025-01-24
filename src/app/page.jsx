import Link from "next/link";

export default async function Home() {
  // Fetch data directly in the component
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6",
    {
      cache: "no-store", // Prevents caching for fresh data
    }
  );
  const posts = await res.json();

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-center text-4xl font-bold  mb-8">Blog Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card shadow-xl hover:shadow-2xl transition duration-300"
          >
            <div className="card-body">
              <Link href={`/blog/${post.id}`}>
                <h2 className="card-title text-xl ">{post.title}</h2>
              </Link>
              <p className="">{post.body.substring(0, 100)}...</p>
              <div className="card-actions justify-end">
                <Link href={`/blog/${post.id}`} className="btn btn-primary btn-sm">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
