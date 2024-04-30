import { type NavItem, type NavItemFooter } from "@/types";

export const siteConfig = {
  name: "ATEC-Website",
  description:
    "Manages the data and events for Association of Tangail Ex-Cadets",
  url: "https://rouzex.com",
  author: "rouzex",
  keywords: [
    "ATEC",
    "atec",
    "Tangail Ex-Cadets",
    "Association of Tangail Ex-Cadets",
    "Tangail Ex-Cadets Association",
  ],
  navItems: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Gallery",
      href: "/gallery",
    },
    {
      title: "Events",
      href: "/events",
    },
  ] satisfies NavItem[],
  navItemsMobile: [],
  navItemsFooter: [
    {
      title: "Company",
      items: [
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
        {
          title: "Terms",
          href: "/tos",
          external: false,
        },
        {
          title: "Careers",
          href: "/careers",
          external: false,
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          title: "Docs",
          href: "/docs",
          external: false,
        },
        {
          title: "FAQ",
          href: "/faq",
          external: false,
        },
        {
          title: "Blog",
          href: "/blog",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
      ],
    },
    {
      title: "Inspiration",
      items: [
        {
          title: "Shadcn",
          href: "https://ui.shadcn.com/",
          external: true,
        },
        {
          title: "Taxonomy",
          href: "https://tx.shadcn.com/",
          external: true,
        },
        {
          title: "Skateshop",
          href: "https://skateshop.sadmn.com/",
          external: true,
        },
        {
          title: "Acme Corp",
          href: "https://acme-corp.jumr.dev/",
          external: true,
        },
      ],
    },
  ] satisfies NavItemFooter[],
};
