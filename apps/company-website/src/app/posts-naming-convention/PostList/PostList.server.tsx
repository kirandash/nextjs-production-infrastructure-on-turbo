import { Post } from "../types";
import PostListClient from "./PostList.client";

async function getPosts(page: number, limit: number): Promise<Post[]> {
  "use server";
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${page * 10}&_limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

// Async React Server Component
export default async function PostsList() {
  const initialPosts = await getPosts(0, 10);

  return <PostListClient initialPosts={initialPosts} getPosts={getPosts} />;
}
