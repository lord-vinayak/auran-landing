import React, { useState } from "react";
import { Activity, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Solutions", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Careers", href: "#careers" },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-50">
      {/* The Floating Glass Pill */}
      <nav className="relative z-20 bg-white/40 backdrop-blur-xl border border-white/60 shadow-lg shadow-slate-200/20 rounded-full px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <div  className="flex items-center space-x-3 cursor-pointer group">
          <div  className="flex items-center justify-center h-10 w-10 overflow-hidden rounded-full bg-white/50 shadow-sm border border-white/40 group-hover:scale-105 transition-transform duration-300">
            <img
              src="/auran.png"
              alt="Logo"
              className="h-6 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <Activity className="h-5 w-5 text-teal-600 hidden" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-800">
            Auran Solutions
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1 bg-white/30 backdrop-blur-md border border-white/40 rounded-full px-2 py-1.5 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-5 py-2 text-sm font-normal text-slate-600 rounded-full transition-all duration-300 hover:text-slate-900 hover:bg-white/60 hover:shadow-sm">
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block active:scale-95 bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-teal-600 transition-all duration-300 shadow-md shadow-slate-900/10 font-normal text-sm hover:-translate-y-0.5">
            Get Started
          </button>

          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-white/50 border border-white/40 text-slate-700 hover:bg-white/80 transition-colors">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            // Animation configuration
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            className="md:hidden absolute top-full left-0 right-0 mt-4 bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-4 shadow-xl shadow-slate-200/30 origin-top z-10">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base text-slate-700 font-normal px-4 py-3 rounded-2xl hover:bg-white/60 transition-colors"
                  onClick={toggleMenu}>
                  {link.name}
                </a>
              ))}
              <button className="active:scale-95 bg-slate-900 text-white px-6 py-3.5 rounded-2xl w-full font-bold shadow-md mt-2 hover:bg-teal-600 transition-colors">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
