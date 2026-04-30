import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

async function deleteRequirement(id: string) {
  "use server";

  await prisma.requirement.delete({
    where: { id },
  });

  revalidatePath("/requirements");
}

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

      <Link
        href="/requirements/new"
        className="inline-block mt-4 bg-black text-white px-4 py-2 rounded"
      >
        Add Requirement
      </Link>

      <div className="mt-8 space-y-4">
        {requirements.length === 0 ? (
          <p>No requirements added yet.</p>
        ) : (
          requirements.map((req) => (
            <div key={req.id} className="border p-4 rounded bg-white shadow">
              <p>
                <strong>Country:</strong> {req.country}
              </p>
              <p>
                <strong>Document:</strong> {req.document}
              </p>

              <form action={deleteRequirement.bind(null, req.id)}>
                <button className="mt-3 text-red-600">
                  Delete Requirement
                </button>
              </form>
            </div>
          ))
        )}
      </div>
    </main>
  );
}