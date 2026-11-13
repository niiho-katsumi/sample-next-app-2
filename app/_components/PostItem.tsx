"use client";
import type { ReactNode } from "react";
import Content from "./Content";
import DateText from "./DateText";
import Title from "./Title";
import Thumbnail from "./Thumbnail";
import TagList from "./TagList";
import { PostShowResponse } from "../api/posts/[id]/route";
import { getThumbnailImageUrl } from "../_libs/supabase";

type Props = {
  createdAt: Date;
  categories: PostShowResponse["post"]["postCategories"];
  title: string;
  content: ReactNode;
  omission: boolean;
  outline: boolean;
  thumbnailImageKey?: string;
};

export default function PostItem({
  createdAt,
  categories,
  title,
  content,
  omission,
  outline,
  thumbnailImageKey,
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
          {thumbnailImageKey && (
            <Thumbnail
              title={title}
              url={getThumbnailImageUrl(thumbnailImageKey)}
              width={70}
              height={70}
            />
          )}
        </div>
      </div>
    </>
  );
}
