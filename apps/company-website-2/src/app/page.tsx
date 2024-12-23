import PostList from "@repo/ui/PostList";

export default function Home() {
  return (
    <div className="p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <PostList />
    </div>
  );
}
