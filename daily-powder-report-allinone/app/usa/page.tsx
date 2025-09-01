import Link from "next/link";

const sample = [
  { state: "CO", resort: "Vail", slug: "vail", new24: 6, new72: 14, base: 62, lifts: "20/25" },
  { state: "CO", resort: "Aspen Snowmass", slug: "aspen-snowmass", new24: 5, new72: 12, base: 60, lifts: "17/22" },
  { state: "UT", resort: "Alta", slug: "alta", new24: 9, new72: 18, base: 68, lifts: "7/9" },
  { state: "WY", resort: "Jackson Hole", slug: "jackson-hole", new24: 12, new72: 26, base: 74, lifts: "11/13" },
];

export default function USAIndex({ searchParams }: { searchParams: { state?: string } }) {
  const filter = searchParams?.state;
  const list = filter ? sample.filter(r => r.state === filter) : sample;
  return (
    <main className="container pt-4">
      <h1 className="text-2xl font-semibold">USA Snow Reports {filter ? `— ${filter}` : ""}</h1>
      <div className="small mb-2">Choose a state on the home page for quick filtering.</div>
      <div className="space-y-3 mt-3">
        {list.map((r) => (
          <div key={r.slug} className="card grid grid-cols-12 items-center">
            <div className="col-span-6"><strong>{r.resort}</strong> · <span className="small">{r.state}</span></div>
            <div className="col-span-2"><strong>{r.new24}"</strong> <span className="small">24h</span></div>
            <div className="col-span-2 small">Base {r.base}"</div>
            <div className="col-span-2 text-right">
              <Link href={`/usa/${r.state.toLowerCase()}/${r.slug}`} className="btn">View</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ad mt-3">Horizontal Ad 728×90</div>
    </main>
  );
}
