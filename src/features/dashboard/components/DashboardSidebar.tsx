"use client";

import { VerifiedUser } from "@mui/icons-material";
import ArticleIcon from "@mui/icons-material/Article";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { text: "داشبورد", icon: <DashboardIcon />, href: "/dashboard" },
  { text: "پست‌ها", icon: <ArticleIcon />, href: "/dashboard/posts" },
  { text: "تنظیمات", icon: <SettingsIcon />, href: "/dashboard/settings" },
  { text: "فرم کارکنان", icon: <VerifiedUser />, href: "/dashboard/userForm" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const theme = useTheme();

  // 🎨 پالت رنگ درست بر اساس تم
  const isDark = theme.palette.mode === "dark";
  const bgColor = isDark ? "#1E293B" : "white";
  const hoverColor = isDark ? "#334155" : "#E2E8F0"; // رنگ hover
  const textColor = isDark ? "#F8FAFC" : "#1E293B"; // رنگ متن

  return (
    <Box
      width={240}
      bgcolor={bgColor}
      color={textColor}
      sx={{
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        height: "100vh",
        position: "sticky",
        right: 0,
        borderLeft: isDark
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <Typography variant="h6" fontWeight="bold" textAlign="center" py={2}>
        🎛 ACME Panel
      </Typography>

      <Divider
        sx={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : undefined }}
      />

      <List>
        {menuItems.map((item, idx) => {
          const isActive = pathname === item.href;

          return (
            <Link key={idx} href={item.href} passHref>
              <ListItemButton
                selected={isActive}
                sx={{
                  color: textColor, // متن درست
                  "&.Mui-selected": {
                    bgcolor: hoverColor,
                    color: textColor,
                    fontWeight: "bold",
                  },
                  "&:hover": {
                    bgcolor: hoverColor,
                    color: textColor,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: textColor, // رنگ آیکون درست
                    minWidth: 38,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          );
        })}
      </List>
    </Box>
  );
}
