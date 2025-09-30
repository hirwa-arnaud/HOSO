import { useState } from "react";
import { Link } from "react-router"
import { Menu, X } from "lucide-react"; 
import Hero from "./Hero"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-teal-500" style={{
 clipPath: "ellipse(100% 100% at 50% 0%)"    }}>
      <nav className="container mx-auto flex items-center justify-between px-6 py-0">
<img src="logo.png" className="h-30" />

        <ul className="hidden md:flex space-x-8 text-white font-medium">
         <Link to="/">Home</Link>
         <Link to="/news">News</Link>
         <Link to="/contact">Contact</Link>
         <Link to="/blog">Blog</Link>
         <Link to="/about">About Us</Link>
        </ul>

        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 rounded-full bg-white text-gray-800 font-semibold hover:bg-gray-200">
            Login
          </button>
          <button className="px-6 py-2 rounded-full bg-white/20 text-white font-semibold backdrop-blur-md border border-white/30 shadow-md hover:bg-white/30 cursor-pointer">
  Sign up
</button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-teal-600 px-6 py-4 space-y-4 text-white">
          <Link to="/" className="block">Home</Link>
          <Link to="/news" className="block">News</Link>
          <Link to="/contact" className="block">Contact</Link>
          <Link to="/blog" className="block">Blog</Link>
          <Link to="/about" className="block">About Us</Link>
          <div className="flex space-x-4 mt-4">
            <button className="w-1/2 px-4 py-2 rounded-full bg-white text-gray-800 font-semibold hover:bg-gray-200">
              Login
            </button>
            <button className="w-1/2 px-4 py-2 rounded-full bg-gray-800 text-white font-semibold hover:bg-gray-700">
              Sign Up
            </button>
          </div>
        </div>
      )}

        <Hero />
    </header>
  );
}
