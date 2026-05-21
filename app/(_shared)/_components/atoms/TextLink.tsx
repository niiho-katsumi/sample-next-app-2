"use client";

import Link from "next/link";


type Props = {
  text: string;
  to: string;
};

export default function TextLink({ text, to }: Props) {
  return (
    <Link className="text-white font-bold" href={to}>
      {text}
    </Link>
  );
}
