"use client";

import Card from "@/components/UI/Card";
import { useDashboard } from "@/features/dashboard/hooks/useDashboard";
import fa from "@/locales/fa.json";
import {
  Box,
  CircularProgress,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
export default function PostsPage() {
  const [page, setPage] = useState(1);
  const { data = [], isLoading, error } = useDashboard(page, 6); // 6 آیتم در هر صفحه

  if (isLoading) return <CircularProgress />;
  if (error)
    return <Typography color="error"> {fa.post.errorInGetInfo} </Typography>;

  return (
    <Box>
      <Grid container spacing={2}>
        {data.map((post: any) => (
          <Grid key={post.id} size={{ xs: 12, md: 4, sm: 6 }}>
            <Link
              href={`/dashboard/posts/${post.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card>
                <Typography fontWeight="bold" noWrap>
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {post.body}
                </Typography>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>

      {/* 🔥 Pagination */}
      <Box mt={4} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(100 / 6)} // چون jsonplaceholder فقط 100 تا پست داره
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
      </Box>
    </Box>
  );
}
