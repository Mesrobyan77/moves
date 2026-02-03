"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import { navigationLinks } from "@/src/constands";
import { Search, Menu, X } from "lucide-react";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);  

  return (
    <nav className="border-b border-border bg-background h-20 flex items-center sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          
          <Link href="/" className="flex items-center shrink-0">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center ml-10 space-x-8">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href || "/"}
                className={`text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-text-light"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side Tools */}
        <div className="flex items-center gap-4 md:gap-6">
          
          {/* Search Bar - Hidden on small mobile, compact on tablet */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="I'm looking for..."
              className="bg-[#1a191d] border border-border text-xs md:text-sm rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:border-primary transition-all w-32 md:w-48 xl:w-64"
            />
            <Search className="absolute right-3 top-2.5 text-text-light w-4 h-4" />
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
              <span className="text-primary text-xs font-bold font-bebas">ID</span>
            </div>
            <span className="text-white text-sm font-medium hidden lg:block group-hover:text-primary transition-colors">
              Nickname
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-20 bg-background/95 backdrop-blur-lg z-40 transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <ul className="flex flex-col p-6 space-y-6">
          {navigationLinks.map((link) => (
            <li key={link.name} onClick={() => setIsOpen(false)}>
              <Link
                href={link.href || "/"}
                className={`text-lg font-bebas tracking-widest uppercase transition-all ${
                  pathname === link.href ? "text-primary" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          
          {/* Mobile Search - Only visible when menu is open */}
          <div className="relative sm:hidden pt-4">
             <input
              type="text"
              placeholder="Search..."
              className="bg-[#1a191d] border border-border text-sm rounded-lg py-3 pl-4 pr-10 w-full focus:outline-none focus:border-primary"
            />
            <Search className="absolute right-3 top-7 text-text-light w-5 h-5" />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;