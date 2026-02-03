interface NavigationLink {
  name: string;
  href?: string;
}

export const navigationLinks: NavigationLink[] = [
  { name: "Home", href: "/" },
  { name: "Catalog", href: "/catalog" },
  { name: "Pricing Plan", href: "/pricing" },
  { name: "pages" },
] as const;
