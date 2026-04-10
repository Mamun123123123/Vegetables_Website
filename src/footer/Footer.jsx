import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="max-w-6xl mx-auto p-10 grid grid-cols-1 md:grid-cols-3 gap-8">

    
        <div>
          <h2 className="text-2xl font-bold">🥦 Veg Shop</h2>
          <p className="text-sm mt-2 text-gray-500">
            Fresh vegetables directly from farmers. Healthy life starts here 🌱
          </p>
        </div>

        
        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:text-green-600">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-green-600">Vegetables</Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-green-600">Cart</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p className="text-sm text-gray-500">
            📍 Dhaka, Bangladesh <br />
            📞 +880 1866418423 <br />
            📧 support@vegshop.com
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="text-center py-4 border-t border-gray-300 text-sm">
        © {new Date().getFullYear()} Veg Shop. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer