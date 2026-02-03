"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const options = [
  { value: "en", label: "EN" },
  { value: "am", label: "AM" },
  { value: "ru", label: "RU" },
];

export default function LanguageSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-primary/50 transition-all text-[11px] font-bold text-gray-400 hover:text-white uppercase tracking-widest"
      >
        {selected.label}
        <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-20 bg-card border border-white/5 rounded-xl shadow-2xl py-2 z-[110] overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setSelected(opt);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-colors ${
                selected.value === opt.value ? "text-primary bg-white/5" : "text-gray-400 hover:bg-primary hover:text-black"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}