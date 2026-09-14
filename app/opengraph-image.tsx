import { ImageResponse } from "next/og";

export const alt = "FGDLaw — Established 2002";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#081526",
          color: "white",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#c8a226",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          FGDLaw · Est. 2002 · Manila
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 64,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Just and equitable legal counsel, built on integrity.
        </div>
      </div>
    ),
    size,
  );
}
