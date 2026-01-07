import type { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

export const itemVariants: Variants = {
  hidden: {
    x: 300,
    y: -300,
    opacity: 0,
    rotate: 90,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 1,
    },
  },
};