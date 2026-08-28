"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("fr-FR", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

/**
 * Heure locale du visiteur, en continu — le rappel discret que l'astreinte
 * répond à cette heure précise, quelle qu'elle soit. Rendu côté client
 * uniquement pour éviter tout écart d'hydratation.
 */
export default function LiveClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(formatter.format(new Date()));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span suppressHydrationWarning className="tabular-nums">
      {time ?? "--:--:--"}
    </span>
  );
}
