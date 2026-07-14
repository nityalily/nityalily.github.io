"use client";

import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { profile } from "@/data/resume";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section id="top" className="pt-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card-border w-full overflow-hidden rounded-2xl"
      >
        <div className="flex items-center gap-2 border-b border-border bg-surface-bar px-4 py-3">
          <span className="term-dot" />
          <span className="term-dot" />
          <span className="term-dot" />
          <span className="ml-2 font-mono text-sm text-muted">
            ~/nitya-patel &mdash; zsh
          </span>
        </div>

        <div className="px-6 py-7 sm:px-8">
          <p className="section-heading mb-3">Class of 2027</p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Nitya Patel
            <span className="cursor-blink font-mono text-accent">_</span>
          </h1>

          <p className="mt-2 font-mono text-sm text-muted">
            <span className="font-bold text-accent">&gt;</span> {profile.program}
          </p>
          <p className="mt-1 font-mono text-sm text-muted">
            <span className="font-bold text-accent">&gt;</span> {profile.state}
          </p>

          <p className="mt-3 max-w-lg text-sm leading-relaxed text-foreground/85">
            {profile.tagline}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon size={14} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedinIcon size={14} /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={14} /> Email
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
            >
              <FileText size={14} /> Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
