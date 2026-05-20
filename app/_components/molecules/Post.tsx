import { Link } from "react-router-dom";
import type { PostInfo } from "../../type";
import PostItem from "../organisms/PostItem";

type Props = {
  PostInfo: PostInfo;
  omission: boolean;
  outline: boolean;
};

export default function Post({ PostInfo, omission, outline }: Props) {
  const { id, title, categories, createdAt, content } = PostInfo;
  return (
    <li className="flex flex-col m-0 p-0 list-none">
      <Link to={`/posts/${id}`}>
        <PostItem
          createdAt={createdAt}
          categories={categories}
          title={title}
          content={content}
          omission={omission}
          outline={outline}
        />
      </Link>
    </li>
  );
}
