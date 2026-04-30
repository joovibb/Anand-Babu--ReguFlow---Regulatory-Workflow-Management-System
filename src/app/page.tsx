import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="mt-2 text-slate-600">
        Manage product approvals, regulatory requirements, and documents.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <DashboardCard
          title="Products"
          description="Create and manage products."
          href="/products"
        />
        <DashboardCard
          title="Requirements"
          description="Track compliance requirements."
          href="/products"
        />
        <DashboardCard
          title="Documents"
          description="Upload and manage documents."
          href="/products"
        />
      </div>
    </div>
  );
}

function DashboardCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition"
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-slate-600">{description}</p>
    </Link>
  );
}