import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          background: "#0b0906",
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(245,166,35,0.25), transparent 45%), radial-gradient(circle at 80% 75%, rgba(232,67,58,0.15), transparent 40%)",
        }}
      >
        <div style={{ display: "flex", gap: 18, marginBottom: 44 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #ffc94d, #c97f12)",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #f5a623, #8a5a0d)",
              display: "flex",
              marginTop: 22,
            }}
          />
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #ffe2a3, #f5a623)",
              display: "flex",
            }}
          />
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -2,
            display: "flex",
          }}
        >
          BLOCKY
        </div>
        <div style={{ fontSize: 30, color: "#b8ae9c", marginTop: 18, display: "flex" }}>
          A growing Web3 ecosystem
        </div>
      </div>
    ),
    size,
  );
}
