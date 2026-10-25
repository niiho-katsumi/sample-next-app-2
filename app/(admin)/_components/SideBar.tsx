"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col gap-1  bg-gray-400 min-w-xs">
      <Link
        className={`p-4 ${pathname.includes("/admin/posts") ? "bg-amber-200" : ""} `}
        href={"/admin/posts"}
      >
        記事一覧
      </Link>
      <Link
        className={`p-4 ${pathname.includes("/admin/categories") ? "bg-amber-200" : ""} `}
        href={"/admin/categories"}
      >
        カテゴリー一覧
      </Link>
    </aside>
  );
}
