"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const techStack = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind",
  "MongoDB",
  "Firebase",
  "ESP32",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="container">

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-24">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 text-center lg:order-1 lg:text-left"
          >

            {/* Badge */}

            <div className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600">
              Computer Engineer • Full Stack & IoT Developer
            </div>

            {/* Title */}

            <h1
              className="
              mt-8
              text-4xl
              font-black
              leading-tight
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
              "
            >
              Building modern web applications
              <br />
              and intelligent embedded systems
              <br />
              that solve real-world problems.
            </h1>

            {/* Description */}

            <p
              className="
              mx-auto
              mt-8
              max-w-xl
              text-base
              leading-8
              text-neutral-600
              sm:text-lg
              lg:mx-0
              "
            >
              Hi, I'm <strong>Jusiem Lee Pontejon</strong>, a Computer Engineering
              graduate passionate about building modern web applications,
              embedded systems, and digital experiences that solve real-world
              problems.
            </p>

            {/* Buttons */}

            <div
              className="
              mt-10
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:justify-center
              lg:justify-start
              "
            >
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-white transition hover:scale-105"
              >
                View Projects

                <ArrowRight size={18} />
              </a>

              <a
                href="/pontejonresume.pdf"
                className="flex items-center justify-center gap-2 rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
              >
                Resume

                <Download size={18} />
              </a>
            </div>

            {/* Tech */}

            <div
              className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-3
              lg:justify-start
              "
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-sm transition hover:bg-black hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:order-2 lg:max-w-lg"
          >
            <div className="overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-100 shadow-2xl">

              <Image
                src="/profile.png"
                alt="Jusiem Pontejon"
                width={700}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}