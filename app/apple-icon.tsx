import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#111111",
          color: "#f9d84a",
          display: "flex",
          flexDirection: "column",
          fontWeight: 900,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div style={{ fontSize: 82, lineHeight: 0.9 }}>24</div>
        <div style={{ color: "#ffffff", fontSize: 22, marginTop: 12 }}>FIT</div>
      </div>
    ),
    size,
  );
}
