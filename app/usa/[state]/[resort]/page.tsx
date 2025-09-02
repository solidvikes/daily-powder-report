interface Params { params: { state: string; resort: string } }

export default function ResortPage({ params }: Params) {
  const { resort, state } = params;
  const pretty = resort.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>{pretty} — Snow Report</h1>
        <span style={{ border: "1px solid #e5e7eb", borderRadius: 999, padding: "6px 10px", fontSize: 12, color: "#6b7280" }}>
          Updated 7:05 AM
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 12, marginTop: 12 }}>
        {[{label:"New (24h)",v:'12"'},{label:"New (72h)",v:'26"'},{label:"7-Day",v:'34"'},{label:"Base",v:'74"'},{label:"Lifts",v:'11/13'},{label:"Runs",v:'142/150'}].map(k => (
          <div key={k.label} style={{ border: "1px solid #e5e7eb", borderRadius: 16, padding: 16 }}>
            <div style={{ color: "#6b7280", fontSize: 12 }}>{k.label}</div>
            <div style={{ fontWeight: 800, fontSize: 24 }}>{k.v}</div>
          </div>
        ))}
      </div>

      <div style={{ border: "1px solid #e5e7eb", borderRadius: 16, padding: 16, marginTop: 12 }}>
        <div style={{ color: "#6b7280", fontSize: 12 }}>Forecast (48h)</div>
        <div>Light snow today, heavier tonight. Link to full model →</div>
      </div>

      <div style={{ border: "1px solid #e5e7eb", borderRadius: 16, padding: 16, marginTop: 12 }}>
        <div style={{ color: "#6b7280", fontSize: 12 }}>Nearby Resorts</div>
        <div style={{ display: "grid", gap: 8, marginTop: 8 }}>
          <a href={`/usa/${state}/grand-targhee`} style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: "8px 12px", textDecoration: "none" }}>Grand Targhee</a>
          <a href={`/usa/${state}/snow-king`} style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: "8px 12px", textDecoration: "none" }}>Snow King</a>
        </div>
      </div>

      <div style={{ border: "1px dashed #e5e7eb", borderRadius: 16, padding: 24, marginTop: 12, textAlign: "center", color: "#6b7280" }}>
        Right Rail Sticky Ad (stacks on mobile)
      </div>
    </main>
  );
}
