import PostItem from "./PostItem";
import { PostsIndexResponse } from "@/app/api/admin/posts/route";

type Props = {
  posts: PostsIndexResponse["posts"];
};

export default function PostList({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} title={post.title} updatedAt={post.updatedAt} id={String(post.id)}/>
      ))}
    </ul>
  );
}
