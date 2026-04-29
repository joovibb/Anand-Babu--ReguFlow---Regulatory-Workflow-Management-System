import ProductForm from "@/components/ProductForm";
import { prisma } from "@/lib/prisma";

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Products</h1>
      <p className="mt-2 text-gray-600">Manage product approvals here.</p>

      <div className="mt-6">
        <ProductForm />
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Saved Products</h2>

        {products.length === 0 ? (
          <p>No products yet.</p>
        ) : (
          <div className="space-y-4">
            {products.map((product: any) => (
              <div key={product.id} className="border p-4 rounded">
                <h3 className="font-bold">{product.name}</h3>
                <p>Category: {product.category}</p>
                <p>Country: {product.country || "Not set"}</p>
                <p>Status: {product.status}</p>
                <p>
                  Due Date:{" "}
                  {product.dueDate
                    ? new Date(product.dueDate).toDateString()
                    : "No due date"}
                </p>
                <p className="text-gray-600">{product.description}</p>

                <form
                  action={`/api/products/${product.id}/status`}
                  method="POST"
                  className="mt-4 space-x-2"
                >
                  <button
                    name="status"
                    value="Submitted"
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Submit
                  </button>

                  <button
                    name="status"
                    value="Under Review"
                    className="bg-yellow-600 text-white px-3 py-1 rounded"
                  >
                    Under Review
                  </button>

                  <button
                    name="status"
                    value="Approved"
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Approve
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}