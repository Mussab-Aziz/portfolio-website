"use client";

import { motion } from "framer-motion";
import type { HeroData, Social } from "@/lib/types";

interface FooterProps {
  hero: HeroData;
  social: Social;
}

export default function Footer({ hero, social }: FooterProps) {
  const whatsappUrl = `https://wa.me/${hero.whatsapp.replace(/\D/g, "")}`;

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-3 mb-3 rounded-xl border border-white/[0.07] bg-black/40 backdrop-blur-md"
    >
      <div className="px-8 md:px-16 py-12 md:py-16">

        {/* Intro label */}
        <p className="text-center text-[var(--text-muted)] text-xs tracking-[0.25em] uppercase" style={{ marginBottom: '24px', paddingTop: '16px' }}>
          Get in touch
        </p>

        {/* Contact + Social links — centered */}
        <div className="flex flex-wrap justify-center gap-4" style={{ marginTop: '20px', marginBottom: '28px' }}>

          {/* Email */}
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${hero.email}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send an email via Gmail"
            className="group relative flex items-center gap-3 rounded-lg border border-white/[0.15] bg-gradient-to-b from-white/[0.12] to-white/[0.04] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-[var(--accent)]/40 hover:shadow-[0_0_20px_rgba(229,9,20,0.15)] hover:scale-105 transition-all duration-300"
            style={{ padding: '5px 10px' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50 group-hover:text-[var(--accent)] transition-colors duration-300">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300 font-medium">
              Email
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
            className="group relative flex items-center gap-3 rounded-lg border border-white/[0.15] bg-gradient-to-b from-white/[0.12] to-white/[0.04] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-[var(--accent)]/40 hover:shadow-[0_0_20px_rgba(229,9,20,0.15)] hover:scale-105 transition-all duration-300"
            style={{ padding: '5px 10px' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/50 group-hover:text-[var(--accent)] transition-colors duration-300">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300 font-medium">
              WhatsApp
            </span>
          </a>

          {/* Instagram */}
          {social.instagram && (
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 rounded-lg border border-white/[0.15] bg-gradient-to-b from-white/[0.12] to-white/[0.04] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-[var(--accent)]/40 hover:shadow-[0_0_20px_rgba(229,9,20,0.15)] hover:scale-105 transition-all duration-300"
            style={{ padding: '5px 10px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-white/50 group-hover:text-[var(--accent)] transition-colors duration-300">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300 font-medium">
                Instagram
              </span>
            </a>
          )}

          {/* LinkedIn */}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 rounded-lg border border-white/[0.15] bg-gradient-to-b from-white/[0.12] to-white/[0.04] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-[var(--accent)]/40 hover:shadow-[0_0_20px_rgba(229,9,20,0.15)] hover:scale-105 transition-all duration-300"
            style={{ padding: '5px 10px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/50 group-hover:text-[var(--accent)] transition-colors duration-300">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300 font-medium">
                LinkedIn
              </span>
            </a>
          )}

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" style={{ marginTop: '28px', marginBottom: '24px' }} />

        {/* Bottom — copyright */}
        <p className="text-center text-white/30 text-xs tracking-widest">
          © {new Date().getFullYear()} {hero.brandName}. All rights reserved.
        </p>

      </div>
    </motion.footer>
  );
}
