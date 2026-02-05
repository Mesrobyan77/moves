"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import { Menu, X, ChevronDown } from "lucide-react";
import SearchBar from "./SearchBar";
import LanguageSelect from "./LanguageSelect";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "@/src/hooks/useTranslation";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  
  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.pricing"), href: "/pricing" },
    { name: t("nav.help"), href: "/help" },
    { name: t("nav.catalog"), href: "/catalog" },
    {
      name: t("nav.pages"),
      href: "#",
      links: [
        { name: t("nav.about_us"), href: "/about" },
        { name: t("nav.help_center"), href: "/help" },
        { name: t("nav.contacts"), href: "/contacts" },
        { name: t("nav.privacy"), href: "/privacy" },
      ],
    },
  ];

  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-md h-20 flex items-center sticky top-0 z-[100] transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between px-4 gap-2">
        {/* Left Side: Burger & Logo */}
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <button
            className="md:hidden text-foreground focus:outline-none p-1 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group py-7">
              <Link
                href={link.href || "#"}
                className={`text-[11px] lg:text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-muted"
                }`}
              >
                {link.name}
                {link.links && (
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300 text-primary/60"
                  />
                )}
              </Link>

              {link.links && (
                <div className="absolute top-full left-0 w-52 bg-card border border-border rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-2xl py-3 overflow-hidden">
                  {link.links.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className={`block px-6 py-3 text-[10px] uppercase font-black tracking-widest transition-all hover:bg-primary hover:text-black ${
                        pathname === sub.href ? "text-primary" : "text-muted"
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Search & Language */}
        <div className="hidden md:flex flex-1 max-w-[400px] mx-4 items-center gap-3">
          <SearchBar />
          <div className="hidden lg:block shrink-0">
            <LanguageSelect />
          </div>
        </div>

        {/* Right Side: Profile & Theme */}
        <div className="flex items-center flex-shrink-0 gap-4 lg:gap-6">
          <div className="flex items-center gap-3 cursor-pointer group bg-card p-1.5 pr-3 rounded-2xl border border-border hover:border-primary/50 transition-all shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
              <span className="text-black text-[10px] font-black">ID</span>
            </div>
            <span className="text-foreground text-[11px] font-black uppercase tracking-tighter hidden sm:block group-hover:text-primary transition-colors">
              {t("nav.nickname")}
            </span>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-20 bg-background z-40 transition-all duration-500 md:hidden ${
          isOpen
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible -translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-border">
          <SearchBar />
        </div>
        <ul className="flex flex-col p-8 space-y-8 overflow-y-auto max-h-[calc(100vh-160px)]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href || "#"}
                onClick={() => !link.links && setIsOpen(false)}
                className={`text-4xl font-bebas tracking-wider uppercase transition-all flex items-center justify-between ${
                  pathname === link.href ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
              {link.links && (
                <ul className="mt-4 ml-2 space-y-4 border-l-2 border-primary/20 pl-6">
                  {link.links.map((sub) => (
                    <li key={sub.name} onClick={() => setIsOpen(false)}>
                      <Link
                        href={sub.href}
                        className={`text-sm font-bold uppercase tracking-[0.2em] ${
                          pathname === sub.href ? "text-primary" : "text-muted"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          {/* Mobile Language Switcher */}
          <div className="pt-4 border-t border-border">
            <LanguageSelect />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
