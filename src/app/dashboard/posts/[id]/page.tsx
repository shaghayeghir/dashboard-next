// src/app/dashboard/posts/[id]/page.tsx

import PostDetailsPage from "@/features/posts/components/PostDetailsPage";
import { postDetailsMetadata } from "./seo";


export async function generateMetadata({ params }: { params: { id: string } }) {
  const resolvedParams = await params; 
  return postDetailsMetadata(resolvedParams.id);
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params; 
  return <PostDetailsPage postId={resolvedParams.id} />;
}
