// src/app/(user)/posts/[id]/comments/page.tsx
import axios from "axios";
import type { PageProps } from "next";

type Comment = {
    id: number;
    name: string;
    email: string;
    body: string;
};

export default async function CommentsPage({
    params,
}: PageProps<{ id: string }>) {
    const { id } = params;

    const { data } = await axios.get<Comment[]>(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    return (
        <div>
            <h1>Comments for Post {id}</h1>
            {data.length === 0 ? (
                <p>ยังไม่มี Comment สำหรับ Post {id}</p>
            ) : (
                <ul>
                    {data.map((c) => (
                        <li key={c.id} className="border p-2 my-2 rounded">
                            <h3 className="font-bold">{c.name}</h3>
                            <p>{c.body}</p>
                            <span className="text-sm text-gray-500">{c.email}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
