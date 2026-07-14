export default function Tag({ children }: { children: string }) {
  return (
    <span className="tag-pill rounded-full px-2.5 py-1 text-sm">{children}</span>
  );
}
