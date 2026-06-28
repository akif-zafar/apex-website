import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F4593C",
        }}
      >
        <svg width="108" height="108" viewBox="0 0 32 32">
          <path d="M16 7.5 L24.5 24 H7.5 Z" fill="#ffffff" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
