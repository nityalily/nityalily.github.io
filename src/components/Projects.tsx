"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { projects } from "@/data/resume";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import Tag from "@/components/Tag";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-8">
      <SectionHeader eyebrow="Projects" />

      <div className="space-y-3">
        {projects.map((project, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={project.name} delay={i * 0.06}>
              <div className="card-border rounded-2xl">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-4 py-3.5 text-left sm:px-5"
                >
                  <Plus
                    size={16}
                    className={`shrink-0 text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                  <span className="flex-1 text-sm font-semibold">{project.name}</span>
                  <span className="hidden flex-wrap justify-end gap-1.5 sm:flex">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-border px-4 pb-4 pt-3.5 sm:px-5">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                      <p className="text-sm text-muted">{project.role}</p>
                      <p className="whitespace-nowrap font-mono text-sm text-muted">
                        {project.dates}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
