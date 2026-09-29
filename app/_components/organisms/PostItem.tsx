"use client";
import type { ReactNode } from "react";
import Content from "../atoms/Content";
import DateText from "../atoms/DateText";
import Title from "../atoms/Title";
import TagList from "../molecules/TagList";
import { PostCategory } from "@/app/_types/type";
import Thumbnail from "../atoms/Thumbnail";

type Props = {
  createdAt: Date;
  categories: PostCategory[];
  title: string;
  content: ReactNode;
  omission: boolean;
  outline: boolean;
  thumbnailUrl?: string;
};

export default function PostItem({
  createdAt,
  categories,
  title,
  content,
  omission,
  outline,
  thumbnailUrl,
}: Props) {
  return (
    <>
      <div
        className={`p-4 mb-8 ${outline ? "border border-[#ccc] border-solid" : ""}`}
      >
        <div className="flex justify-between">
          <DateText createdAt={createdAt} />
          <TagList categories={categories} />
        </div>
        <Title title={title} />
        <div className="flex justify-between items-center mr-3.5">
          <Content omission={omission}>{content}</Content>
          {thumbnailUrl && (
            <Thumbnail
              title={thumbnailUrl}
              url={thumbnailUrl}
              width={70}
              height={70}
            />
          )}
        </div>
      </div>
    </>
  );
}
