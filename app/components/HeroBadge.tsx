"use client";

import { motion } from "framer-motion";

interface HeroBadgeProps {
  text: string;
}

export default function HeroBadge({ text }: HeroBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium shadow-sm"
    >
      <span className="mr-2 h-2 w-2 rounded-full bg-green-500" />
      {text}
    </motion.div>
  );
}