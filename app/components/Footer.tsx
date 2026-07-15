"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/jusiemlee143",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/your-linkedin",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: "mailto:jusiemleepontejon@gmail.com",
    icon: HiOutlineMail,
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-10">
      <div className="container">

        {/* Top */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between gap-16"
        >
          <div className="max-w-2xl">

            <p className="uppercase tracking-[0.35em] text-neutral-400 text-sm">
              Thank You
            </p>

            <h2 className="mt-5 text-5xl md:text-7xl font-black leading-tight">
              Let's create
              <br />
              something amazing.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-400">
              Thank you for taking the time to explore my portfolio.
              I'm always excited to collaborate, learn, and build
              impactful software.
            </p>

          </div>

          {/* Back to top */}

          <div className="flex items-start lg:justify-end">

            <a
              href="#"
              className="flex items-center gap-3 rounded-full border border-white px-6 py-4 transition hover:bg-white hover:text-black"
            >
              Back to Top

              <ArrowUp size={18} />
            </a>

          </div>

        </motion.div>

        {/* Divider */}

        <div className="my-16 border-t border-neutral-800" />

        {/* Bottom */}

        <div className="flex flex-col gap-8 md:flex-row items-center justify-between">

          <div>

            <h3 className="text-2xl font-bold">
              Jusiem Pontejon
            </h3>

            <p className="mt-2 text-neutral-500">
              Computer Engineer • Full Stack Developer
            </p>

          </div>

          {/* Social */}

          <div className="flex items-center gap-5">

            {socials.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="rounded-full border border-neutral-700 p-4 transition hover:bg-white hover:text-black"
                >
                  <Icon size={22} />
                </a>
              );
            })}

          </div>

        </div>

        <div className="mt-16 border-t border-neutral-800 pt-8">

          <p className="text-center text-sm text-neutral-500">
            © {new Date().getFullYear()} Jusiem Pontejon.
            Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>

        </div>

      </div>
    </footer>
  );
}