"use client";

// =============================================================================
// DatePicker — WhatsApp-style inline calendar (Step 3)
// =============================================================================

import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { parseISO, startOfDay, isWeekend, format } from "date-fns";

interface DatePickerProps {
  onSelect: (isoDate: string) => void;
  initialDate?: string;
}

export default function DatePicker({ onSelect, initialDate }: DatePickerProps) {
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  const today = startOfDay(new Date());

  useEffect(() => {
    if (!initialDate) {
      setSelected(undefined);
      return;
    }
    try {
      setSelected(parseISO(initialDate));
    } catch {
      setSelected(undefined);
    }
  }, [initialDate]);

  const handleSelect = (day: Date | undefined) => {
    if (!day) return;
    setSelected(day);
    onSelect(format(day, "yyyy-MM-dd"));
  };

  return (
    <div className="animate-bubble-in">
      <div
        className="rounded-lg p-2 inline-block"
        style={{ backgroundColor: "#1f2c34" }}
      >
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={handleSelect}
          disabled={{ before: today }}
          modifiers={{
            weekend: (date) => isWeekend(date),
            today,
          }}
          modifiersClassNames={{
            weekend: "ee-weekend",
            today: "ee-today",
            selected: "ee-selected",
          }}
          showOutsideDays={false}
          className="ee-calendar"
        />
        <div className="flex items-center gap-1.5 mt-1 px-1 text-[10px] text-white/30">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span>Fri-Sun premium</span>
        </div>
      </div>

      <style jsx global>{`
        .ee-calendar {
          --rdp-accent-color: #2ec4a5;
          --rdp-accent-background-color: #2ec4a5;
          --rdp-day-height: 32px;
          --rdp-day-width: 32px;
          color: #e9edef;
          font-family: var(--font-body);
          font-size: 12px;
        }
        .ee-calendar .rdp-button_previous,
        .ee-calendar .rdp-button_next {
          color: #2ec4a5;
        }
        .ee-calendar .rdp-month_caption {
          font-weight: 600;
          color: #e9edef;
          font-size: 13px;
        }
        .ee-calendar .rdp-weekday {
          color: #2ec4a5;
          font-size: 10px;
          font-weight: 600;
          opacity: 0.6;
        }
        .ee-calendar .rdp-day {
          border-radius: 9999px;
          transition: background 0.15s ease;
        }
        .ee-calendar .rdp-day button {
          border-radius: 9999px;
        }
        .ee-calendar .rdp-day:not(.rdp-disabled):hover {
          background: rgba(0, 168, 132, 0.15);
        }
        .ee-calendar .ee-selected,
        .ee-calendar .rdp-selected .rdp-day_button {
          background: #2ec4a5 !important;
          color: #fff !important;
          font-weight: 700;
        }
        .ee-calendar .ee-today {
          border: 1.5px solid #2ec4a5;
        }
        .ee-calendar .ee-weekend:not(.rdp-disabled) {
          color: #f59e0b;
        }
        .ee-calendar .rdp-disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
