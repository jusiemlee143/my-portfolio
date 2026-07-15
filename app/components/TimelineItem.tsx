"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: LucideIcon;
}

export default function TimelineItem({
  year,
  title,
  company,
  description,
  icon: Icon,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex gap-8"
    >
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-sm">
          <Icon size={24} />
        </div>

        <div className="mt-2 h-full w-px bg-neutral-300" />
      </div>

      {/* Content */}
      <div className="pb-16">
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
          {year}
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          {title}
        </h3>

        <h4 className="mt-1 text-lg font-medium text-neutral-600">
          {company}
        </h4>

        <p className="mt-5 max-w-2xl leading-8 text-neutral-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
}