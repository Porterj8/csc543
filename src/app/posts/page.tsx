import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>

      <div className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <div key={post.id} className="bg-gray-800 text-white p-4 rounded">
            <Link
              href={`/posts/${post.id}`}
              className="text-blue-400 hover:underline font-semibold"
            >
              {post.title}
            </Link>
            <p className="mt-2 text-sm text-gray-300">
              {post.body.substring(0, 80)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}