"use client";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.substring(2); // Remove /# from href
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    } else if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  };

  const navLinks = [
       { name: "Skills", href: "/#skills" },
       { name: "Tools", href: "/#tools" },
       { name: "Projects", href: "/#projects" },
       { name: "Contact", href: "/#contact" },
       { name: "About", href: "/about" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-4 bg-black/80 backdrop-blur-lg border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Name/Logo */}
          <div className="text-white">
            <Link href="/" className="flex items-center gap-2 text-base sm:text-lg font-semibold tracking-wide hover:text-blue-400 transition-colors">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">Khandaker Samin Yeasar</span>
              <span className="sm:hidden">KSY</span>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="group relative text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium py-2"
              >
                <span className="relative z-10">{link.name}</span>
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                {/* Glow effect */}
                <span className="absolute inset-0 bg-linear-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-lg blur-sm transition-all duration-300 -z-10"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Animated Hamburger */}
          <button 
            className="md:hidden text-white relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu - Centered Modal Popup */}
      <div className={`fixed inset-0 z-50 md:hidden flex items-center justify-center p-4 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className={`relative w-full max-w-sm bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-blue-500/30 rounded-3xl shadow-2xl shadow-blue-500/20 transform transition-all duration-300 ${
            isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute -top-3 -right-3 w-10 h-10 bg-linear-to-br from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Menu Header */}
          <div className="text-center p-6 pb-4 border-b border-gray-700/50">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Code2 className="w-7 h-7 text-blue-400" />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Menu</span>
            </div>
            <p className="text-gray-400 text-xs">Navigate to your destination</p>
          </div>

          {/* Menu Links */}
          <div className="p-6 space-y-2 max-h-[60vh] overflow-y-auto">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="group relative flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-base font-medium py-4 px-5 rounded-xl hover:bg-linear-to-r hover:from-blue-500/10 hover:to-purple-500/10 border border-transparent hover:border-blue-500/30"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </Link>
            ))}
          </div>

          {/* Menu Footer */}
          <div className="p-6 pt-4 border-t border-gray-700/50 text-center">
            <p className="text-gray-500 text-xs">
              © 2025 Khandaker Samin Yeasar
            </p>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
}
