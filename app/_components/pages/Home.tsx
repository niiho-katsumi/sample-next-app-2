import { useEffect, useState } from "react";
import PostList from "../organisms/PostList";
import type { PostInfo } from "../../type";

export default function Home() {
  const [posts, setPosts] = useState<PostInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetcher = async (): Promise<void> => {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts",
      );
      const data = await res.json();
      setPosts(data.posts);
      setIsLoading(false);
    };
    fetcher();
  }, []);

  if (isLoading) return <p>読み込み中...</p>;

  if (!posts) return <p>記事が見つかりません</p>;

  return (
    <>
      <PostList posts={posts} omission={true} outline={true} />
    </>
  );
}
