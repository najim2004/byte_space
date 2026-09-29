"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const COURSE_AVATARS = [
  "/assets/images/avatars/avatar-1.png",
  "/assets/images/avatars/avatar-2.png",
  "/assets/images/avatars/avatar-3.png",
  "/assets/images/avatars/avatar-4.png",
];

const HAPPY_STUDENT_AVATARS = [
  "/assets/images/avatars/avatar-1.png",
  "/assets/images/avatars/avatar-2.png",
  "/assets/images/avatars/avatar-3.png",
  "/assets/images/avatars/avatar-4.png",
  "/assets/images/avatars/avatar-5.png",
  "/assets/images/avatars/avatar-6.png",
  "/assets/images/avatars/avatar-7.png",
];

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-hero-grid bg-primary-800 relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden p-6 sm:p-10 lg:p-12">
      <header className="relative z-30 mx-auto w-full max-w-300">
        <Link href="/" className="inline-block transition-opacity hover:opacity-90">
          <Image
            src="/assets/svgs/logos/logo-bytespace.svg"
            alt="ByteSpace Logo"
            width={171}
            height={37}
            priority
            className="h-8 w-auto object-contain lg:h-9"
          />
        </Link>
      </header>

      <main className="relative z-20 mx-auto my-auto flex w-full max-w-300 flex-col items-center justify-between gap-12 py-8 lg:flex-row lg:items-start lg:gap-16">
        <div className="flex w-full max-w-135 flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-poppins text-xl font-semibold tracking-[-0.01em] text-[#F5F5F6] sm:text-2xl">
              Sign up and come in
            </h1>
            <p className="font-satoshi max-w-119 text-base leading-[1.6] text-[#F5F5F6] sm:text-lg">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost
            </p>
          </div>

          <div className="relative mt-4 hidden h-140 w-full select-none md:block">
            <div className="animate-float pointer-events-none absolute -top-8 -left-4 z-20 size-24 lg:size-28">
              <Image
                src="/assets/svgs/shapes/shape-ring-yellow.png"
                alt="Yellow Torus"
                width={112}
                height={112}
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="animate-float-slow pointer-events-none absolute -bottom-6 -left-6 z-30 size-28 lg:size-32">
              <Image
                src="/assets/svgs/shapes/hero-shape-triangle-yellow.png"
                alt="Yellow Pyramid"
                width={128}
                height={128}
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="animate-float-reverse pointer-events-none absolute right-4 bottom-2 z-10 size-32 lg:size-36">
              <Image
                src="/assets/svgs/shapes/shape-zigzag-gray.png"
                alt="White Zigzag"
                width={144}
                height={144}
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="absolute top-22 left-0 z-10 w-93.25 rounded-3xl border border-[#CED0D3] bg-white p-4 shadow-md transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative h-48.75 w-full overflow-hidden rounded-xl bg-neutral-100">
                <Image
                  src="/assets/images/courses/course-2.avif"
                  alt="Build Digital Asset"
                  fill
                  sizes="341px"
                  className="object-cover"
                />
                <div className="absolute inset-x-2.5 bottom-2.5 flex items-center gap-2">
                  <span className="font-satoshi rounded-full bg-[#F6F6F6]/60 px-2.5 py-1 text-[11px] font-medium text-[#4F4F4F] backdrop-blur-xs">
                    17 Lessons
                  </span>
                  <span className="font-satoshi rounded-full bg-[#F6F6F6]/60 px-2.5 py-1 text-[11px] font-medium text-[#4F4F4F] backdrop-blur-xs">
                    2 hours 16 mins
                  </span>
                  <span className="font-satoshi rounded-full bg-[#F6F6F6]/60 px-2.5 py-1 text-[11px] font-medium text-[#4F4F4F] backdrop-blur-xs">
                    59 Comments
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-poppins text-xl font-semibold tracking-[-0.01em] text-black">
                      Build Digital Asset
                    </h3>
                    <p className="font-satoshi text-xs text-[#4F4F4F]">
                      by purepearl studio
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[#4F4F4F]">
                    <span className="font-satoshi text-lg font-medium">4.5</span>
                    <Image
                      src="/assets/svgs/icons/star-yellow.svg"
                      alt="Star"
                      width={18}
                      height={18}
                      className="size-4.5 object-contain"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="font-satoshi flex items-center gap-1 rounded-full bg-[#F5F5F6] px-3 py-1.5 text-xs font-medium text-[#4B4C53]">
                    <Image
                      src="/assets/svgs/icons/lavel-gray.svg"
                      alt="Level"
                      width={13}
                      height={14}
                      className="h-3.5 w-auto object-contain"
                    />
                    <span>Beginner</span>
                  </div>

                  <div className="flex items-center">
                    {COURSE_AVATARS.map((src, i) => (
                      <div
                        key={i}
                        className="-ml-2 size-8 overflow-hidden rounded-full first:ml-0"
                      >
                        <Image
                          src={src}
                          alt="Student"
                          width={32}
                          height={32}
                          className="size-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="relative -ml-2 flex size-8 items-center justify-center rounded-full bg-black">
                      <span className="font-satoshi text-xs font-medium text-white">
                        26+
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-baseline">
                  <span className="font-poppins text-primary-800 text-xl font-medium tracking-[-0.01em]">
                    $25
                  </span>
                  <span className="font-satoshi text-xs text-[#4F4F4F]">
                    /lifetime
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute top-0 left-28 z-20 w-93.25 rounded-3xl border border-[#CED0D3] bg-white p-4 shadow-xl transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative h-48.75 w-full overflow-hidden rounded-xl bg-neutral-100">
                <Image
                  src="/assets/images/courses/course-3.avif"
                  alt="the Power of Big Data"
                  fill
                  sizes="341px"
                  className="object-cover"
                />
                <div className="absolute inset-x-2.5 bottom-2.5 flex items-center gap-2">
                  <span className="font-satoshi rounded-full bg-[#F6F6F6]/60 px-2.5 py-1 text-[11px] font-medium text-[#4F4F4F] backdrop-blur-xs">
                    17 Lessons
                  </span>
                  <span className="font-satoshi rounded-full bg-[#F6F6F6]/60 px-2.5 py-1 text-[11px] font-medium text-[#4F4F4F] backdrop-blur-xs">
                    2 hours 16 mins
                  </span>
                  <span className="font-satoshi rounded-full bg-[#F6F6F6]/60 px-2.5 py-1 text-[11px] font-medium text-[#4F4F4F] backdrop-blur-xs">
                    59 Comments
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-poppins text-xl font-semibold tracking-[-0.01em] text-black">
                      the Power of Big Data
                    </h3>
                    <p className="font-satoshi text-xs text-[#4F4F4F]">
                      by purepearl studio
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[#4F4F4F]">
                    <span className="font-satoshi text-lg font-medium">4.5</span>
                    <Image
                      src="/assets/svgs/icons/star-yellow.svg"
                      alt="Star"
                      width={18}
                      height={18}
                      className="size-4.5 object-contain"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="font-satoshi flex items-center gap-1 rounded-full bg-[#F5F5F6] px-3 py-1.5 text-xs font-medium text-[#4B4C53]">
                    <Image
                      src="/assets/svgs/icons/lavel-gray.svg"
                      alt="Level"
                      width={13}
                      height={14}
                      className="h-3.5 w-auto object-contain"
                    />
                    <span>Beginner</span>
                  </div>

                  <div className="flex items-center">
                    {COURSE_AVATARS.map((src, i) => (
                      <div
                        key={i}
                        className="-ml-2 size-8 overflow-hidden rounded-full first:ml-0"
                      >
                        <Image
                          src={src}
                          alt="Student"
                          width={32}
                          height={32}
                          className="size-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="relative -ml-2 flex size-8 items-center justify-center rounded-full bg-black">
                      <span className="font-satoshi text-xs font-medium text-white">
                        26+
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-baseline">
                  <span className="font-poppins text-primary-800 text-xl font-medium tracking-[-0.01em]">
                    $25
                  </span>
                  <span className="font-satoshi text-xs text-[#4F4F4F]">
                    /lifetime
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-secondary-400 absolute right-4 bottom-2 z-30 flex w-64.5 flex-col gap-2 rounded-2xl p-4 shadow-xl backdrop-blur-[10px]">
              <div className="flex flex-col">
                <span className="font-satoshi text-base font-medium text-[#242528]">
                  Happy Students
                </span>
                <div className="flex items-center gap-1">
                  <span className="font-satoshi text-[10px] font-bold text-[#242528]">
                    4.5 (240)
                  </span>
                  <Star className="size-3.5 fill-[#003BE2] stroke-none text-[#003BE2]" />
                </div>
              </div>

              <div className="flex items-center">
                {HAPPY_STUDENT_AVATARS.map((src, i) => (
                  <div
                    key={i}
                    className="-ml-3.5 size-9 overflow-hidden rounded-full first:ml-0"
                  >
                    <Image
                      src={src}
                      alt="Student"
                      width={36}
                      height={36}
                      className="size-full object-cover"
                    />
                  </div>
                ))}
                <div className="relative -ml-3.5 flex size-9 items-center justify-center rounded-full bg-[#242528]">
                  <span className="font-satoshi text-xs font-bold text-[#F5F5F6]">
                    2K+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-144.75 rounded-3xl bg-white p-8 shadow-2xl sm:p-12 lg:p-15.25">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <span className="font-satoshi text-primary-800 text-lg font-normal">
                Create an Account
              </span>
              <h2 className="font-poppins text-3xl font-semibold tracking-[-0.01em] text-[#242528] sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
                Welcome to ByteSpace
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="fullName"
                  className="font-satoshi text-sm font-medium text-[#242528]"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Jamie Davis"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                  className="font-satoshi h-13 w-full rounded-xl border border-[#E5E6E8] bg-white px-6 text-lg text-[#242528] placeholder:text-[#82868E] focus:border-[#003BE2] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-satoshi text-sm font-medium text-[#242528]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="designer@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="font-satoshi h-13 w-full rounded-xl border border-[#E5E6E8] bg-white px-6 text-lg text-[#242528] placeholder:text-[#82868E] focus:border-[#003BE2] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="font-satoshi text-sm font-medium text-[#242528]"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                  className="font-satoshi h-13 w-full rounded-xl border border-[#E5E6E8] bg-white px-6 text-lg text-[#242528] placeholder:text-[#82868E] focus:border-[#003BE2] focus:outline-none"
                />
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  className="bg-secondary-400 hover:bg-secondary-500 font-satoshi h-11.5 rounded-full px-8 text-lg font-medium text-[#242528] shadow-none transition-all duration-200"
                >
                  Continue
                </Button>
              </div>
            </form>

            <div className="flex items-center justify-center gap-1.5 pt-6 text-center">
              <span className="font-satoshi text-base text-[#4B4C53]">
                Already have an account?
              </span>
              <Link
                href="/login"
                className="font-satoshi text-primary-800 text-base font-medium hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </main>

      <div className="h-6" />
    </div>
  );
}
