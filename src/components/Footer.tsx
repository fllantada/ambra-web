import type { Dictionary } from "@/i18n";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="bg-[#1a1a1a] text-white/60 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-4">AMBRA</h3>
            <p className="text-sm leading-relaxed">
              {dict.footer.description}
            </p>
          </div>
          <div>
            <h4 className="text-white uppercase text-sm tracking-widest mb-4">{dict.footer.schedule}</h4>
            <p className="text-sm">{dict.footer.everyDay}</p>
            <p className="text-sm">{dict.footer.hours}</p>
          </div>
          <div>
            <h4 className="text-white uppercase text-sm tracking-widest mb-4">{dict.footer.contact}</h4>
            <p className="text-sm">Palma de Mallorca</p>
            <p className="text-sm">Islas Baleares, España</p>
            <p className="text-sm mt-2">info@ambra-restaurant.com</p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} Ambra Restaurante. {dict.footer.rights}
        </div>
      </div>
    </footer>
  );
}
