"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="py-36 bg-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <SectionTitle
            eyebrow="About"
            title="Building software that solves real problems."
            description="I enjoy combining creativity with engineering to create modern web applications and embedded systems that are fast, clean, and user-friendly."
        />
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-neutral-200">

              <Image
                src="/profile.png"
                alt="Profile"
                width={700}
                height={900}
                className="w-full object-cover"
              />

            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <h3 className="text-3xl font-bold leading-tight">
              Hi, I'm Jusiem.
            </h3>

            <p className="mt-8 text-lg text-neutral-600 leading-9">
              I'm a Computer Engineering graduate passionate about creating
              modern web applications, embedded systems, and intuitive digital
              experiences. I enjoy solving real-world problems through clean
              code and thoughtful design.
            </p>

            <p className="mt-6 text-lg text-neutral-600 leading-9">
              My interests span full-stack web development, IoT, embedded
              systems, and UI/UX design. Whether it's building scalable web
              applications or integrating hardware with software, I love
              bringing ideas to life.
            </p>

            <p className="mt-6 text-lg text-neutral-600 leading-9">
              Outside of coding, I'm always learning new technologies,
              exploring design trends, and finding better ways to build
              efficient, elegant software.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12">

              <div>
                <h4 className="text-5xl font-black">
                  4+
                </h4>

                <p className="mt-2 text-neutral-500">
                  Projects Completed
                </p>
              </div>

              <div>
                <h4 className="text-5xl font-black">
                  3+
                </h4>

                <p className="mt-2 text-neutral-500">
                  Years Learning
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}