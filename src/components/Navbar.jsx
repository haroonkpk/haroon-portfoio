import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Github, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1c]/40 backdrop-blur-md shadow-lg py-0"
          : "bg-transparent backdrop-blur-sm bg-white/10 py-2"
      }`}
    >
      <div
        className={ `hidden sm:block text-gray-300 text-xs sm:text-sm transition-all duration-300 ${
          scrolled
            ? "h-0 overflow-hidden opacity-0 border-none"
            : "py-2 px-4 sm:px-8 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Left */}
          <div className="hidden sm:flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+923001234567"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors"
            >
              <Phone size={14} />
              <span>+92 334 0520574</span>
            </a>
            <a
              href="mailto:haroonkhanlala47@gmail.com"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors"
            >
              <Mail size={14} />
              <span>haroonkhanlala47@gmail.com</span>
            </a>
          </div>

          {/* Social Right */}
          <div className="flex items-center gap-4 hidden sm:flex">
            <a
              href="https://www.github.com/haroonkpk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/haroon-kpk-237084377"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* --- PART 2: MAIN NAVBAR --- */}
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.h1
            className="text-2xl font-bold text-white tracking-wide cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Haroon<span className="text-purple-500">.kpk</span>
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white transition-colors text-sm font-medium group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="text-white md:hidden p-1 rounded-md hover:bg-white/10 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- PART 3: MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0f1c]/60 border-t border-b rounded-4xl overflow-hidden border-gray-800"
          >
            <div className="flex flex-col border-b rounded-4xl p-6 space-y-4">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-lg text-gray-300 hover:text-purple-400 pl-2 border-l-2 border-transparent hover:border-purple-400 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
