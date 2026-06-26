"use client";

import { motion } from "framer-motion";
import type { HeroData } from "@/lib/types";

interface HeroProps {
  hero: HeroData;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Hero({ hero }: HeroProps) {
  const whatsappUrl = `https://wa.me/${hero.whatsapp.replace(/\D/g, "")}`;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise-overlay"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(229,9,20,0.06) 0%, transparent 70%)",
        }}
      />
      {/* Subtle scanline effect */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
        }}
      />
      {/* Top vignette */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10" />
      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-10" />

      {/* Decorative lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2 items-center z-20">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-[var(--border)]" />
        <span className="font-display text-xs tracking-[0.4em] text-[var(--text-muted)] rotate-90 my-8">
          SCROLL
        </span>
        <div className="w-px h-24 bg-gradient-to-t from-transparent to-[var(--border)]" />
      </div>

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-20 text-center max-w-5xl mx-auto px-6 pt-24 md:pt-0"
      >
        {/* Eyebrow tag */}
        <motion.div variants={item} className="mb-5 flex justify-center">
          <span className="tag">Video editor and Content Creator</span>
        </motion.div>

        {/* Brand name */}
        <motion.h1
          variants={item}
          className="font-display text-[clamp(3rem,14vw,11rem)] leading-none tracking-widest text-white mb-5 md:mb-4"
        >
          {hero.brandName}
        </motion.h1>

        {/* Accent divider */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-[var(--accent)]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-[var(--accent)]" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="font-display text-[clamp(1.1rem,4vw,2.8rem)] tracking-widest text-[var(--text-secondary)] mb-5 md:mb-4 leading-tight"
        >
          {hero.tagline}
        </motion.p>

        {/* Bio */}
        <motion.div variants={item} className="mb-10 md:mb-12 w-full">
          <p className="text-[var(--text-muted)] text-sm md:text-lg leading-relaxed px-4 md:px-24 text-center">
            {hero.bio}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-row gap-3 justify-center items-center flex-wrap"
        >
          <a id="hero-email-cta" href={`mailto:${hero.email}`} className="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email Me
          </a>
          <a
            id="hero-whatsapp-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            WhatsApp Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[var(--text-muted)] text-[10px] tracking-[0.3em] uppercase font-semibold">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[var(--accent)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
