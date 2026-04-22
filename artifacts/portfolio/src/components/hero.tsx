import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export function Hero() {
  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="min-h-[100dvh] flex flex-col justify-center relative pt-20 pb-12 overflow-hidden"
    >
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <p className="text-primary font-medium tracking-wide uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-primary block"></span>
              Frontend Developer
            </p>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black leading-[0.9] tracking-tighter mb-8">
            <motion.div className="overflow-hidden">
              <motion.span 
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 2.3 }}
              >
                MERANCANG
              </motion.span>
            </motion.div>
            <motion.div className="overflow-hidden">
              <motion.span 
                className="block text-primary"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 2.4 }}
              >
                PENGALAMAN
              </motion.span>
            </motion.div>
            <motion.div className="overflow-hidden">
              <motion.span 
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 2.5 }}
              >
                DIGITAL<span className="text-primary">.</span>
              </motion.span>
            </motion.div>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="flex flex-col sm:flex-row gap-8 sm:items-center mt-12"
          >
            <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
              Saya membangun antarmuka web yang berani dan punya karakter. Terobsesi pada tipografi, gerakan, dan interaksi.
            </p>
            
            <button 
              onClick={scrollToWork}
              className="w-32 h-32 rounded-full border border-border flex items-center justify-center group hover:bg-primary hover:border-primary transition-all duration-500 hover-trigger shrink-0"
            >
              <ArrowDownRight className="w-8 h-8 group-hover:text-white transition-colors" />
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute top-1/2 right-[-10%] w-[60vw] h-[60vw] rounded-full bg-primary/5 blur-[120px] -translate-y-1/2 z-0"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
    </section>
  );
}
