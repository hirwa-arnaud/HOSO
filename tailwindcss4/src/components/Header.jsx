import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import Hero from "./Hero"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-teal-500 ">
      <nav className="container mx-auto flex items-center justify-between px-6 py-0">
<img src="logo.png" className="h-30" />

        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About Us</a></li>
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
          <a href="#" className="block">Home</a>
          <a href="#" className="block">News</a>
          <a href="#" className="block">Contact</a>
          <a href="#" className="block">Blog</a>
          <a href="#" className="block">About Us</a>
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
