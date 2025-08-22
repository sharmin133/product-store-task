"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    picture: "",
    name: "",
    description: "",
    price: "",
    category: "",
    brand: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/products-store", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Product added successfully!");
        setFormData({
          picture: "",
          name: "",
          description: "",
          price: "",
          category: "",
          brand: "",
        });
      } else {
        toast.error("Failed to add product.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred.");
    }
  };

  // Redirect unauthenticated users
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="max-w-lg mx-auto mt-20 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="picture"
          placeholder="Picture URL"
          value={formData.picture}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <button className="bg-pink-600 text-white py-2 rounded hover:bg-pink-700">
          Add Product
        </button>
      </form>
      {/* Toast container to show notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}


