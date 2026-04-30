import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const products = await prisma.product.findMany({
    include: { documents: true },
  });

  const requirements = await prisma.requirement.findMany();

  const totalProducts = products.length;
  const totalRequirements = requirements.length;

  const compliantCount = products.filter((product) => {
    const requiredDocs = requirements
      .filter((r) => r.country === product.country)
      .map((r) => r.document);

    const uploadedDocs = product.documents.map((d) => d.name);

    return (
      requiredDocs.length > 0 &&
      requiredDocs.every((doc) => uploadedDocs.includes(doc))
    );
  }).length;

  const nonCompliantCount = totalProducts - compliantCount;

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Overview of regulatory approvals.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border p-6 rounded shadow">
          <h2 className="text-lg font-semibold">Total Products</h2>
          <p className="text-2xl font-bold mt-2">{totalProducts}</p>
        </div>

        <div className="border p-6 rounded shadow">
          <h2 className="text-lg font-semibold">Requirements</h2>
          <p className="text-2xl font-bold mt-2">{totalRequirements}</p>
        </div>

        <div className="border p-6 rounded shadow">
          <h2 className="text-lg font-semibold text-green-600">
            Compliant
          </h2>
          <p className="text-2xl font-bold mt-2 text-green-600">
            {compliantCount}
          </p>
        </div>

        <div className="border p-6 rounded shadow">
          <h2 className="text-lg font-semibold text-red-600">
            Non-Compliant
          </h2>
          <p className="text-2xl font-bold mt-2 text-red-600">
            {nonCompliantCount}
          </p>
        </div>
      </div>
    </main>
  );
}