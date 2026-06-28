import { ImageResponse } from "next/og";
import { APEX_MARK_PATH } from "@/components/icons";

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
          background: "linear-gradient(135deg, #FF8A5B, #F2542D)",
        }}
      >
        <svg width="116" height="68" viewBox="0 0 327 192" fill="#1A0F0A">
          <path fillRule="evenodd" d={APEX_MARK_PATH} />
        </svg>
      </div>
    ),
    { ...size }
  );
}
