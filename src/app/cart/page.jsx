"use client"

import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"

export default function CartPage() {
  const [cart, setCart] = useState([])

  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || []
    setCart(data)
  }, [])

  
  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    toast.success("Item removed 🗑")
  }

  
  const handleProceed = () => {
    if (cart.length === 0) {
      toast.error("Cart is empty 😢")
      return
    }

    const confirm = window.confirm("Do you want to place order?")
    if (!confirm) return

    setCart([])
    localStorage.removeItem("cart")

    toast.success("Order placed 🚀 Cart cleared!")
  }


  const total = cart.reduce((sum, item) => sum + Number(item.price), 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 py-10">
      <Toaster position="top-right" />

      <div className="max-w-4xl mx-auto">


        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h1 className="text-3xl font-bold text-black">🛒 Shopping Cart</h1>

          <div className="mt-3 sm:mt-0 text-lg font-semibold text-gray-700">
            Total: <span className="text-black">${total}</span>
          </div>
        </div>

    
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-800 text-lg">Your cart is empty 😢</p>
          </div>
        ) : (
          <>
        
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white border rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                >
            
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover border"
                    />

                    <div>
                      <h2 className="text-lg text-black font-semibold">{item.name}</h2>
                      <p className="text-gray-500 text-sm">
                        Price: ${item.price}
                      </p>
                    </div>
                  </div>

                  
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm w-full sm:w-auto"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

    
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:justify-end">
              <button
                onClick={handleProceed}
                className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition w-full sm:w-auto"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}