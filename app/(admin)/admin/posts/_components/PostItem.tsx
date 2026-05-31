import Link from "next/link";

type Props = {
  title: string;
  updatedAt: Date;
  id: string;
};

export default function PostItem({ title, updatedAt, id }: Props) {
  const updatedDate = new Date(updatedAt).toLocaleDateString();
  return (
    <li className="border-b p-4 m-4">
      <Link className="flex flex-col gap-1" href={`/admin/posts/${id}`}>
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-xl text-gray-400">{updatedDate}</p>
      </Link>
    </li>
  );
}
