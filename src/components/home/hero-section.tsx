"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function HeroSection() {
  const avatars = [
    "/assets/images/avatars/avatar-1.png",
    "/assets/images/avatars/avatar-2.png",
    "/assets/images/avatars/avatar-3.png",
    "/assets/images/avatars/avatar-4.png",
    "/assets/images/avatars/avatar-5.png",
    "/assets/images/avatars/avatar-6.png",
  ];

  return (
    <section className="bg-hero-grid -mt-26.5 min-h-screen w-screen overflow-hidden bg-[#003BE2]">
      <div className="relative mx-auto min-h-screen w-full max-w-300 border border-red-500 pt-28">
        <div className="mt-12.5">
          <h1 className="font-poppins text-center text-7xl leading-tight font-semibold tracking-tight text-white">
            Get Access to Hundreds <br /> Courses Available
          </h1>
        </div>

        {/* Big Yellow Arc in the Background */}
        <div className="pointer-events-none absolute -bottom-5 left-1/2 w-full -translate-x-1/2">
          <Image
            src="/assets/svgs/shapes/hero-bg-circle-yellow.svg"
            alt="Yellow Circle Arc"
            width={1149}
            height={442}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Center Student Photo */}
        <div className="pointer-events-none absolute bottom-0 left-1/5 z-15 h-128 w-144.5 translate-x-1/5">
          <Image
            src="/assets/images/home/hero-student.png"
            alt="ByteSpace Student"
            width={578}
            height={541}
            priority
            className="h-full w-full object-cover drop-shadow-2xl"
          />
        </div>

        {/* 3D Shape 1: Top Center Yellow Coil */}
        <div className="animate-float-slow pointer-events-none absolute bottom-[48%] left-1/2 z-0 size-96.25 -translate-x-1/2 translate-y-1/2 select-none">
          <Image
            src="/assets/svgs/shapes/shape-zigzag-yellow.png"
            alt="Yellow Coil"
            width={385}
            height={385}
            priority
            className="h-auto w-full rotate-6 object-contain"
          />
        </div>

        {/* 3D Shape 2: Top Right Yellow Cylinder */}
        <div className="animate-float -rotate- pointer-events-none absolute top-1/2 right-[-13%] z-0 size-93 -translate-y-1/2 select-none">
          <Image
            src="/assets/svgs/shapes/shape-cylinder-yellow.png"
            alt="Yellow Cylinder"
            width={372}
            height={372}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* 3D Shape 3: Left White Zigzag */}
        <div className="animate-float-reverse pointer-events-none absolute top-[14%] left-[4%] z-10 w-20 select-none sm:top-[16%] sm:left-[8%] sm:w-28 lg:left-[11%] lg:w-36">
          <Image
            src="/assets/svgs/shapes/shape-zigzag-gray.svg"
            alt="White Zigzag Left"
            width={350}
            height={350}
            className="h-auto w-full -rotate-12 object-contain"
          />
        </div>

        {/* 3D Shape 4: Middle Right White Pyramid */}
        <div className="animate-float pointer-events-none absolute top-[18%] right-[6%] z-10 w-24 select-none sm:top-[20%] sm:right-[9%] sm:w-36 lg:right-[12%] lg:w-44">
          <Image
            src="/assets/svgs/shapes/hero-shape-triangle-white.svg"
            alt="White Pyramid"
            width={350}
            height={350}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* 3D Shape 5: Bottom Left White Torus */}
        <div className="animate-float-slow pointer-events-none absolute bottom-[2%] left-[-4%] z-20 w-44 select-none sm:bottom-[4%] sm:left-[0%] sm:w-64 lg:left-[3%] lg:w-84">
          <Image
            src="/assets/svgs/shapes/shape-ring-gray.svg"
            alt="White Ring"
            width={400}
            height={400}
            className="h-auto w-full -rotate-12 object-contain"
          />
        </div>

        {/* 3D Shape 6: Bottom Right White Zigzag */}
        <div className="animate-float-reverse pointer-events-none absolute right-[-3%] bottom-[2%] z-20 w-36 select-none sm:right-[1%] sm:bottom-[4%] sm:w-56 lg:right-[4%] lg:w-72">
          <Image
            src="/assets/svgs/shapes/shape-zigzag-gray.svg"
            alt="White Zigzag Right"
            width={350}
            height={350}
            className="h-auto w-full rotate-25 object-contain"
          />
        </div>

        {/* Floating Card 1: UI/UX Design (shadcn Card) */}
        <Card className="absolute top-[26%] left-[6%] z-30 gap-1 rounded-2xl border-0 bg-white px-4 py-3 shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:top-[28%] sm:left-[16%] sm:px-5 sm:py-3.5 lg:top-[30%] lg:left-[22%]">
          <h4 className="font-satoshi text-sm leading-none font-semibold text-neutral-900 sm:text-base">
            UI/UX Design
          </h4>
          <p className="font-satoshi mt-1 flex items-center gap-1.5 text-xs font-normal whitespace-nowrap text-neutral-500">
            <span>200 Courses</span>
            <span>•</span>
            <span>1000+ Students</span>
          </p>
        </Card>

        {/* Floating Card 2: Learning Progress (shadcn Card + Progress) */}
        <Card className="absolute top-[30%] right-[5%] z-30 w-40 gap-2 rounded-2xl border-0 bg-white p-4 shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:top-[32%] sm:right-[14%] sm:w-52 sm:p-5 lg:top-[34%] lg:right-[19%] lg:w-56">
          <span className="font-satoshi block text-xs leading-none font-medium text-neutral-600">
            Learning Progress
          </span>
          <span className="font-poppins block text-3xl leading-none font-bold text-neutral-950 sm:text-4xl">
            55%
          </span>
          <Progress
            value={55}
            className="mt-1 h-2 rounded-full bg-neutral-100"
            indicatorClassName="bg-[#D4FB20]"
          />
        </Card>

        {/* Floating Card 3: Happy Students (shadcn Card + AvatarGroup + Badge) */}
        <Card className="absolute bottom-[8%] left-[5%] z-30 gap-2 rounded-2xl border-0 bg-white p-3.5 shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:bottom-[10%] sm:left-[14%] sm:p-4 lg:bottom-[12%] lg:left-[18%]">
          <div className="flex flex-col">
            <span className="font-satoshi text-sm leading-none font-semibold text-neutral-900 sm:text-base">
              Happy Students
            </span>
            <div className="font-satoshi mt-1 flex items-center gap-1 text-xs text-neutral-700">
              <span>4.5 (240)</span>
              <Star className="size-3.5 fill-[#FACC15] text-[#FACC15]" />
            </div>
          </div>

          <AvatarGroup className="mt-1 -space-x-2.5">
            {avatars.map((src, i) => (
              <Avatar
                key={i}
                className="size-7 border-2 border-white ring-0 sm:size-8"
              >
                <AvatarImage src={src} alt={`Student ${i + 1}`} />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
            ))}
            <Badge
              variant="lime"
              className="flex size-7 items-center justify-center rounded-full border-2 border-white p-0 text-xs font-bold shadow-xs sm:size-8"
            >
              2K+
            </Badge>
          </AvatarGroup>
        </Card>
      </div>
    </section>
  );
}
