import { Box, Typography } from "@mui/material";

export default function StoryBlock({ index, text }: any) {
  return (
    <Box
      sx={{
        mb: 6,
        p: 4,
        borderRadius: 4,
        bgcolor: "#fff",
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: "#013d25", mb: 1, fontWeight: "bold" }}
      >
        بخش {index}
      </Typography>
      <Typography sx={{ color: "#444", lineHeight: 1.9 }}>{text}</Typography>
    </Box>
  );
}
