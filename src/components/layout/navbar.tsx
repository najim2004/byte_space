"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-40 mx-auto flex w-full max-w-300 items-center justify-between px-6 py-8.75 lg:px-0">
      <Link
        href="/"
        className="flex items-center transition-opacity hover:opacity-90"
      >
        <Image
          src="/assets/svgs/logos/logo-bytespace.svg"
          alt="ByteSpace Logo"
          width={171}
          height={37}
          priority
          className="h-8 w-auto object-contain lg:h-9"
        />
      </Link>

      <nav className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-7 md:flex lg:gap-8">
        <Link
          href="/"
          className="font-satoshi text-sm font-medium text-neutral-100 transition-colors hover:text-white lg:text-base"
        >
          Home
        </Link>
        <Link
          href="/courses"
          className="font-satoshi text-sm font-normal text-neutral-200 transition-colors hover:text-white lg:text-base"
        >
          Courses
        </Link>
        <Link
          href="/creators"
          className="font-satoshi text-sm font-normal text-neutral-200 transition-colors hover:text-white lg:text-base"
        >
          Creators
        </Link>
      </nav>

      <div className="hidden items-center gap-6 md:flex">
        <Link
          href="/login"
          className="font-satoshi text-sm font-normal text-neutral-100 transition-colors hover:text-white lg:text-base"
        >
          Sign In
        </Link>
        <Link
          href="/register"
          className="font-satoshi text-sm font-normal text-neutral-100 transition-colors hover:text-white lg:text-base"
        >
          Join Us
        </Link>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Shopping Cart"
          className="rounded-full hover:bg-white/10"
        >
          <Image
            src="/assets/svgs/icons/shoping-bag-gray.svg"
            alt="Shopping Bag"
            width={20}
            height={20}
            className="size-5"
          />
        </Button>
      </div>

      <div className="flex items-center gap-3 md:hidden">
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Shopping Cart"
          className="rounded-full hover:bg-white/10"
        >
          <Image
            src="/assets/svgs/icons/shoping-bag-gray.svg"
            alt="Shopping Bag"
            width={20}
            height={20}
            className="size-5"
          />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-neutral-100 hover:bg-white/10 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 z-50 w-full border-b border-white/10 bg-[#003BE2]/95 px-6 py-6 shadow-2xl backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-satoshi text-base font-medium text-neutral-100"
            >
              Home
            </Link>
            <Link
              href="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="font-satoshi text-base font-normal text-neutral-200"
            >
              Courses
            </Link>
            <Link
              href="/creators"
              onClick={() => setMobileMenuOpen(false)}
              className="font-satoshi text-base font-normal text-neutral-200"
            >
              Creators
            </Link>
            <div className="mt-2 flex flex-col gap-3 border-t border-white/10 pt-4">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="font-satoshi text-base font-normal text-neutral-100"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="font-satoshi text-base font-medium text-[#D4FB20]"
              >
                Join Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
