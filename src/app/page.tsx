import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { ArchitectureFocus } from "@/components/ArchitectureFocus";
import { TechStack } from "@/components/TechStack";
import { Highlights } from "@/components/Highlights";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <ArchitectureFocus />
        <TechStack />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
