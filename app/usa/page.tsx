import Link from "next/link";

const sample = [
  { state: "CO", resort: "Vail", slug: "vail", new24: 6, new72: 14, base: 62, lifts: "20/25" },
  { state: "CO", resort: "Aspen Snowmass", slug: "aspen-snowmass", new24: 5, new72: 12, base: 60, lifts: "17/22" },
  { state: "UT", resort: "Alta", slug: "alta", new24: 9, new72: 18, base: 68, lifts: "7/9" },
  { state: "WY", resort: "Jackson Hole", slug: "jackson-hole", new24: 12, new72: 26, base: 74, lifts: "11/13" },
];

export default function USAIndex({ searchParams }: { searchParams: { state?: string } }) {
  const filter = searchParams.state;
  const list = filter ? sample.filter((r) => r.state === filter) : sample;

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: 16 }}>
      <h1>USA Snow Reports {filter ? `— ${filter}` : ""}</h1>
      <div style={{ color: "#6b7280", fontSize: 12, marginBottom: 8 }}>
        Tip: Add <code>?state=CO</code> to filter by a state.
      </div>

      <div style={{ display: "grid", gap: 12 }}>
        {list.map((r) => (
          <div key={r.slug} style={{ display: "grid", gridTemplateColumns: "6fr 2fr 2fr 2fr", alignItems: "center", gap: 12, border: "1px solid #e5e7eb", borderRadius: 16, padding: 16 }}>
            <div><strong>{r.resort}</strong> · <span style={{ color: "#6b7280" }}>{r.state}</span></div>
            <div><strong>{r.new24}"</strong> <span style={{ color: "#6b7280", fontSize: 12 }}>24h</span></div>
            <div style={{ color: "#6b7280" }}>Base {r.base}"</div>
            <div style={{ textAlign: "right" }}>
              <Link href={`/usa/${r.state.toLowerCase()}/${r.slug}`}>
                <button style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: "8px 12px" }}>View</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div style={{ border: "1px dashed #e5e7eb", borderRadius: 16, padding: 24, marginTop: 12, textAlign: "center", color: "#6b7280" }}>
        Horizontal Ad 728×90
      </div>
    </main>
  );
}
