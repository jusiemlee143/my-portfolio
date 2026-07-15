"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.45 }}
      className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-2xl"
    >
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={700}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-8">

        <div className="flex items-start justify-between gap-4">

          <h3 className="text-3xl font-bold">
            {title}
          </h3>

          {demo && (
            <a
              href={demo}
              target="_blank"
              className="rounded-full border p-3 transition hover:bg-black hover:text-white"
            >
              <ArrowUpRight size={18} />
            </a>
          )}

        </div>

        <p className="mt-6 leading-8 text-neutral-600">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-neutral-300 px-4 py-2 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {(github || demo) && (
          <div className="mt-8 flex gap-4">

            {github && (
              <a
                href={github}
                target="_blank"
                className="flex items-center gap-2 font-medium transition hover:text-neutral-500"
              >
                <Code2 size={18} />
                GitHub
              </a>
            )}

            {demo && (
              <a
                href={demo}
                target="_blank"
                className="flex items-center gap-2 font-medium transition hover:text-neutral-500"
              >
                <ArrowUpRight size={18} />
                Live Demo
              </a>
            )}

          </div>
        )}

      </div>
    </motion.article>
  );
}