import axios from "axios";

type Comment = {
    id: number;
    name: string;
    email: string;
    body: string;
};

type Props = {
    params: { id: string };
};

export default async function CommentsPage({ params }: Props) {
    const { id } = params;

    const res = await axios.get<Comment[]>(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const data = res.data;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">💬 Comments for Post {id}</h1>

            {data.length === 0 ? (
                <p className="text-gray-500">ยังไม่มี Comment สำหรับ Post {id}</p>
            ) : (
                <ul className="space-y-4">
                    {data.map((c) => (
                        <li
                            key={c.id}
                            className="border p-4 rounded-lg shadow-sm bg-white"
                        >
                            <h3 className="font-semibold text-lg">{c.name}</h3>
                            <p className="text-gray-700">{c.body}</p>
                            <span className="block text-sm text-gray-500 mt-2">
                                ✉ {c.email}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
