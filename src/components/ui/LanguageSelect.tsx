"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Language, useLanguageStore } from "@/src/store/useLanguageStore";

export default function LanguageSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { lang, setLang } = useLanguageStore();

  const options: { code: Language; label: string }[] = [
    { code: "en", label: "English (EN)" },
    { code: "am", label: "Հայերեն (AM)" },
    { code: "ru", label: "Русский (RU)" },
  ];

  // Find the label for the current active language
  const currentLabel = options.find((opt) => opt.code === lang)?.code.toUpperCase() || "EN";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLang(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card border border-border hover:border-primary/50 transition-all text-[11px] font-black text-muted hover:text-foreground uppercase tracking-[0.1em]"
      >
        <span>{currentLabel}</span>
        <ChevronDown 
          size={14} 
          className={`text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 origin-top-right z-[110] bg-card border border-border rounded-2xl shadow-2xl p-1.5 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col gap-1">
            {options.map((opt) => (
              <button
                key={opt.code}
                onClick={() => handleSelect(opt.code)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-[10px] font-black transition-all uppercase tracking-wider ${
                  lang === opt.code
                    ? "bg-primary text-black shadow-lg shadow-primary/20"
                    : "text-muted hover:bg-white/5 hover:text-foreground"
                }`}
              >
                {opt.label}
                {lang === opt.code && (
                  <div className="w-1 h-1 rounded-full bg-black" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}