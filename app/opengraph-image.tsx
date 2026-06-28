import { ImageResponse } from "next/og";
import { APEX_MARK_PATH } from "@/components/icons";

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
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg, #FF8A5B, #F2542D)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="46" height="27" viewBox="0 0 327 192" fill="#1A0F0A">
              <path fillRule="evenodd" d={APEX_MARK_PATH} />
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
