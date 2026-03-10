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
          background: "#1a1a1a",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            color: "#c41e3a",
            fontSize: 18,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 16,
            display: "flex",
          }}
        >
          {dict.metadata.siteName}
        </div>
        <div
          style={{
            fontSize: 100,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "0.05em",
            display: "flex",
          }}
        >
          AMBRA
        </div>
        <div
          style={{
            width: 60,
            height: 3,
            background: "#c41e3a",
            margin: "20px 0",
            display: "flex",
          }}
        />
        <div
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 22,
            display: "flex",
          }}
        >
          Palma de Mallorca
        </div>
      </div>
    ),
    { ...size }
  );
}
