import PostsPage from "@/features/posts/components/PostsPage";
import { postsMetadata } from "./seo/posts.seo";

export const metadata = postsMetadata;

export default function Page() {
  return <PostsPage />;
}
