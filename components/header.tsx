import Link from "next/link"
import { Search, ShoppingCart, Heart } from "lucide-react"

export function Header() {
  return (
    <header className="w-full bg-white py-4 border-b hidden lg:block">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-[#252b42]">Astronova</span>
              <span className="text-xl font-bold text-[#23a6f0]">E-com</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-[#737373] hover:text-[#252b42]">
                Home
              </Link>
              <Link href="/shop" className="text-[#737373] hover:text-[#252b42]">
                Shop
              </Link>
              <Link href="/about" className="text-[#737373] hover:text-[#252b42]">
                About
              </Link>
              <Link href="/blog" className="text-[#737373] hover:text-[#252b42]">
                Blog
              </Link>
              <Link href="/contact" className="text-[#737373] hover:text-[#252b42]">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/login" className="text-[#23a6f0] hover:text-[#252b42] flex items-center space-x-1">
              <span>Login</span>
              <span>/</span>
              <span>Register</span>
            </Link>
            <div className="flex items-center space-x-4">
              <button className="text-[#23a6f0] hover:text-[#252b42]">
                <Search size={20} />
              </button>
              <button className="text-[#23a6f0] hover:text-[#252b42] flex items-center">
                <ShoppingCart size={20} />
                <span className="ml-1">1</span>
              </button>
              <button className="text-[#23a6f0] hover:text-[#252b42] flex items-center">
                <Heart size={20} />
                <span className="ml-1">1</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

