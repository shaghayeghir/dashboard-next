"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function ClientFooter() {
  return (
    <Box
      sx={{
        mt: 8,
        py: 4,
        bgcolor: "#013d25",
        color: "white",
        textAlign: "center",
      }}
    >
      <Box display="flex" justifyContent="center" gap={2}>
        <motion.a
          whileHover={{ scale: 1.2, rotate: 5 }}
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={26} />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2, rotate: -5 }}
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={26} />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://wa.me/989000000000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={26} />
        </motion.a>
      </Box>

      <Typography mt={2} fontSize={12}>
        © {new Date().getFullYear()} Kartopia – All Rights Reserved
      </Typography>
    </Box>
  );
}
