import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">ReguFlow</h1>

      <p className="mt-2 text-gray-600">
        Regulatory Workflow Management System
      </p>

      {/* Navigation */}
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/dashboard"
          className="rounded bg-black px-4 py-2 text-white"
        >
          Dashboard
        </Link>

        <Link
          href="/products"
          className="rounded border px-4 py-2"
        >
          Products
        </Link>

        <Link
          href="/requirements"
          className="rounded border px-4 py-2"
        >
          Requirements
        </Link>
      </div>

      {/* Optional: Description */}
      <div className="mt-10 max-w-xl text-gray-700">
        <p>
          Manage regulatory requirements, track product compliance,
          and ensure all necessary documents are submitted for approval.
        </p>
      </div>
    </main>
  );
}