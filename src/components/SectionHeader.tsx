import Reveal from "@/components/Reveal";

export default function SectionHeader({ eyebrow }: { eyebrow: string }) {
  return (
    <Reveal className="mb-4">
      <h2 className="section-heading">{eyebrow}</h2>
    </Reveal>
  );
}
