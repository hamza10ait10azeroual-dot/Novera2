import { motion } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from 'figma:asset/7044abe4746970f4bcdce7ac1e6af79823b5d7fc.png';

const navLinks = [
  { name: 'Technology', href: '#technology' },
  { name: 'AI Analysis', href: '#ai-analysis' },
  { name: 'Clinical Data', href: '#clinical' },
  { name: 'Mobile App', href: '#mobile' },
  { name: 'About', href: '#about' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href="#" className="flex items-center">
              <img
                src={logoImage}
                alt="NOVERA Logo"
                className="h-16 w-auto"
              />
            </a>
          </motion.div>

          {/* Navigation Links - Center (Desktop) */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Sign In Button - Right (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-3 border-t border-cyan-500/20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <button className="w-full px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                Sign In
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}