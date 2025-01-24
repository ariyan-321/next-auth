import Link from "next/link";

export default async function PostDetails({ params }) {
  const { id } = params;

  // Fetch the post details
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  // Check if the post exists
  if (!res.ok) {
    return (
      <div className="min-h-screen mt-5 p-4">
        <h1 className="text-center text-4xl font-bold text-red-500 mb-8">
          Post Not Found
        </h1>
        <Link href="/" className=" underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const post = await res.json();

  return (
    <div className="min-h-screen  mt-12 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold  mb-4">{post.title}</h1>
        <p className="">{post.body}</p>
        <div className="mt-8">
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
