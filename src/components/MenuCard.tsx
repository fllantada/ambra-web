import { MenuItem } from "@/data/menu";

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="group py-4 border-b border-[#e0d8cf] last:border-0">
      <div className="flex justify-between items-baseline gap-4">
        <h3 className="font-semibold text-[#2c2c2c] group-hover:text-[#c41e3a] transition-colors">
          {item.name}
        </h3>
        <span className="font-bold text-[#c41e3a] whitespace-nowrap text-sm">{item.price}</span>
      </div>
      {item.description && (
        <p className="text-sm text-[#666] mt-1 leading-relaxed">{item.description}</p>
      )}
    </div>
  );
}
