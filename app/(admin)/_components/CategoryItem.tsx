import Link from "next/link";

type Props = {
  title: string;
  id: string;
};

export default function CategoryItem({ title, id }: Props) {
  return (
    <li className="border-b p-4 m-4">
      <Link className="flex flex-col gap-1" href={`/admin/categories/${id}`}>
        <p className="text-2xl font-bold">{title}</p>
      </Link>
    </li>
  );
}
