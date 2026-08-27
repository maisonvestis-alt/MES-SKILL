"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { PhoneCall, ClockCountdown, Star } from "@phosphor-icons/react/dist/ssr";
import { business, reviews, heroMedia } from "@/lib/content";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const hasVideo = Boolean(heroMedia.videoMp4 || heroMedia.videoWebm);

  return (
    <section id="accueil" className="relative overflow-hidden bg-[color:var(--color-ink)] pt-20">
      <div className="container-page grid gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8 lg:py-24">
        <motion.div
          initial={reduceMotion ? undefined : "hidden"}
          animate="visible"
          variants={container}
        >
          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <span className="status-badge">
              <span className="dot" aria-hidden="true" />
              Disponible maintenant
            </span>
            <span className="status-badge">Le Havre · 76610</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-[color:var(--color-text-on-dark)] sm:text-6xl md:text-7xl"
          >
            Votre urgence.
            <br />
            <span className="text-[color:var(--color-accent)]">Notre</span> expertise.
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-lg font-mono text-sm text-[color:var(--color-paper-dim)] sm:text-base">
            {"// SERRURERIE — PLOMBERIE — VITRERIE"}
            <br />
            Intervention professionnelle en moins de 45 minutes, 24h/24, 7j/7.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${business.phoneHref}`}
              className="inline-flex items-center gap-2.5 bg-[color:var(--color-accent)] px-6 py-4 font-mono text-sm font-bold uppercase tracking-wide text-[color:var(--color-ink)] transition hover:bg-[color:var(--color-accent-strong)]"
            >
              <PhoneCall size={18} weight="fill" aria-hidden="true" />
              Intervention urgente — {business.phone}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-[color:var(--color-hairline)] px-6 py-4 font-mono text-sm font-bold uppercase tracking-wide text-[color:var(--color-text-on-dark)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent-strong)]"
            >
              Devis gratuit
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 grid grid-cols-2 gap-px border border-[color:var(--color-hairline)] bg-[color:var(--color-hairline)] sm:grid-cols-4"
          >
            <div className="bg-[color:var(--color-ink)] px-4 py-4">
              <span className="tabular-figures block font-mono text-lg font-bold text-[color:var(--color-accent-strong)]">&lt; 45 min</span>
              <span className="text-xs uppercase tracking-wide text-[color:var(--color-steel)]">Délai</span>
            </div>
            <div className="bg-[color:var(--color-ink)] px-4 py-4">
              <span className="tabular-figures block font-mono text-lg font-bold text-[color:var(--color-accent-strong)]">24 / 7</span>
              <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wide text-[color:var(--color-steel)]">
                <ClockCountdown size={13} aria-hidden="true" /> Fériés inclus
              </span>
            </div>
            <div className="bg-[color:var(--color-ink)] px-4 py-4">
              <span className="tabular-figures block font-mono text-lg font-bold text-[color:var(--color-accent-strong)]">0 €</span>
              <span className="text-xs uppercase tracking-wide text-[color:var(--color-steel)]">Devis</span>
            </div>
            <div className="bg-[color:var(--color-ink)] px-4 py-4">
              <span className="tabular-figures block font-mono text-lg font-bold text-[color:var(--color-accent-strong)]">
                {reviews.rating} / 5
              </span>
              <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wide text-[color:var(--color-steel)]">
                <Star size={13} weight="fill" aria-hidden="true" /> {reviews.count} avis
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bracket-frame relative m-1 aspect-[4/5] overflow-hidden lg:aspect-[3/4]"
        >
          {hasVideo ? (
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={heroMedia.poster}
              preload="none"
            >
              {heroMedia.videoWebm && <source src={heroMedia.videoWebm} type="video/webm" />}
              {heroMedia.videoMp4 && <source src={heroMedia.videoMp4} type="video/mp4" />}
            </video>
          ) : (
            <Image
              src={heroMedia.poster}
              alt={heroMedia.posterAlt}
              width={heroMedia.posterWidth}
              height={heroMedia.posterHeight}
              priority
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
