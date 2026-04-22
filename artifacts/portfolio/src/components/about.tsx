import { motion } from "framer-motion";

export function About() {
  const skills = [
    "React / Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "WebGL / Three.js",
    "UI/UX Design"
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
              DESIGNER <br/>
              <span className="text-stroke opacity-30">AND</span><br/>
              DEVELOPER<span className="text-primary">.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I bridge the gap between design and engineering. As a self-taught developer with a deep appreciation for aesthetics, I build interfaces that don't just work—they feel right.
              </p>
              <p>
                My approach is rooted in the belief that great software is invisible. The micro-interactions, the typographic hierarchy, the physics of the animations—everything exists to serve the experience.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-accent rounded-3xl p-12 relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold mb-8">Technical Arsenal</h3>
            <ul className="space-y-4">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xl font-medium">{skill}</span>
                </li>
              ))}
            </ul>

            <div className="absolute -bottom-20 -right-20 w-64 h-64 border border-primary/20 rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-primary/20 rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
