import type { PostInfo } from "../../type";
import Thumbnail from "../atoms/Thumbnail";
import PostItem from "./PostItem";

type Props = {
  post: PostInfo;
  omission: boolean;
  outline: boolean;
};

export default function PostDetailList({ post, omission, outline }: Props) {
  const { title, thumbnailUrl, createdAt, categories, content } = post;
  return (
    <>
      <Thumbnail title={title} url={thumbnailUrl} />
      <div className="p-4">
        <PostItem
          createdAt={createdAt}
          categories={categories}
          title={title}
          content={content}
          omission={omission}
          outline={outline}
        />
      </div>
    </>
  );
}
