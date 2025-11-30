"use client";

import { useQuery } from "@tanstack/react-query";
import { PostService } from "../services/post.service";

export const usePostDetails = (id: string) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => PostService(id),
  });
};
