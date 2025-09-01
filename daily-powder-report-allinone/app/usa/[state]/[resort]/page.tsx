interface Params { params: { state: string; resort: string } }

export default function ResortPage({ params }: Params) {
  const { resort, state } = params;
  const pretty = resort.split("-").map(s => s.charAt(0).toUpperCase()+s.slice(1)).join(" ");
  return (
    <main className="container pt-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">{pretty} — Snow Report</h1>
        <div className="badge">Updated 7:05 AM MST</div>
      </div>

      <div className="grid3 mt-3">
        {[{label:"New (24h)",v:'12"'},{label:"New (72h)",v:'26"'},{label:"7‑Day",v:'34"'},{label:"Base",v:'74"'},{label:"Lifts",v:'11/13'},{label:"Runs",v:'142/150'}].map(k => (
          <div key={k.label} className="card">
            <div className="small">{k.label}</div>
            <div className="font-extrabold text-2xl">{k.v}</div>
          </div>
        ))}
      </div>

      <div className="card mt-3">
        <div className="small">Forecast (48h)</div>
        <div>Light snow today, heavier tonight. Link to full model →</div>
      </div>

      <div className="card mt-3">
        <div className="small">Nearby Resorts</div>
        <div className="grid gap-2 mt-2">
          <a className="btn" href={`/usa/${state}/grand-targhee`}>Grand Targhee</a>
          <a className="btn" href={`/usa/${state}/snow-king`}>Snow King</a>
        </div>
      </div>

      <div className="ad mt-3">Right Rail Sticky Ad (stacks on mobile)</div>
    </main>
  );
}
