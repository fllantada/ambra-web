export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-center mb-12">
      <span className="relative inline-block">
        {children}
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-[#c41e3a]" />
      </span>
    </h2>
  );
}
