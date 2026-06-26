"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import VideoCard from "@/components/VideoCard";
import type { Category } from "@/lib/types";

interface CategorySectionProps {
  category: Category;
  index: number;
}

export default function CategorySection({ category, index }: CategorySectionProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  const isEven = index % 2 === 0;

  return (
    <section
      id={category.id}
      className="section-base relative"
    >
      {/* Subtle alternating background tint */}
      {!isEven && (
        <div className="absolute inset-0 bg-[var(--bg-surface)] opacity-40 pointer-events-none" />
      )}

      {/* Decorative accent bar */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="mb-10">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "3rem" } : { width: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-0.5 bg-[var(--accent)] mb-4"
          />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.1 }}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center gap-4">
              <h2 className="font-display text-[clamp(2rem,6vw,4rem)] tracking-widest text-white leading-none">
                {category.title}
              </h2>
              <span className="tag hidden sm:inline-block">
                {category.videos.length} {category.videos.length === 1 ? "video" : "videos"}
              </span>
            </div>
            <p className="text-[var(--text-muted)] text-sm md:text-base max-w-xl leading-relaxed">
              {category.description}
            </p>
          </motion.div>
        </div>

        {/* Video carousel / empty state */}
        {category.videos.length > 0 ? (
          <>
            <div
              className="scroll-x pb-4"
              role="list"
              aria-label={`${category.title} videos`}
            >
              {category.videos.map((video, i) => (
                <div key={video.id} role="listitem">
                  <VideoCard
                    video={video}
                    aspectRatio={category.aspectRatio}
                    index={i}
                  />
                </div>
              ))}
            </div>

            {/* Scroll hint (visible only when there are many items) */}
            {category.videos.length > 2 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 }}
                className="text-[var(--text-muted)] text-xs tracking-widest uppercase mt-4 flex items-center gap-2"
              >
                <span>Scroll to explore</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.p>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 py-16 px-8 rounded-md border border-dashed border-[var(--border)] bg-[var(--bg-surface)] bg-opacity-50"
            aria-label="No videos yet"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.2"
              opacity="0.6"
            >
              <circle cx="12" cy="12" r="10"/>
              <polygon points="10 8 16 12 10 16 10 8" fill="var(--accent)" opacity="0.4"/>
            </svg>
            <p className="text-[var(--text-muted)] text-sm tracking-widest uppercase">
              Coming Soon
            </p>
            <p className="text-[var(--text-muted)] text-xs text-center max-w-xs opacity-60">
              Videos will appear here once uploaded.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
