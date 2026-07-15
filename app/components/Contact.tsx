"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const socials = [
  {
    name: "Email",
    icon: HiOutlineMail,
    href: "mailto:jusiemleepontejon@gmail.com",
    value: "jusiemleepontejon@gmail.com",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/jusiemlee143",
    value: "github.com/jusiemlee143",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/your-linkedin",
    value: "linkedin.com/in/your-linkedin",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-36"
    >
      <div className="container">

        <SectionTitle
          eyebrow="Contact"
          title="Let's build something amazing together."
          description="I'm always open to discussing new opportunities, collaborations, or simply connecting with fellow developers."
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >
            <h3 className="text-3xl font-bold">
              Interested in working together?
            </h3>

            <p className="mt-8 text-lg leading-9 text-neutral-600">
              Whether you have a project, a job opportunity,
              or just want to say hello,
              feel free to reach out.
            </p>

            <a
              href="mailto:your@email.com"
              className="inline-flex mt-10 items-center gap-3 rounded-full bg-black px-8 py-4 text-white transition hover:scale-105"
            >
              Send an Email

              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* RIGHT */}

          <div className="space-y-6">

            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="flex items-center justify-between rounded-3xl border border-neutral-200 p-7 transition hover:shadow-lg"
                >
                  <div className="flex items-center gap-5">

                    <div className="rounded-full border p-4">
                      <Icon size={22} />
                    </div>

                    <div>
                      <p className="text-sm text-neutral-500">
                        {social.name}
                      </p>

                      <h4 className="font-semibold">
                        {social.value}
                      </h4>
                    </div>

                  </div>

                  <ArrowUpRight />
                </motion.a>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}