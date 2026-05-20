import type { ReactNode } from "react";
import Content from "../atoms/Content";
import DateText from "../atoms/DateText";
import Title from "../atoms/Title";
import TagList from "../molecules/TagList";

type Props = {
  createdAt: string;
  categories: string[];
  title: string;
  content: ReactNode;
  omission: boolean;
  outline: boolean;
};

export default function PostItem({
  createdAt,
  categories,
  title,
  content,
  omission,
  outline,
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
        <Content omission={omission}>{content}</Content>
      </div>
    </>
  );
}
