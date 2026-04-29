"use client";
import { useState } from "react";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [dueDate, setDueDate] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        category,
        description,
        country,
        dueDate: dueDate ? new Date(dueDate) : null,
      }),
    });

    if (!res.ok) {
      alert("Failed to create product");
      return;
    }

    setName("");
    setCategory("");
    setDescription("");
    setCountry("");
    setDueDate("");
    alert("Product created");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full border p-2"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        className="w-full border p-2"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <textarea
        className="w-full border p-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        className="w-full border p-2"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <input
        type="date"
        className="w-full border p-2"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button className="bg-black text-white px-4 py-2">
        Create Product
      </button>
    </form>
  );
}