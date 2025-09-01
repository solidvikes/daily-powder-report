export default function Home() {
  return (
    <main style={{maxWidth: 1100, margin: "0 auto", padding: 16}}>
      <div style={{border:"1px dashed #e5e7eb", borderRadius:16, padding:24, textAlign:"center"}}>
        Leaderboard Ad 970×250
      </div>

      <h1 style={{marginTop:24}}>Today’s Top Snowfalls</h1>
      <ul>
        <li>Jackson Hole (WY) — 12" (24h)</li>
        <li>Snowbird (UT) — 10" (24h)</li>
        <li>Alta (UT) — 9" (24h)</li>
      </ul>
    </main>
  );
}
