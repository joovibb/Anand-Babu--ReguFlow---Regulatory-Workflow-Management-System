import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "ReguFlow",
  description: "Regulatory Workflow Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900">
        <div className="min-h-screen flex">
          <aside className="w-64 bg-slate-950 text-white p-6 hidden md:block">
            <h1 className="text-2xl font-bold mb-10">ReguFlow</h1>

            <nav className="space-y-3">
              <Link href="/" className="block hover:bg-slate-800 p-3 rounded-lg">
                Dashboard
              </Link>
              <Link href="/products" className="block hover:bg-slate-800 p-3 rounded-lg">
                Products
              </Link>
            </nav>
          </aside>

          <main className="flex-1 p-6 md:p-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}