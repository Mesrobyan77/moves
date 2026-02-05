"use client";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-background py-10 flex items-center transition-colors duration-300 relative z-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="text-3xl font-bebas tracking-wider">
            <span className="text-primary italic">HOT</span>
            <span className="text-foreground italic">FLIX</span>
          </div>

          <div className="text-muted text-sm font-light text-center md:text-left leading-relaxed">
            <p>© HOTFLIX, {new Date().getFullYear()}</p>
            <p>
              Created by{" "}
              <span className="text-primary hover:text-accent transition-colors font-medium cursor-pointer">
                Merobyan77
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <nav className="flex items-center gap-6 md:gap-10">
            {[
              { label: "About Us", href: "/about" },
              { label: "Contacts", href: "/contacts" },
              { label: "Privacy policy", href: "/privacy" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 text-[14px] uppercase tracking-widest font-bebas hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={scrollToTop}
            className="group flex cursor-pointer items-center justify-center w-12 h-12 rounded-2xl bg-card border border-border hover:border-primary shadow-xl transition-all duration-500 hover:shadow-primary/10"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-primary group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
