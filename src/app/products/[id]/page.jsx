"use client"
import { vegetables } from "@/data/vegetables"
import Link from "next/link"
import toast from "react-hot-toast"

export default async function ProductDetails({ params }) {
  const { id } = await params

  const product = vegetables.find((v) => v.id === Number(id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Product not found</h2>
          <Link href="/products" className="text-blue-600 underline mt-2 inline-block">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">


        <div className="bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover md:h-full h-72"
          />
        </div>


        <div className="p-6 md:p-10 flex flex-col justify-between">

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {product.name}
            </h1>

            <p className="text-gray-500 mt-1">
              Category: <span className="font-medium">{product.category}</span>
            </p>


            <div className="mt-4">
              <span className="text-3xl font-bold text-green-600">
                ${product.price}
              </span>
            </div>


            <div className="flex gap-2 mt-4 flex-wrap">
              {product.isOrganic && (
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                  🌱 Organic
                </span>
              )}

              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                Stock: {product.stock}
              </span>
            </div>


            <p className="text-gray-600 mt-5 leading-relaxed">
              {product.description ||
                "Fresh and high-quality vegetable directly from farm. Healthy choice for your daily meals."}
            </p>
          </div>


          <div className="mt-8 flex gap-3">
            <button
              onClick={() => toast.success("🛒 Added to cart successfully!")}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
            >
              🛒 Add to Cart
            </button>

            <Link
              href="/products"
              className="flex-1 text-center bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-xl font-semibold transition"
            >
              ← Back
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}