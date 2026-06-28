import { ImageResponse } from "next/og";

export const alt = "Apex Technologies — Managed IT, Cloud & Software";
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
          background: "#0A0A0B",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#FF6A4D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 32 32">
              <path d="M16 7.5 L24.5 24 H7.5 Z" fill="#190D08" />
            </svg>
          </div>
          <div style={{ display: "flex", marginLeft: 22, fontSize: 36 }}>
            <span style={{ color: "#F5F5F7", fontWeight: 600 }}>Apex</span>
            <span style={{ color: "#9A9AA2", marginLeft: 12 }}>Technologies</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 78, fontWeight: 600, color: "#F5F5F7", letterSpacing: -2 }}>
            We run your IT.
          </div>
          <div style={{ display: "flex", fontSize: 78, fontWeight: 600, color: "#FF9D86", letterSpacing: -2 }}>
            And build what&rsquo;s missing.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 27, color: "#9A9AA2" }}>
          Managed IT · Cloud · Software — a Sydney team.
        </div>
      </div>
    ),
    { ...size }
  );
}
