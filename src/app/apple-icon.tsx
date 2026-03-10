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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #c41e3a 0%, #a01830 100%)",
          borderRadius: 36,
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 100,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1,
            display: "flex",
          }}
        >
          A
        </div>
        <div
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.8)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginTop: 4,
            display: "flex",
          }}
        >
          AMBRA
        </div>
      </div>
    ),
    { ...size }
  );
}
