import { ImageResponse } from "next/og";
import { getDictionary, type Locale } from "@/i18n";

export const alt = "Ambra Restaurante";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

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
          background: "linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)",
          fontFamily: "serif",
        }}
      >
        {/* Top decorative line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(to right, #008C45 33%, #ffffff 33%, #ffffff 66%, #c41e3a 66%)",
            display: "flex",
          }}
        />

        {/* Location tag */}
        <div
          style={{
            color: "#c41e3a",
            fontSize: 20,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 20,
            display: "flex",
          }}
        >
          Palma de Mallorca
        </div>

        {/* Logo */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "0.05em",
            display: "flex",
          }}
        >
          AMBRA
        </div>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 3,
            background: "#c41e3a",
            margin: "24px 0",
            display: "flex",
          }}
        />

        {/* Description */}
        <div
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 24,
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.5,
            fontWeight: 300,
            display: "flex",
          }}
        >
          {dict.metadata.siteDescription}
        </div>

        {/* Bottom decorative line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(to right, #008C45 33%, #ffffff 33%, #ffffff 66%, #c41e3a 66%)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
