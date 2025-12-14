import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function StoryBlock({ index, text }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <Box
        sx={{
          mb: 6,
          p: { xs: 3, md: 4 },
          borderRadius: 4,
          position: "relative",
          overflow: "hidden",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",

          // Glass card
          background: "rgba(255,255,255,0.55)",

          // Soft premium shadow
          boxShadow:
            "0 30px 60px rgba(0,0,0,0.08), 0 8px 20px rgba(1,61,37,0.08)",

          border: "1px solid rgba(255,255,255,0.4)",
        }}
      >
        {/* 🔥 Gradient Accent Line */}
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "7px",
            background:
              "linear-gradient(180deg, #013D25 0%, #06A06A 100%)",
            borderRadius: "0 6px 6px 0",
          }}
        />

        {/* 🔥 Abstract Glow Behind Card */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 80% 20%, rgba(1,61,37,0.18), transparent 60%)",
            opacity: 0.8,
            pointerEvents: "none",
          }}
        />

        {/* 🔥 Number Badge */}
        <Box
          sx={{
            position: "absolute",
            top: 12,
            left: 16,
            px: 2.2,
            py: 0.7,
            borderRadius: "14px",
            fontWeight: "bold",
            fontSize: "0.85rem",
            background: "rgba(1,61,37,0.85)",
            color: "#FAECCD",
            boxShadow: "0 4px 12px rgba(1,61,37,0.35)",
          }}
        >
           {index}
        </Box>

        {/* 🔥 Title (Small but premium) */}
        <Typography
          sx={{
            color: "#013D25",
            fontSize: { xs: "1.1rem", md: "1.25rem" },
            fontWeight: "bold",
            mb: 1.5,
            mt: 5,
            fontFamily: "BTitr",
          }}
        >
  
        </Typography>

        {/* 🔥 Description */}
        <Typography
          sx={{
            color: "#2A2A2A",
            opacity: 0.92,
            lineHeight: 1.9,
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            fontFamily: "Vazir",
          }}
        >
          {text}
        </Typography>
      </Box>
    </motion.div>
  );
}
