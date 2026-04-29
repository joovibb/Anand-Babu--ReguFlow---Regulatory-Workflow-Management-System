import ProductForm from "@/components/ProductForm";

export default function ProductsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Products</h1>
      <p className="mt-2 text-gray-600">Manage product approvals here.</p>

      <div className="mt-6">
        <ProductForm />
      </div>
    </main>
  );
}