import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Powder Report",
  description: "No-frills daily snow reports for ski resorts across the USA.",
  metadataBase: new URL("https://www.dailypowderreport.com"),
  alternates: { canonical: "/" },
  openGraph: { title: "Daily Powder Report", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container flex items-center gap-3 py-3">
            <div className="font-semibold tracking-tight">Daily <span className="font-extrabold">Powder Report</span></div>
            <div className="ml-auto">
              <a className="btn" href="/subscribe">Subscribe</a>
            </div>
          </div>
        </header>
        {children}
        <footer className="border-t mt-6">
          <div className="container py-6 text-sm text-gray-600 flex items-center justify-between">
            <div>© {new Date().getFullYear()} Daily Powder Report</div>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:underline">Privacy</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
          </div>
        </footer>
        <div className="fixed bottom-3 inset-x-3 md:hidden ad">Sticky Mobile Footer Ad</div>
      </body>
    </html>
  );
}
