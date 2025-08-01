import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects","Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          className="text-xl sm:text-2xl font-bold text-white"
          whileHover={{ scale: 1.05, textShadow: "0px 0px 8px #fff" }}
        >
          Haroon<span className="text-purple-400">Dev</span>
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white hover:text-purple-400 relative group"
            >
              {link}
              <span className="block h-[2px] w-0 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#101828]/80 backdrop-blur-md px-6 py-4"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-white hover:text-purple-400 border-b border-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
