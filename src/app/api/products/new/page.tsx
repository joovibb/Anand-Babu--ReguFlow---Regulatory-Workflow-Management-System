import ProductForm from "../../../components/ProductForm";

export default function NewProductPage() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">
        Create Product
      </h1>

      <ProductForm />
    </main>
  );
}