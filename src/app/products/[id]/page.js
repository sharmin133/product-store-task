import dbConnect from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic";

export default async function ProductDetailPage({ params }) {
  const { id } = params; // Next.js app directory uses params

  // Connect to DB and fetch the product
  const productsCollection = dbConnect("products-store");
  const product = await productsCollection.findOne({ _id: new ObjectId(id) });

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-6 mt-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link href="/products" className="text-pink-600 underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        {product.picture && (
          <div className="md:w-1/2">
            <Image
              src={product.picture}
              alt={product.name}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        )}

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold">Price: ${product.price}</p>
          <p className="text-gray-700">
            <span className="font-semibold">Category:</span> {product.category}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Brand:</span> {product.brand}
          </p>

          <Link
            href="/products"
            className="mt-4 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 w-max"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}



