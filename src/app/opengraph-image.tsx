import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at top left, #1f6dff, transparent 55%), radial-gradient(circle at bottom right, #0f172a, #000510)",
          color: "#e2e8f0",
          fontFamily: "Poppins, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            fontSize: "28px",
            letterSpacing: "6px",
            textTransform: "uppercase",
            color: "#93c5fd"
          }}
        >
          <div
            style={{
              height: "80px",
              width: "80px",
              borderRadius: "9999px",
              background:
                "linear-gradient(135deg, rgba(79, 70, 229, 0.8), rgba(14, 165, 233, 0.9))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "38px",
              fontWeight: 700,
              color: "#020617"
            }}
          >
            DF
          </div>
          Dream Finds Company
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <h1
            style={{
              fontSize: "68px",
              lineHeight: "1.1",
              maxWidth: "860px",
              color: "#f8fafc",
              fontWeight: 700
            }}
          >
            Narrative-driven digital marketing for dream-forward brands.
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "rgba(226, 232, 240, 0.85)",
              maxWidth: "700px",
              lineHeight: "1.4"
            }}
          >
            Strategy pods blending brand insight, creative velocity, and growth
            analytics.
          </p>
        </div>
        <div
          style={{
            fontSize: "24px",
            textTransform: "uppercase",
            letterSpacing: "12px",
            color: "rgba(148, 163, 184, 0.9)"
          }}
        >
          dreamfinds.co
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
