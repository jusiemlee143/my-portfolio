"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectShowcaseProps {
  reverse?: boolean;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export default function ProjectShowcase({
  reverse = false,
  title,
  subtitle,
  description,
  image,
  technologies,
  github,
  demo,
}: ProjectShowcaseProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`grid items-center gap-20 py-20 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}

      <div className="group overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-100 shadow-xl">

        <Image
          src={image}
          alt={title}
          width={1200}
          height={700}
          className="transition duration-700 group-hover:scale-105"
        />

      </div>

      {/* Content */}

      <div>

        <p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
          {subtitle}
        </p>

        <h2 className="mt-4 text-5xl font-black">
          {title}
        </h2>

        <p className="mt-8 text-lg leading-9 text-neutral-600">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-neutral-300 px-4 py-2 text-sm transition hover:bg-black hover:text-white"
            >
              {tech}
            </span>
          ))}

        </div>

        <div className="mt-12 flex gap-5">

          {github && (
            <a
              href={github}
              target="_blank"
              className="rounded-full border border-black px-6 py-3 transition hover:bg-black hover:text-white"
            >
              GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition hover:scale-105"
            >
              Live Demo

              <ArrowUpRight size={18} />
            </a>
          )}

        </div>

      </div>

    </motion.section>
  );
}