import { ImageResponse } from "next/og";
import { business } from "@/lib/content";

export const alt = "KS Multiservices — dépannage urgence plomberie, serrurerie, vitrerie au Havre";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Image Open Graph générée à la construction (police Geist embarquée par next/og,
// aucun accès réseau requis). Reprend la direction nuit/orange.
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(60% 70% at 18% 100%, rgba(255,90,31,0.42), rgba(10,10,10,0) 60%)",
          padding: "72px",
          color: "#f4f1ea",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 12, height: 12, borderRadius: 12, backgroundColor: "#ff5a1f" }} />
          <div style={{ fontSize: 26, letterSpacing: 8, color: "#8f8a83" }}>
            PLOMBERIE · SERRURERIE · VITRERIE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, lineHeight: 1, letterSpacing: -2 }}>L&apos;urgence ne dort</div>
          <div style={{ display: "flex", fontSize: 112, lineHeight: 1, letterSpacing: -2 }}>
            <span>jamais.&nbsp;</span>
            <span style={{ color: "#ff5a1f" }}>Nous non plus.</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 34, letterSpacing: 1 }}>{business.name}</div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
            <div style={{ fontSize: 24, color: "#8f8a83", letterSpacing: 4 }}>
              LE HAVRE · 24 / 7
            </div>
            <div style={{ fontSize: 40, color: "#ff5a1f" }}>{business.phone}</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
