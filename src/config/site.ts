import { type NavItem, type NavItemFooter } from "@/types";

export const siteConfig = {
  /* name: "ATEC-Website", */
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
      title: "Useful Links",
      items: [
        {
          title: "About us",
          href: "/about",
          external: false,
        },
        {
          title: "Membership info",
          href: "/membership",
          external: false,
        },
        {
          title: "Gallery",
          href: "/gallery",
          external: false,
        },
        {
          title: "Events",
          href: "/events",
          external: false,
        },
      ],
    },

    {
      title: "Contact Info",
      items: [
        {
          title:
            "Bou Tower (2nd Floor), Akur Takur Para, Zila Sadar Rd, Tangail",
          href: "/docs",
          external: false,
        },
        {
          title: "+88019187690**",
          href: "/contact",
          external: false,
        },

        {
          title: "+88017327137**",
          href: "/contact",
          external: false,
        },

        {
          title: "atecofficial@example.com",
          href: "email",
          external: false,
        },
      ],
    }
      
  ] satisfies NavItemFooter[],
};
