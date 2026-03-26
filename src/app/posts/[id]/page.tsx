type Post = {
  id: number;
  title: string;
  body: string;
};

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPost(params.id);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <div className="bg-gray-800 text-white p-6 rounded">
        <p>{post.body}</p>
      </div>
    </div>
  );
}