import Link from "next/link";
import Image from "next/image";
import dbConnect from "@/lib/dbConnect";

export const dynamic = "force-dynamic";

export default async function HomePageShowProduct() {
  const productsCollection = dbConnect("products-store");
  const products = await productsCollection.find({}).limit(6).toArray(); 

  return (
    <div className="max-w-6xl mx-auto p-6 mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Collection</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id.toString()}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            {product.picture && (
              <Image
                src={product.picture}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-40 object-cover rounded mb-4"
              />
              
            )}
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="font-bold text-lg mb-4">${product.price}</p>
            <Link
              href={`/products/${product._id}`}
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
            >
              Details
            </Link>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-8">
        <Link
          href="/products"
          className="px-6 py-2 bg-white text-black rounded-lg hover:bg-pink-700"
        >
          See More
        </Link>
      </div>
    </div>
  );
}
