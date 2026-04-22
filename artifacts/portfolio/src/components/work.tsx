import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Snapcode",
    category: "Web Application",
    description: "A collaborative code playground with real-time preview and instant sharing capabilities.",
    image: "/projects/snapcode.png",
    year: "2024"
  },
  {
    title: "Moderne",
    category: "Design System",
    description: "An elegant, comprehensive component library built for scale and high-performance teams.",
    image: "/projects/moderne.png",
    year: "2023"
  },
  {
    title: "Aurora",
    category: "Data Platform",
    description: "Complex financial data visualized through beautiful, accessible interactive dashboards.",
    image: "/projects/aurora.png",
    year: "2023"
  }
];

export function Work() {
  return (
    <section id="work" className="py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              FEATURED<br/>
              <span className="text-primary">WORK</span>
            </h2>
          </div>
          <p className="text-muted max-w-sm text-lg">
            A selection of recent projects focusing on deep interaction and refined visual design.
          </p>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center group cursor-pointer hover-trigger`}
            >
              <div className="w-full md:w-3/5 overflow-hidden rounded-lg aspect-video relative">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-full md:w-2/5 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary font-mono text-sm uppercase tracking-wider">{project.category}</span>
                  <span className="w-12 h-px bg-border/30"></span>
                  <span className="text-muted-foreground font-mono text-sm">{project.year}</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-primary transition-colors duration-300 flex items-center gap-4">
                  {project.title}
                  <ArrowUpRight className="w-8 h-8 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </h3>
                
                <p className="text-lg text-muted max-w-md">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
