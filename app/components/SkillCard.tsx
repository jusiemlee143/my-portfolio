"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
}

export default function SkillCard({
  icon: Icon,
  title,
  description,
  skills,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.4,
      }}
      className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all"
    >
      <Icon
        size={30}
        className="mb-6"
      />

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-neutral-600 leading-7">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-black hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}