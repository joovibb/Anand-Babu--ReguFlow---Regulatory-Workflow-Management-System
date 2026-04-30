import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

async function createRequirement(formData: FormData) {
  "use server";

  const country = formData.get("country") as string;
  const document = formData.get("document") as string;

  await prisma.requirement.create({
    data: {
      country,
      document,
    },
  });

  redirect("/requirements");
}

export default function NewRequirementPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Add Requirement</h1>

      <form action={createRequirement} className="mt-8 space-y-4 max-w-md">
        <div>
          <label className="block font-medium">Country</label>
          <input
            name="country"
            required
            className="border p-2 rounded w-full"
            placeholder="Ireland"
          />
        </div>

        <div>
          <label className="block font-medium">Document</label>
          <input
            name="document"
            required
            className="border p-2 rounded w-full"
            placeholder="Declaration of Conformity"
          />
        </div>

        <button className="bg-black text-white px-4 py-2 rounded">
          Save Requirement
        </button>
      </form>
    </main>
  );
}