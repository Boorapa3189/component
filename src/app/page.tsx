import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Welcome</h1>
      <ul>
        <li><Link href="/posts/1/comments">Post 1 Comments</Link></li>
        <li><Link href="/posts/8/comments">Post 8 Comments</Link></li>
        <li><Link href="/posts/10/comments">Post 10 Comments</Link></li>
        <li><Link href="/posts/79/comments">Post 79 Comments</Link></li>
      </ul>
    </main>
  );
}
