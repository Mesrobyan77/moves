export interface NavigationLink {
  name: string;
  href?: string;
  links?: { name: string; href: string }[];
}

export const navigationLinks: NavigationLink[] = [
  { name: "Home", href: "/" },
  { name: "Catalog", href: "/catalog" },
  { name: "Pricing Plan", href: "/pricing" },
  {
    name: "Pages",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Help Center", href: "/help" },
      { name: "Contacts", href: "/contacts" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
] as const;

export const forbiddenKeywords = [
  "sex",
  "porno",
  "porn",
  "xxx",
  "hentai",
  "nude",
  "adult",
  "nude",
  "erotic",
  "bdsm",
  "fetish",
  "incest",
  "bestiality",
  "zoophilia",
  "gore",
  "snuff",
  "nud",
  "xxxvideo",
  "hardcore",
  "softcore",
  "erotica",
  "masturbation",
  "orgy",
  "striptease",
  "topless",
  "lingerie",
  "voyeur",
  "camgirl",
  "escor",
  "prostitute",
  "hooker",
  "tits",
  "dildo",
  "vibrator",
] as const;
