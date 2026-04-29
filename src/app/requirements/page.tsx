import { prisma } from "@/lib/prisma";

export default async function RequirementsPage() {
  const requirements = await prisma.requirement.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Requirements</h1>
      <p className="mt-2 text-gray-600">
        View regulatory requirements by country and document.
      </p>

      <div className="mt-8 space-y-4">
        {requirements.length === 0 ? (
          <p>No requirements added yet.</p>
        ) : (
          requirements.map((req) => (
            <div key={req.id} className="border p-4 rounded">
              <p><strong>Country:</strong> {req.country}</p>
              <p><strong>Document:</strong> {req.document}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}