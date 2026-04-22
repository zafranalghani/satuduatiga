import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Work", id: "work" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 2.2 }}
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => scrollTo("hero")}
            className="text-xl font-bold tracking-tighter hover-trigger"
          >
            AM<span className="text-primary">.</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium hover:text-primary transition-colors hover-trigger relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden hover-trigger"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-6 right-6 hover-trigger"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(link.id)}
                  className="text-4xl font-bold tracking-tighter hover:text-primary transition-colors hover-trigger"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
