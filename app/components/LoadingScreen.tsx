"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>

      {loading && (
        <motion.div
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="text-5xl font-black"
          >
            JP.
          </motion.h1>
        </motion.div>
      )}

    </AnimatePresence>
  );
}