"use client";

import { useState } from "react";
import type { Post } from "../types";

interface PostListClientProps {
  initialPosts: Post[];
  getPosts: (page: number, limit: number) => Promise<Post[]>;
}

const PostListClient = ({ initialPosts, getPosts }: PostListClientProps) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadMorePosts = async () => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      const newPosts = await getPosts(nextPage, 10);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setPage(nextPage);
    } catch (error) {
      console.error("Error loading more posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={loadMorePosts}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default PostListClient;
