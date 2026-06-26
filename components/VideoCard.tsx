"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toEmbedUrl } from "@/lib/driveUtils";
import type { Video } from "@/lib/types";

interface VideoCardProps {
  video: Video;
  aspectRatio: "16/9" | "9/16";
  index: number;
}

export default function VideoCard({ video, aspectRatio, index }: VideoCardProps) {
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const embedUrl = toEmbedUrl(video.driveUrl);

  const isPortrait = aspectRatio === "9/16";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        ease: "easeOut" as const,
        delay: index * 0.08,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group rounded-md overflow-hidden border border-[var(--border)] transition-all duration-400 ${
        hovered ? "border-[var(--border-accent)] shadow-[0_0_24px_var(--accent-glow)]" : ""
      } ${isPortrait ? "w-[240px] md:w-[280px]" : "w-[340px] md:w-[420px] lg:w-[500px]"}`}
      style={{ flexShrink: 0 }}
    >
      {/* Aspect ratio wrapper */}
      <div
        className="relative w-full bg-[var(--bg-surface)]"
        style={{
          paddingBottom: isPortrait ? "177.78%" : "56.25%",
        }}
      >
        {/* Loading shimmer */}
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[var(--bg-surface)] via-[var(--bg-raised)] to-[var(--bg-surface)]" />
        )}

        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
          onLoad={() => setLoaded(true)}
          title={video.title}
          style={{ border: "none" }}
        />
      </div>

      {/* Title overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
        transition={{ duration: 0.25 }}
        className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent"
      >
        <p className="text-white text-sm font-semibold leading-tight line-clamp-2">
          {video.title}
        </p>
      </motion.div>

      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-6 h-6 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-6 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-0 left-0 w-6 h-px bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}
