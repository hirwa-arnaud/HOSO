import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-teal-500" style={{
 clipPath: "ellipse(100% 100% at 50% 0%)"    }}>
      <nav className="container mx-auto flex items-center justify-between px-6 py-0">
<img src="logo.png" />

        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About Us</a></li>
        </ul>

        {/* Buttons */}
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
      <section className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 py-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">
            HOSO RWANDA
          </h1>
          <p className="text-white mb-6">
            Our mission is to unite Head of Schools across Rwanda under one umbrella that promotes collaboration, accountability, innovation, and excellence in education management. Together, we work to nurture young leaders, build character, and ensure every child has access to quality education regardless of background.
          </p>
          <div className="space-x-4">
   <button className="px-6 py-2 rounded-full bg-white/20 text-white font-semibold backdrop-blur-md border border-white/30 shadow-md hover:bg-white/30">
  Contact us
</button>
            <button className="px-6 py-2 rounded-full bg-white/20 text-white font-semibold backdrop-blur-md border border-white/30 shadow-md hover:bg-white/30">
  Gallery
</button>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0 pb-10">
          <img src="chancen.jpg" alt="Students"  className="h-80 rounded-2xl"
          />
        </div>
      </section>
    </header>
  );
}
