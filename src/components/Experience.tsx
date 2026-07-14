import { experience } from "@/data/resume";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="py-8">
      <SectionHeader eyebrow="Experience" />

      <div className="space-y-4">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08}>
            <div className="grid gap-1 border-b border-border pb-4 last:border-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:gap-6">
              <div>
                <h3 className="text-sm font-semibold">
                  {job.role} <span className="font-normal text-muted">@ {job.company}</span>
                </h3>
                <p className="mt-1 font-mono text-sm text-muted">{job.dates}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted">{job.summary}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
