import SideNav from "@/components/SideNav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Extracurriculars from "@/components/Extracurriculars";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-6 px-8 pb-16 sm:flex-row sm:gap-14 sm:px-12">
      <SideNav />
      <div className="min-w-0 flex-1">
        <Hero />
        <Experience />
        <Projects />
        <Extracurriculars />
      </div>
    </main>
  );
}
