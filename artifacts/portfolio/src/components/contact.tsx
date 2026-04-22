import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Contact() {
  const links = [
    { name: "Email", icon: Mail, url: "mailto:hello@example.com" },
    { name: "GitHub", icon: Github, url: "https://github.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com" }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-8"
          >
            MARI BICARA
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 mb-16 max-w-2xl"
          >
            Saat ini terbuka untuk peluang baru. Baik jika kamu punya pertanyaan atau sekadar mau menyapa, saya akan berusaha membalas secepatnya!
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 bg-background text-foreground rounded-full font-bold hover:bg-transparent hover:text-primary-foreground border-2 border-transparent hover:border-primary-foreground transition-all duration-300 hover-trigger"
                >
                  <Icon className="w-5 h-5" />
                  {link.name}
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 w-full text-center opacity-50 text-sm font-medium">
        © {new Date().getFullYear()} Alex Mercer. Dibuat dengan sepenuh hati.
      </div>
    </section>
  );
}
