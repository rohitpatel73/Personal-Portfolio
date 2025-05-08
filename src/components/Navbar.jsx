import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import profile from '../assets/profile.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="bg-transparent backdrop-blur-md shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">

          {/* 👤 Profile image - visible on mobile */}
          <div className="md:hidden flex items-center">
            <img
              src={profile}
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover border-2 border-purple-400"
            />
          </div>

          {/* 📛 Name in the center for mobile */}
          {/* <h1 className="md:hidden absolute left-1/2 transform -translate-x-1/2 text-lg font-bold text-gray-800">
            Your Name
          </h1> */}

          {/* 🖥️ Desktop Nav Links - centered */}
          <div className="hidden md:flex gap-8 text-xl font-bold text-gray-700 absolute left-1/2 transform -translate-x-1/2">
            {links.map((link, index) => (
              <a
              key={index}
              href={link.href}
              download={link.download}
              className="relative group text-emerald-950 hover:text-emerald-700 transition duration-300"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-stone-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            ))}
          </div>

          {/* 🍔 Hamburger menu - right for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none text-2xl"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 py-4 items-center text-gray-700 font-medium">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                download={link.download}
                className="hover:text-purple-600 transition duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
