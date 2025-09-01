import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Powder Report",
  description: "No-frills daily snow reports for ski resorts across the USA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{position:"sticky", top:0, background:"#fff", borderBottom:"1px solid #e5e7eb"}}>
          <div style={{maxWidth:1100, margin:"0 auto", padding:"12px 16px", display:"flex", alignItems:"center"}}>
            <strong style={{letterSpacing:-0.2}}>Daily Powder Report</strong>
            <div style={{marginLeft:"auto"}}>Subscribe</div>
          </div>
        </header>
        {children}
        <footer style={{borderTop:"1px solid #e5e7eb", padding:"16px 0", marginTop:24}}>
          <div style={{maxWidth:1100, margin:"0 auto", padding:"0 16px", fontSize:12, color:"#6b7280"}}>
            © {new Date().getFullYear()} Daily Powder Report · <a href="/privacy">Privacy</a> · <a href="/contact">Contact</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
