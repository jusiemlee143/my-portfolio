"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean) as Element[];

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.id);
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-neutral-200 bg-white/90 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 sm:h-20 items-center justify-between">

          {/* Logo */}

          <Link
            href="#home"
            className="text-xl sm:text-2xl font-black tracking-tight"
          >
            JP.
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm transition font-medium ${
                  active === item.href.replace("#", "")
                    ? "text-black"
                    : "text-neutral-500 hover:text-black"
                }`}
              >
                {item.name}
              </a>
            ))}

          </nav>

          {/* Resume */}

          <a
            href="/pontejonresume.pdf"
            className="hidden lg:flex rounded-full border border-black px-5 py-2.5 text-sm font-medium transition hover:bg-black hover:text-white"
          >
            Resume
          </a>

          {/* Mobile Button */}

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation Menu"
          >
            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-white border-b border-neutral-200 shadow-lg lg:hidden"
          >
            <div className="container py-6">

              <nav className="flex flex-col gap-2">

                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-4 transition ${
                      active === item.href.replace("#", "")
                        ? "bg-black text-white"
                        : "hover:bg-neutral-100"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}

              </nav>

              <a
                href="/pontejonresume.pdf"
                className="mt-6 flex justify-center rounded-xl bg-black px-6 py-4 text-white"
              >
                Download Resume
              </a>

            </div>
          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}