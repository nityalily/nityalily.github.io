"use client";

import { useState } from "react";
import { Apple, ExternalLink, Plus } from "lucide-react";
import { projects } from "@/data/resume";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import Tag from "@/components/Tag";
import ProjectSlideshow from "@/components/ProjectSlideshow";
import { GithubIcon } from "@/components/icons";

function LinkIcon({ type }: { type: "github" | "figma" | "appstore" }) {
  if (type === "github") return <GithubIcon size={14} />;
  if (type === "appstore") return <Apple size={14} />;
  return <ExternalLink size={14} />;
}

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
                      <p className="text-sm font-semibold">{project.role}</p>
                      <p className="whitespace-nowrap text-sm text-muted">
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
                    {project.links && (
                      <div className="mt-3 flex flex-wrap gap-3">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
                          >
                            <LinkIcon type={link.type} />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                    {project.media && (
                      <ProjectSlideshow media={project.media} />
                    )}
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
