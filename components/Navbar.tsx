"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { Category } from "@/lib/types";

interface NavbarProps {
  categories: Category[];
  brandName: string;
}

export default function Navbar({ categories, brandName }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-3 left-3 right-3 z-50 rounded-xl transition-all duration-500 ${
          scrolled ? "glass-dark py-3" : "py-4 bg-black/30 backdrop-blur-sm border border-white/5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-8 md:px-14 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-2xl tracking-widest text-white hover:text-[var(--accent)] transition-colors duration-300 whitespace-nowrap"
            aria-label="Go to top"
          >
            {brandName}
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => scrollTo(cat.id)}
                  className="animated-underline text-xs font-semibold tracking-widest uppercase text-[var(--text-secondary)] hover:text-white transition-colors duration-200"
                >
                  {cat.title}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center transition-all"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 glass-dark flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {categories.map((cat, i) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(cat.id)}
                className="font-display text-3xl tracking-widest text-white hover:text-[var(--accent)] transition-colors"
              >
                {cat.title}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
