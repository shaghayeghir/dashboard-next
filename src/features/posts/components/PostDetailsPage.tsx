"use client";

import { Box, Typography, CircularProgress } from "@mui/material";
import { usePostDetails } from "../hooks/usePostDetails";

export default function PostDetailsPage({ postId }: { postId: string }) {
  const { data, isLoading, error } = usePostDetails(postId);

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography color="error">پست یافت نشد</Typography>;

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        {data.title}
      </Typography>
      <Typography variant="body1">{data.body}</Typography>
    </Box>
  );
}
