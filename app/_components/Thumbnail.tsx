"use client";
import Image from "next/image";
type Props = {
  title: string;
  url: string;
  width: number;
  height: number;
};

export default function Thumbnail({ title, url, width, height }: Props) {
  return (
    <>
      <Image src={url} alt={title} width={width} height={height} />
    </>
  );
}
