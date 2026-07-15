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

        <div className="text-center">
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
    Who I Am
  </p>

  <SectionTitle title="About Me" />

  <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-600">
    Get to know more about my background, passion, and the technologies
    I use to build modern web applications and IoT solutions.
  </p>
</div>
        
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
              I am a Computer Engineering graduate from Cebu Institute of Technology – University 
              with a strong interest in Full Stack Web Development, Embedded Systems, and IoT.
            </p>

            <p className="mt-6 text-lg text-neutral-600 leading-9">
              I enjoy creating responsive web applications, integrating hardware with software, 
              and building practical solutions that improve everyday processes. 
              My experience ranges from developing web systems using Next.js and MongoDB 
              to creating IoT-based monitoring systems using Arduino and Firebase.
            </p>

            <p className="mt-6 text-lg text-neutral-600 leading-9">
              I continuously seek opportunities to expand my technical knowledge while building clean, 
              scalable, and user-focused applications.
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