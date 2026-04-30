import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

async function addDocument(productId: string, formData: FormData) {
  "use server";

  const name = formData.get("name") as string;

  await prisma.productDocument.create({
    data: {
      name,
      productId,
    },
  });

  redirect(`/products/${productId}/compliance`);
}

export default async function AddProductDocumentPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
  });

  if (!product) {
    return <main className="p-10">Product not found</main>;
  }

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Add Product Document</h1>
      <p className="mt-2 text-gray-600">Product: {product.name}</p>

      <form action={addDocument.bind(null, product.id)} className="mt-8 space-y-4 max-w-md">
        <div>
          <label className="block font-medium">Document Name</label>
          <input
            name="name"
            required
            className="border p-2 rounded w-full"
            placeholder="CE Certificate"
          />
        </div>

        <button className="bg-black text-white px-4 py-2 rounded">
          Add Document
        </button>
      </form>
    </main>
  );
}