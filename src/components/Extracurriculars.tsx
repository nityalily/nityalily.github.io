import { extracurriculars } from "@/data/resume";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

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
    </section>
  );
}
