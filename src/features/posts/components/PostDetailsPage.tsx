"use client";

import Card from "@/components/UI/Card";
import fa from "@/locales/fa.json";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { usePostDetails } from "../hooks/usePostDetails";

export default function PostDetailsPage({ postId }: { postId: string }) {

  const { data, isLoading, error } = usePostDetails(postId);

  if (isLoading) return <CircularProgress />;
  if (error)
    return <Typography color="error">{fa.postDetail.postNotFound}</Typography>;

  return (
    <Box>
      <Card>
        <Typography
          variant="h5"
          fontWeight="bold"
          mb={2}
          sx={{ color: "text.primary" }}
        >
          {data.title}
        </Typography>
        <Divider className="py-3" />
        <Typography
          variant="body1"
          sx={{ color: "text.secondary" }}
          className="py-3"
        >
          {data.body}
        </Typography>
      </Card>
    </Box>
  );
}
