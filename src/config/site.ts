import "@/lib/env";

export const siteConfig = {
  name: "Byte Space",
  description: "Byte Space - An innovative platform built with industry-grade Next.js architecture.",
  url: "https://bytespace.example.com",
  links: {
    github: "https://github.com/najim2004/byte_space",
  },
} as const;

export type SiteConfig = typeof siteConfig;
