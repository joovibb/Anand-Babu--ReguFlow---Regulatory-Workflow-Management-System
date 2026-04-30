import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">ReguFlow</h1>

      <p className="mt-2 text-gray-600">
        Regulatory Workflow Management System
      </p>

      {/* Navigation Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/dashboard"
          className="border p-6 rounded shadow hover:shadow-lg bg-white"
        >
          <h2 className="text-xl font-bold">Dashboard</h2>
          <p className="mt-2 text-gray-600">
            View system overview and compliance stats
          </p>
        </Link>

        <Link
          href="/products"
          className="border p-6 rounded shadow hover:shadow-lg bg-white"
        >
          <h2 className="text-xl font-bold">Products</h2>
          <p className="mt-2 text-gray-600">
            Manage products and approval workflow
          </p>
        </Link>

        <Link
          href="/requirements"
          className="border p-6 rounded shadow hover:shadow-lg bg-white"
        >
          <h2 className="text-xl font-bold">Requirements</h2>
          <p className="mt-2 text-gray-600">
            Define regulatory requirements by country
          </p>
        </Link>
      </div>

      {/* Description */}
      <div className="mt-12 max-w-xl text-gray-700">
        <p>
          ReguFlow helps track regulatory compliance by matching product
          documents with country-specific requirements and highlighting
          missing approvals.
        </p>
      </div>
    </main>
  );
}