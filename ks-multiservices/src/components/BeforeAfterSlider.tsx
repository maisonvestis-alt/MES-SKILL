"use client";

import { useId, useState } from "react";
import Image from "next/image";

/**
 * Slider de comparaison avant/après, accessible au clavier via un input
 * range natif (pas de dépendance à un drag souris uniquement). Le curseur
 * pilote un clip-path sur l'image "après" pour révéler l'image "avant".
 */
export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt,
  width,
  height,
}: {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  width: number;
  height: number;
}) {
  const [position, setPosition] = useState(50);
  const id = useId();

  return (
    <div className="relative aspect-[4/5] w-full select-none overflow-hidden">
      <Image
        src={beforeSrc}
        alt={`${alt} — avant travaux`}
        width={width}
        height={height}
        className="absolute inset-0 h-full w-full object-cover"
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
      />
      <div
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={afterSrc}
          alt={`${alt} — après travaux`}
          width={width}
          height={height}
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-[color:var(--color-accent)]"
        style={{ left: `${position}%` }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-3 left-3 status-badge"
        style={{ borderColor: "var(--color-accent)" }}
      >
        Avant
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-3 right-3 status-badge"
        style={{ borderColor: "var(--color-accent)" }}
      >
        Après
      </span>

      <label htmlFor={id} className="sr-only">
        Curseur de comparaison avant / après — {alt}
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-x-0 bottom-3 mx-auto block w-[85%] accent-[color:var(--color-accent)]"
      />
    </div>
  );
}
