import { extracurriculars } from "@/data/resume";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import BugSquash from "@/components/BugSquash";

export default function Extracurriculars() {
  return (
    <section id="extracurriculars" className="py-8">
      <SectionHeader eyebrow="Beyond class" />

      <div className="space-y-3">
        {extracurriculars.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <div className="grid gap-1 border-b border-border pb-3 last:border-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:gap-6">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div id="game" className="mt-8">
        <SectionHeader eyebrow="Game" />
        <Reveal>
          <BugSquash />
        </Reveal>
      </div>

      <Reveal className="card-border mt-8 rounded-2xl px-6 py-8 text-center sm:px-8">
        <h3 className="text-sm font-semibold">Let&apos;s build something together.</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          Open to mentorship, collaborations, and interesting problems. Reach out any time.
        </p>
      </Reveal>

      <footer className="mt-8 flex flex-col items-center gap-2 text-sm text-muted">
        <p>© {new Date().getFullYear()} Nitya Patel. Built with Next.js.</p>
      </footer>
    </section>
  );
}
