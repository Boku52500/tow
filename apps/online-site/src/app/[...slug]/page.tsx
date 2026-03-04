import { ExternalLink, Truck } from "lucide-react";

export const dynamic = "force-dynamic";

const MAIN_SITE_URL = "https://evakuatoritbilisshi.ge";

export default function CatchAllPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8f9fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div style={{ width: "100%", maxWidth: "24rem", textAlign: "center" }}>
        <div
          style={{
            width: 80,
            height: 80,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 16,
            background: "#1a1a2e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
          }}
        >
          <Truck style={{ width: 40, height: 40, color: "#f5b800" }} />
        </div>

        <h1
          style={{
            marginTop: 24,
            fontWeight: 800,
            fontSize: 24,
            lineHeight: "32px",
            color: "#1a1a2e",
          }}
        >
          Evakuatori
        </h1>

        <a
          href={MAIN_SITE_URL}
          style={{
            marginTop: 32,
            display: "inline-flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            borderRadius: 9999,
            background: "#f5b800",
            padding: "16px 24px",
            fontSize: 18,
            fontWeight: 700,
            color: "#1a1a2e",
            textDecoration: "none",
            boxShadow:
              "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
            transition: "background-color 150ms ease",
          }}
        >
          <ExternalLink style={{ width: 20, height: 20 }} />
          Gamodzaxeba
        </a>
      </div>
    </main>
  );
}
