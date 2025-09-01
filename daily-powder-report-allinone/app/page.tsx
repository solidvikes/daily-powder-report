async function getTopSnow() {
  const res = await fetch("/api/top-snow", { cache: "no-store" });
  return res.json();
}

export default async function Home() {
  const data = await getTopSnow();
  return (
    <main className="container pt-4">
      <div className="ad">Leaderboard Ad 970×250</div>

      <section className="py-6">
        <h2 className="text-xl font-semibold">Today’s Top Snowfalls</h2>
        <div className="small">Auto‑updated • Last run {data.updated}</div>
        <div className="mt-3 space-y-3">
          {data.resorts.map((r: any, i: number) => (
            <div key={r.resort} className="card grid grid-cols-12 items-center">
              <div className="col-span-6 flex items-center gap-2">
                <span className="badge">#{i+1}</span>
                <span className="font-medium">{r.resort}</span>
                <span className="text-gray-500">• {r.state}</span>
              </div>
              <div className="col-span-2 font-semibold">{r.new24}"</div>
              <div className="col-span-2 text-gray-600">Base {r.base}"</div>
              <div className="col-span-2 text-right small">{r.updated}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-10">
        <h3 className="text-lg font-semibold">Snow Reports — USA</h3>
        <div className="grid3 mt-3">
          {["CO","UT","WY","CA","WA","MT","ID","VT","NH","ME"].map((s) => (
            <a key={s} className="card" href={`/usa?state=${s}`}>State: <strong>{s}</strong></a>
          ))}
        </div>
        <div className="ad mt-3">Native In‑Feed Ad</div>
      </section>
    </main>
  );
}
