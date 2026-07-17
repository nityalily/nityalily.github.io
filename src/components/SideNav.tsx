import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#extracurriculars", label: "Beyond class" },
];

export default function SideNav() {
  return (
    <nav className="flex shrink-0 items-center gap-4 overflow-x-auto pt-6 sm:sticky sm:top-8 sm:h-fit sm:w-32 sm:flex-col sm:items-start sm:gap-3 sm:overflow-visible sm:pt-9">
      <a href="#top" className="shrink-0">
        <img src="/favicon.ico" alt="Nitya Patel" className="h-7 w-7 rounded-md" />
      </a>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="whitespace-nowrap text-sm text-muted transition-colors hover:text-accent"
        >
          {link.label}
        </a>
      ))}
      <ThemeToggle />
    </nav>
  );
}
