"use client";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-background border-t border-border py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <div className="text-3xl font-bold tracking-tighter">
            <span className="text-primary italic">HOT</span>
            <span className="text-white italic">FLIX</span>
          </div>

          <div className="text-zinc-500 text-sm font-light text-center md:text-left leading-relaxed">
            <p>© HOTFLIX, {new Date().getFullYear()}</p>
            <p>
              Create by{" "}
              <span className="text-primary hover:underline cursor-pointer">
                Merobyan77
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-8 md:gap-12">
          <nav className="flex items-center gap-6 md:gap-10">
            <Link
              href="/about"
              className="text-white text-[15px] hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contacts"
              className="text-white text-[15px] hover:text-primary transition-colors"
            >
              Contacts
            </Link>
            <Link
              href="/privacy"
              className="text-white text-[15px] hover:text-primary transition-colors"
            >
              Privacy policy
            </Link>
          </nav>

          <button
            onClick={scrollToTop}
            className="group flex cursor-pointer items-center justify-center w-12 h-12 rounded-xl border-2 border-primary/40 hover:border-primary transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-primary group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
