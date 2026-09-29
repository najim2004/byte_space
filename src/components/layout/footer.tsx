"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FOOTER_LINKS_COL_1 = [
  { label: "Featured Courses", href: "#" },
  { label: "Featured Categories", href: "#" },
  { label: "Business", href: "#" },
  { label: "IT", href: "#" },
  { label: "Design", href: "#" },
];

const FOOTER_LINKS_COL_2 = [
  { label: "Development", href: "#" },
  { label: "Marketing", href: "#" },
  { label: "Photography", href: "#" },
  { label: "Finance", href: "#" },
  { label: "Sport", href: "#" },
];

const FOOTER_LINKS_COL_3 = [
  { label: "Become a Creator", href: "#" },
  { label: "Affiliate Program", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Help", href: "#" },
  { label: "About", href: "#" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative w-full border-t border-neutral-200 bg-white pt-18 pb-12">
      <div className="mx-auto flex w-full max-w-300 flex-col px-4 sm:px-6 lg:px-8">
        {/* Main Footer Nav Row */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-23">
          {/* Left Column: Brand & Newsletter Form */}
          <div className="flex w-full max-w-132 flex-col gap-6 sm:gap-11">
            {/* Logo and Tagline */}
            <div className="flex flex-col gap-4">
              <Link href="/" className="inline-block w-fit">
                <Image
                  src="/assets/svgs/logos/logo-bytespace-black-text.svg"
                  alt="ByteSpace Logo"
                  width={171}
                  height={37}
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <p className="font-satoshi text-sm leading-[1.6] text-neutral-950">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>

            {/* Newsletter Input + Button */}
            <div className="flex flex-col gap-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="relative flex h-13 w-full max-w-94 items-center rounded-full border border-neutral-200 bg-white px-6">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="font-satoshi w-full bg-transparent text-base text-neutral-950 placeholder:text-neutral-950/70 focus:outline-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="font-satoshi bg-secondary-400 hover:bg-secondary-500 h-11.5 rounded-full px-6 text-lg font-medium text-neutral-950 shadow-none transition-all duration-200"
                >
                  Search
                </Button>
              </form>

              <p className="font-satoshi text-xs leading-[1.6] text-neutral-950">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Columns: Nav Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 lg:gap-10">
            {/* Column 1 */}
            <ul className="flex flex-col gap-4">
              {FOOTER_LINKS_COL_1.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="font-satoshi hover:text-primary-800 text-sm leading-[1.6] text-neutral-950 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="flex flex-col gap-4">
              {FOOTER_LINKS_COL_2.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="font-satoshi hover:text-primary-800 text-sm leading-[1.6] text-neutral-950 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 3 */}
            <ul className="flex flex-col gap-4">
              {FOOTER_LINKS_COL_3.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="font-satoshi hover:text-primary-800 text-sm leading-[1.6] text-neutral-950 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider & Copyright Row */}
        <div className="mt-16 flex flex-col gap-6 pt-6 sm:mt-24 sm:gap-8">
          <div className="h-px w-full bg-neutral-200" />
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="font-satoshi text-xs leading-[1.6] text-neutral-950">
              @ 2023 ByteSpace. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {LEGAL_LINKS.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="font-satoshi text-xs leading-[1.6] text-neutral-950 transition-colors hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
