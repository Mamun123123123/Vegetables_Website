import Link from "next/link"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">

    
      <section className="text-center py-24 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          🥦 Fresh Vegetables <br />
          <span className="text-green-600">Delivered Daily</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          Get fresh, organic vegetables directly from farmers.
          Healthy life starts with healthy food 🌱
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            href="/products"
            className="bg-green-600 hover:bg-green-700  px-8 py-3 rounded-full font-semibold shadow-md transition"
          >
            🛒 Shop Now
          </Link>

          <Link
            href="/cart"
            className=" border px-8 py-3 rounded-full text-black shadow-md transition"
          >
            View Cart
          </Link>
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">

        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <div className="text-4xl">🚚</div>
          <h3 className="text-xl font-bold mt-4 text-black">Fast Delivery</h3>
          <p className="text-gray-500 mt-2">
            We deliver fresh vegetables quickly at your doorstep.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <div className="text-4xl">🌱</div>
          <h3 className="text-xl text-black font-bold mt-4">100% Organic</h3>
          <p className="text-gray-500 mt-2">
            Chemical-free fresh vegetables from trusted farms.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <div className="text-4xl">💰</div>
          <h3 className="text-xl font-bold text-black mt-4">Best Price</h3>
          <p className="text-gray-500 mt-2">
            Affordable prices directly from farmers to customers.
          </p>
        </div>

      </section>

    
      <section className="bg-green-600 text-white text-center py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Shopping Fresh Vegetables Today 🛒
        </h2>

        <p className="mt-3 text-green-100">
          Fresh vegetables just one click away
        </p>

        <Link
          href="/products"
          className="mt-8 inline-block bg-white text-green-600 px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition"
        >
          Explore Products
        </Link>
      </section>

    </div>
  )
}

export default Home