import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0906",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f5a623",
            borderRadius: 5,
            color: "#0b0906",
            fontSize: 15,
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          B
        </div>
      </div>
    ),
    size,
  );
}
