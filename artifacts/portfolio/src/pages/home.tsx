import { LoadingScreen } from "@/components/loading-screen";
import { CustomCursor } from "@/components/custom-cursor";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </>
  );
}
