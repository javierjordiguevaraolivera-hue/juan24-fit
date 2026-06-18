import { ImageResponse } from "next/og";

export const alt = "JUAN24FIT asesoria fitness online y presencial en Miami y Lima";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#171512",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: 64,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              alignItems: "center",
              background: "#f9d84a",
              color: "#111111",
              display: "flex",
              fontSize: 54,
              fontWeight: 900,
              height: 112,
              justifyContent: "center",
              width: 112,
            }}
          >
            24
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 56, fontWeight: 900 }}>JUAN24FIT</div>
            <div style={{ color: "#f9d84a", fontSize: 24, fontWeight: 800 }}>
              JUAN24FIT, CORP.
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 0.95 }}>
            Asesoria fitness online y presencial
          </div>
          <div style={{ color: "#efe8dc", fontSize: 34, lineHeight: 1.25 }}>
            Alimentacion, rutinas personalizadas y entrenamiento en Miami y Lima.
          </div>
        </div>

        <div
          style={{
            borderTop: "2px solid rgba(255,255,255,0.18)",
            color: "#ffffff",
            display: "flex",
            fontSize: 26,
            fontWeight: 800,
            gap: 30,
            paddingTop: 26,
          }}
        >
          <span>10030 Sw 145 Pl, MIAMI, FL 33186</span>
          <span>+17865972641</span>
          <span>info@juan24.fit</span>
        </div>
      </div>
    ),
    size,
  );
}
