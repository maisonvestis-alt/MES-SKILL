import { business, serviceArea } from "@/lib/content";

/**
 * Schéma de la zone d'intervention.
 *
 * Ce n'est pas un décor : chaque point est positionné à partir des coordonnées
 * réelles de la commune, projetées autour du Havre (1° de latitude ≈ 111 km,
 * 1° de longitude ≈ 72 km à cette latitude), puis mises à l'échelle pour tenir
 * dans le cadre. Les étiquettes sont dé-chevauchées verticalement et reliées à
 * leur point par un filet quand elles ont dû être décalées.
 *
 * Aucun service de cartographie tiers n'est appelé : pas de script externe, pas
 * de cookie, pas de coût réseau — et donc rien à charger avant l'affichage.
 */

const W = 560;
const H = 430;
const PADDING = { top: 34, right: 18, bottom: 44, left: 26 };
const KM_PER_DEG_LAT = 111;
const KM_PER_DEG_LNG = 72; // à ~49,5° de latitude
const LABEL_SIZE = 10.5;
const LABEL_LINE_HEIGHT = 14;
const CHAR_WIDTH = 5.5;
const RINGS = [5, 10, 20];
/** Longueur de l'échelle graphique, en kilomètres. */
const SCALE_BAR_KM = 10;

type Placed = {
  name: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  anchor: "start" | "end";
};

/** Projection locale en kilomètres autour du Havre. */
function toKm(lat: number, lng: number) {
  return {
    kx: (lng - business.geo.lng) * KM_PER_DEG_LNG,
    ky: -(lat - business.geo.lat) * KM_PER_DEG_LAT,
  };
}

function buildLayout() {
  const points = serviceArea.towns.map((town) => ({ name: town.name, ...toKm(town.lat, town.lng) }));
  const all = [...points, { name: business.address.city, kx: 0, ky: 0 }];

  // Échelle uniforme (une distance reste une distance dans les deux axes), en
  // réservant la place des libellés dans le cadre.
  const maxKx = Math.max(...all.map((p) => Math.abs(p.kx)));
  const maxKy = Math.max(...all.map((p) => Math.abs(p.ky)));
  const usableW = (W - PADDING.left - PADDING.right) / 2 - 90;
  const usableH = (H - PADDING.top - PADDING.bottom) / 2;
  const scale = Math.min(usableW / Math.max(maxKx, 1), usableH / Math.max(maxKy, 1));

  const cx = PADDING.left + (W - PADDING.left - PADDING.right) / 2 - 40;
  const cy = PADDING.top + (H - PADDING.top - PADDING.bottom) / 2;

  // Dé-chevauchement : chaque libellé est traité comme une boîte ; s'il croise
  // une boîte déjà posée, il descend d'une ligne jusqu'à trouver sa place, et un
  // filet le relie alors à son point.
  // Le libellé « LE HAVRE » et les graduations des anneaux occupent déjà le
  // cadre : ils entrent dans le jeu de boîtes pour que rien ne se superpose.
  const boxes: Array<{ x1: number; x2: number; y: number }> = [
    { x1: cx - 40, x2: cx + 40, y: cy + 32 }, // libellé « LE HAVRE »
    { x1: cx - 20, x2: cx + 20, y: cy }, // pastille centrale
  ];
  const placed: Placed[] = [];

  points
    .slice()
    .sort((a, b) => a.ky - b.ky || a.kx - b.kx)
    .forEach((point) => {
      const x = cx + point.kx * scale;
      const y = cy + point.ky * scale;
      const width = point.name.length * CHAR_WIDTH;
      const anchor: "start" | "end" = x + 12 + width > W - 10 ? "end" : "start";
      const labelX = anchor === "start" ? x + 11 : x - 11;
      const x1 = anchor === "start" ? labelX : labelX - width;
      const x2 = x1 + width;

      let labelY = y + 3.5;
      while (
        boxes.some(
          (box) =>
            box.x1 < x2 + 6 && x1 < box.x2 + 6 && Math.abs(box.y - labelY) < LABEL_LINE_HEIGHT
        )
      ) {
        labelY += LABEL_LINE_HEIGHT;
      }

      boxes.push({ x1, x2, y: labelY });
      placed.push({ name: point.name, x, y, labelX, labelY, anchor });
    });

  return { placed, cx, cy, scale };
}

export default function CoverageMap() {
  const { placed, cx, cy, scale } = buildLayout();

  return (
    <figure className="notch relative m-0 overflow-hidden border border-[color:var(--line-light)] bg-[color:var(--color-ink)]">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-full w-full"
        role="img"
        aria-label={`Schéma des distances entre Le Havre et les communes desservies par ${business.name}`}
      >
        <defs>
          <radialGradient id="coverage-glow" cx="38%" cy="50%" r="55%">
            <stop offset="0%" stopColor="rgba(255,106,19,0.2)" />
            <stop offset="100%" stopColor="rgba(255,106,19,0)" />
          </radialGradient>
        </defs>

        <rect width={W} height={H} fill="url(#coverage-glow)" />

        <g stroke="rgba(246,247,249,0.06)" strokeWidth="1">
          {Array.from({ length: Math.ceil(H / 48) }).map((_, i) => (
            <line key={`h${i}`} x1="0" x2={W} y1={i * 48 + 16} y2={i * 48 + 16} />
          ))}
          {Array.from({ length: Math.ceil(W / 48) }).map((_, i) => (
            <line key={`v${i}`} x1={i * 48 + 16} x2={i * 48 + 16} y1="0" y2={H} />
          ))}
        </g>

        {/* Anneaux de distance — l'échelle est donnée par la règle, en bas */}
        {RINGS.map((km) => (
          <circle
            key={km}
            cx={cx}
            cy={cy}
            r={km * scale}
            fill="none"
            stroke="rgba(246,247,249,0.15)"
            strokeDasharray="3 7"
          />
        ))}

        {/* Communes */}
        {placed.map((town) => (
          <g key={town.name}>
            {Math.abs(town.labelY - (town.y + 3.5)) > 4 && (
              <line
                x1={town.x}
                y1={town.y}
                x2={town.labelX + (town.anchor === "start" ? -3 : 3)}
                y2={town.labelY - 3.5}
                stroke="rgba(246,247,249,0.24)"
                strokeWidth="1"
              />
            )}
            <circle cx={town.x} cy={town.y} r="3.2" fill="rgba(246,247,249,0.8)" />
            <text
              x={town.labelX}
              y={town.labelY}
              textAnchor={town.anchor}
              fill="rgba(246,247,249,0.68)"
              fontSize={LABEL_SIZE}
            >
              {town.name}
            </text>
          </g>
        ))}

        {/* Le Havre */}
        <circle cx={cx} cy={cy} r="17" fill="rgba(255,106,19,0.18)" />
        <circle cx={cx} cy={cy} r="6.5" fill="var(--color-signal)" />
        <text
          x={cx}
          y={cy + 32}
          textAnchor="middle"
          fill="#f6f7f9"
          fontSize="13"
          fontWeight="700"
          letterSpacing="2"
        >
          LE HAVRE
        </text>
        {/* Échelle graphique */}
        <g transform={`translate(26 ${H - 34})`}>
          <line x1="0" y1="0" x2={SCALE_BAR_KM * scale} y2="0" stroke="rgba(246,247,249,0.45)" strokeWidth="1.5" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="rgba(246,247,249,0.45)" strokeWidth="1.5" />
          <line
            x1={SCALE_BAR_KM * scale}
            y1="-4"
            x2={SCALE_BAR_KM * scale}
            y2="4"
            stroke="rgba(246,247,249,0.45)"
            strokeWidth="1.5"
          />
          <text x={SCALE_BAR_KM * scale + 9} y="3.5" fill="rgba(246,247,249,0.5)" fontSize="10" letterSpacing="1">
            {SCALE_BAR_KM} km
          </text>
        </g>
      </svg>

      <figcaption className="border-t border-[color:var(--line-dark)] px-5 py-3 text-[0.72rem] text-[color:var(--text-on-dark-muted)]">
        Distances à vol d&apos;oiseau depuis Le Havre — schéma indicatif, hors temps de
        trajet réel.
      </figcaption>
    </figure>
  );
}
