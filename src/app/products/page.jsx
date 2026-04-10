"use client"

import { useState } from "react"
import { vegetables } from "@/data/vegetables"
import Link from "next/link"

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = [
    "All",
    ...new Set(vegetables.map((v) => v.category))
  ]


  const filteredProducts =
    selectedCategory === "All"
      ? vegetables
      : vegetables.filter(
        (v) => v.category === selectedCategory
      )

  return (
    <div className="p-6 bg-slate-50 text-black">

      <h1 className="text-3xl items-center justify-center flex  font-bold mb-4">
        🥦 All Vegetables
      </h1>


      <div className="flex flex-wrap gap-2 mb-6 rounded-4xl">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded border ${selectedCategory === cat
                ? "bg-green-600 text-black"
                : "bg-white text-black"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((veg) => (
          <div
            key={veg.id}
            className="border rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >

            <img
              src={veg.image}
              alt={veg.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-3">
              <h2 className="text-lg font-bold">
                {veg.name}
              </h2>

              <p className="text-sm text-gray-500">
                {veg.category}
              </p>

              <div className="flex justify-between mt-2">
                <p className="text-green-600 font-semibold">
                  ${veg.price}
                </p>

                {veg.isOrganic && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    Organic
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-400 mt-1">
                Stock: {veg.stock}
              </p>

              <div className="flex gap-2 mt-3 justify-center items-center">


                <Link
                  href={`/products/${veg.id}`}
                  className="w-1/2 text-center bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
                >
                  Details
                </Link>

              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Product