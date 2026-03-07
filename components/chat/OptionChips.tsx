"use client";

// =============================================================================
// OptionChips — WhatsApp-style compact selectable pills
// =============================================================================

interface ChipOption {
  id: string;
  label: string;
  emoji?: string;
  subtitle?: string;
}

interface OptionChipsProps {
  options: ChipOption[];
  selected: string | string[];
  onSelect: (id: string) => void;
  multiSelect?: boolean;
}

export default function OptionChips({
  options,
  selected,
  onSelect,
  multiSelect = false,
}: OptionChipsProps) {
  const isSelected = (id: string): boolean => {
    if (Array.isArray(selected)) return selected.includes(id);
    return selected === id;
  };

  return (
    <div className="flex flex-wrap gap-1.5 animate-bubble-in">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => onSelect(option.id)}
          aria-pressed={isSelected(option.id)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all active:scale-[0.97] ${
            isSelected(option.id)
              ? "bg-[#2EC4A5] text-white border border-[#2EC4A5]"
              : "bg-transparent text-[#2EC4A5] border border-[#2EC4A5]/40 hover:border-[#2EC4A5] hover:bg-[#2EC4A5]/10"
          }`}
        >
          {option.emoji && <span className="text-sm">{option.emoji}</span>}
          <span className="leading-tight">
            {option.label}
            {option.subtitle && (
              <span className="ml-1 opacity-60">{option.subtitle}</span>
            )}
          </span>
        </button>
      ))}
      {multiSelect && Array.isArray(selected) && selected.length > 0 && (
        <span className="text-[10px] text-white/30 self-center ml-1">
          tap Continue
        </span>
      )}
    </div>
  );
}
