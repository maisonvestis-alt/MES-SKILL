"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Fond du hero — "plein écran vidéo" étalonné nuit.
 *
 * Couches, du fond vers la surface :
 *   1. <video> muette en boucle (footage client) + poster cinématographique
 *   2. halo "torche de secours" orange qui respire
 *   3. braises ascendantes rendues sur <canvas>
 *   4. grain + vignette + voile de lisibilité
 *
 * Tant que /videos/hero.(webm|mp4) n'existe pas, le poster suffit : la scène
 * reste vivante grâce aux braises et au grain. `prefers-reduced-motion` fige
 * tout et met la vidéo en pause.
 */
export default function HeroBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  // Vidéo : autoplay uniquement si le mouvement est autorisé.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduceMotion) {
      video.pause();
      return;
    }
    const play = video.play();
    if (play && typeof play.catch === "function") {
      // Autoplay bloqué (data saver, onglet inactif) : le poster reste, pas d'erreur.
      play.catch(() => {});
    }
  }, [reduceMotion]);

  // Parallaxe GSAP ScrollTrigger : le média glisse plus lentement que le contenu.
  // GSAP est importé en dynamique (hors bundle initial) et n'agit que sur du
  // hors-écran non critique.
  useEffect(() => {
    if (reduceMotion || !mediaRef.current || !rootRef.current) return;
    let mounted = true;
    let kill = () => {};

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (!mounted || !mediaRef.current || !rootRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const trigger = ScrollTrigger.create({
        trigger: rootRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        animation: gsap.fromTo(
          mediaRef.current,
          { yPercent: 0, scale: 1.08 },
          { yPercent: 14, scale: 1.18, ease: "none" }
        ),
      });
      kill = () => trigger.kill();
    })();

    return () => {
      mounted = false;
      kill();
    };
  }, [reduceMotion]);

  // Braises ascendantes sur canvas — additif, léger, économe.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduceMotion) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;

    type Ember = {
      x: number;
      y: number;
      r: number;
      vy: number;
      vx: number;
      life: number;
      max: number;
    };
    let embers: Ember[] = [];

    const spawn = (initial = false): Ember => {
      const max = 220 + Math.random() * 320;
      return {
        x: Math.random() * width * 0.62, // concentrées côté halo (bas-gauche)
        y: initial ? Math.random() * height : height + Math.random() * 40,
        r: 0.6 + Math.random() * 1.8,
        vy: 0.12 + Math.random() * 0.5,
        vx: -0.14 + Math.random() * 0.28,
        life: initial ? Math.random() * max : 0,
        max,
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(56, Math.round(width / 26));
      embers = Array.from({ length: count }, () => spawn(true));
    };

    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      for (const e of embers) {
        e.life += 1;
        e.y -= e.vy;
        e.x += e.vx + Math.sin(e.life * 0.02) * 0.18;
        if (e.life > e.max || e.y < -10) Object.assign(e, spawn());
        const t = e.life / e.max;
        const alpha = Math.sin(Math.min(t, 1) * Math.PI) * 0.5; // fondu entrée/sortie
        const grd = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.r * 4);
        grd.addColorStop(0, `rgba(255, 154, 92, ${alpha})`);
        grd.addColorStop(0.4, `rgba(255, 90, 31, ${alpha * 0.5})`);
        grd.addColorStop(1, "rgba(255, 90, 31, 0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      running = document.visibilityState === "visible";
      if (running) {
        raf = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(raf);
      }
    };

    resize();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduceMotion]);

  return (
    <div ref={rootRef} aria-hidden="true" className="absolute inset-0 overflow-hidden bg-void">
      <div ref={mediaRef} className="absolute inset-0 will-change-transform">
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-80"
          poster="/videos/hero-poster.svg"
          autoPlay={!reduceMotion}
          muted
          loop
          playsInline
          preload="none"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Halo torche de secours */}
      <div
        className="ember-breathe pointer-events-none absolute -bottom-1/4 -left-1/4 h-[120%] w-[80%]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,90,31,0.34), rgba(255,90,31,0.08) 55%, rgba(10,10,10,0) 78%)",
        }}
      />

      {/* Braises */}
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />

      {/* Grain cinématographique */}
      <div className="hero-grain" />

      {/* Voile de lisibilité : sombre en bas-gauche là où vit le texte */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.15) 32%, rgba(10,10,10,0.35) 62%, rgba(10,10,10,0.92) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 15% 90%, rgba(10,10,10,0.7), rgba(10,10,10,0) 55%)",
        }}
      />
      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: "inset 0 0 220px 40px rgba(0,0,0,0.75)" }}
      />
    </div>
  );
}
