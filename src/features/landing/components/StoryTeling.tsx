import { Typography } from "@mui/material";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function StoryScroll({ text }: { text: string }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      transition={{ duration: 0.6 }}
    >
      <Typography
        variant="h6"
        mb={4}
        sx={{
          maxWidth: 600,
          mx: "auto",
          lineHeight: 1.9,
          textAlign: "center",
        }}
      >
        {text}
      </Typography>
    </motion.div>
  );
}