"use client";
import Link from "next/link";
import type { ComponentProps } from "react";

type Props = {
  to: string;
  text: string;
} & ComponentProps<"button">;

export default function Button({ to, text, ...buttonProps }: Props) {
  return (
    <button
      className={"bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"}
      {...buttonProps}
    >
      <Link href={to}>{text}</Link>
    </button>
  );
}
