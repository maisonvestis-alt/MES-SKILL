import { ImageResponse } from "next/og";
import { business } from "@/lib/content";

/**
 * Image de partage générée à la volée : même identité que le site (encre,
 * orange signal, filets) plutôt qu'une capture d'écran approximative.
 */
export const alt =
  "KS Multiservices — dépannage d'urgence au Havre : serrurerie, plomberie, vitrerie";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e0f12",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#ff6a13",
              display: "flex",
            }}
          />
          <div
            style={{
              color: "#f6f7f9",
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              fontWeight: 700,
              display: "flex",
            }}
          >
            KS Multiservices
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f6f7f9",
              fontSize: 82,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.02,
              display: "flex",
            }}
          >
            Dépannage d&apos;urgence
          </div>
          <div
            style={{
              color: "#ff6a13",
              fontSize: 82,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.02,
              display: "flex",
            }}
          >
            au Havre
          </div>
          <div
            style={{
              marginTop: 28,
              color: "#9aa2ae",
              fontSize: 30,
              letterSpacing: 2,
              display: "flex",
            }}
          >
            Serrurerie · Plomberie · Vitrerie
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(246,247,249,0.16)",
            paddingTop: 28,
          }}
        >
          <div style={{ color: "#f6f7f9", fontSize: 34, fontWeight: 700, display: "flex" }}>
            {business.phone}
          </div>
          <div style={{ color: "#9aa2ae", fontSize: 24, letterSpacing: 3, display: "flex" }}>
            {business.availabilityShort}
          </div>
        </div>
      </div>
    ),
    size
  );
}
