import { useParams } from "react-router-dom";
import PostDetailList from "../organisms/PostDetailList";
import { useEffect, useState } from "react";
import type { PostInfo } from "../../type";

export default function PostDetail() {
  const [post, setPost] = useState<PostInfo>();
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setIsLoading(true);
    const fetcher = async (): Promise<void> => {
      const res = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`,
      );
      const data = await res.json();
      setPost(data.post);
      setIsLoading(false);
    };
    fetcher();
  }, []);

  if (isLoading) return <p>読み込み中...</p>;

  if (!post) return <p>記事が見つかりません</p>;

  return (
    <>
      <PostDetailList post={post} omission={false} outline={false} />
    </>
  );
}
