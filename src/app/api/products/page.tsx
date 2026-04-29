import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Products</h1>

      <Link
        href="/products/new"
        className="inline-block mt-4 bg-black text-white px-4 py-2"
      >
        + New Product
      </Link>
    </main>
  );
}