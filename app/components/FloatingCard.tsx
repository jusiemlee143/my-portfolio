"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function FloatingCard() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute -bottom-8 -right-8 hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl lg:block"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-black p-3 text-white">
          <Code2 size={24} />
        </div>

        <div>
          <p className="text-sm text-neutral-500">
            Currently Building
          </p>

          <h4 className="font-bold">
            Full Stack Apps
          </h4>
        </div>
      </div>
    </motion.div>
  );
}