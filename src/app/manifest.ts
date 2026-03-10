import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ambra Restaurante",
    short_name: "Ambra",
    description:
      "Authentic Italian cuisine in the heart of Palma de Mallorca. Fresh pasta, premium meats, seafood and traditional Pinsa Romana.",
    start_url: "/es",
    display: "standalone",
    background_color: "#faf8f5",
    theme_color: "#c41e3a",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
