"use client";

import Card from "@/components/UI/Card";
import PostsPage from "@/features/posts/components/PostsPage";
import { RootState } from "@/store";
import {
  Avatar,
  Box,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useSelector } from "react-redux";
import { useDashboard } from "../hooks/useDashboard";
import fa from "@/locales/fa.json";
export default function DashboardPage() {
  const { user } = useSelector((state: RootState) => state.auth);
  const { data = [], error, isLoading } = useDashboard();
  const { theme } = useTheme();

  // 🎨 تعیین رنگ براساس تم
  const profileCardBg =
    theme === "dark"
      ? "linear-gradient(135deg, rgba(50,60,80,0.6), rgba(80,90,100,0.4))"
      : "linear-gradient(135deg, rgba(12, 43, 78, 0.7), rgba(139, 92, 246, 0.3))";

  return (
    <Box>
      {/* === Profile Card === */}
      {user && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card
            sx={{
              borderRadius: 5,
              p: 3,
              mb: 4,
              display: "flex",
              gap: 2,
              alignItems: "center",
              backdropFilter: "blur(12px)",
              background: profileCardBg,
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              transition: "all .3s ease",
              "&:hover": {
                boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                transform: "translateY(-4px)",
              },
            }}
          >
            <Avatar
              sx={{
                width: 75,
                height: 75,
                bgcolor: "#0C2B4E",
                color: "white",
                fontSize: 30,
                fontWeight: "bold",
                boxShadow: "0 2px 10px rgba(99,102,241,0.4)",
              }}
            >
              {user?.email?.charAt(0).toUpperCase()}
            </Avatar>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {user?.email}
              </Typography>
              <Chip
                label={
                  user?.role === "ADMIN"
                    ? fa.dashboardPage.admin
                    : fa.dashboardPage.user
                }
                sx={{
                  mt: 1,
                  color: "white",
                  bgcolor: user?.role === "ADMIN" ? "#EF4444" : "#10B981",
                  borderRadius: 2,
                  px: 1.5,
                }}
              />
            </Box>
          </Card>
        </motion.div>
      )}

      {/* === Summary Cards === */}
      <Grid container spacing={2} mb={4}>
        {[
          { title: fa.dashboardPage.totalPosts, value: data.length },
          {
            title: fa.dashboardPage.displayInDashboard,
            value: Math.min(data.length, 5),
          },
          {
            title: fa.dashboardPage.apiStatus,
            value: error ? fa.dashboardPage.error : fa.dashboardPage.connect,
          },
        ].map((item, i) => (
          <Grid key={i} size={{ xs: 12, md: 4, sm: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  transition: "all 0.25s ease",
                  cursor: "default",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    {item.title}
                  </Typography>
                  <Typography variant="h5" fontWeight="700">
                    {isLoading ? "..." : item.value}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <PostsPage />
    </Box>
  );
}
