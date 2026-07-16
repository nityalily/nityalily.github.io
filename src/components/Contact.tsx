import { Mail } from "lucide-react";
import { profile } from "@/data/resume";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="py-8">
      <SectionHeader eyebrow="Contact" />

      <Reveal className="card-border rounded-2xl px-6 py-8 text-center sm:px-8">
        <h3 className="text-sm font-semibold">Let&apos;s build something together.</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          Open to mentorship, collaborations, and interesting problems. Reach out any time.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            <Mail size={16} /> Say hello
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon size={16} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedinIcon size={16} /> LinkedIn
          </a>
        </div>
      </Reveal>

      <footer className="mt-8 flex flex-col items-center gap-2 text-sm text-muted">
        <p>© {new Date().getFullYear()} Nitya Patel. Built with Next.js.</p>
      </footer>
    </section>
  );
}
