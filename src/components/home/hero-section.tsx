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
    <section className="bg-hero-grid bg-primary-800 relative -mt-26.5 flex min-h-screen w-full flex-col overflow-hidden pt-26.5">
      <div className="my-12.5">
        <h1 className="font-poppins px-4 text-center text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:px-0 lg:text-7xl">
          Get Access to Hundreds <br className="hidden sm:block" /> Courses
          Available
        </h1>
      </div>
      <div className="animate-float pointer-events-none absolute top-1/2 right-[-9%] z-0 w-48 -translate-y-1/2 select-none lg:size-52 xl:right-[-12%] xl:size-72 2xl:right-[-8%] 2xl:size-93">
        <Image
          src="/assets/svgs/shapes/shape-cylinder-yellow.png"
          alt="Yellow Cylinder"
          width={372}
          height={372}
          className="h-auto w-full object-contain"
        />
      </div>
      <div className="relative mt-20 min-h-120 w-full grow lg:mt-24 lg:min-h-132.5">
        <div className="pointer-events-none absolute bottom-0 left-1/2 w-full max-w-162.5 -translate-x-1/2 lg:max-w-300">
          <Image
            src="/assets/svgs/shapes/hero-bg-circle-yellow.svg"
            alt="Yellow Circle Arc"
            width={1149}
            height={442}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-15 h-100 w-115 -translate-x-1/2 lg:h-128 lg:w-144.5">
          <Image
            src="/assets/images/home/hero-student.png"
            alt="ByteSpace Student"
            width={578}
            height={541}
            priority
            className="ml-[6%] h-full w-full object-cover drop-shadow-2xl"
          />
        </div>

        <div className="animate-float-slow pointer-events-none absolute top-[-50%] left-1/2 z-0 w-48 -translate-x-1/2 translate-y-1/2 select-none lg:size-48 xl:top-[-40%] xl:size-64 2xl:top-[-60%] 2xl:size-96.25">
          <Image
            src="/assets/svgs/shapes/shape-zigzag-yellow.png"
            alt="Yellow Coil"
            width={385}
            height={385}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="animate-float-reverse pointer-events-none absolute top-[-5%] left-[10%] z-10 w-32 select-none lg:left-[20%] xl:w-38 2xl:top-[0%] 2xl:w-44">
          <Image
            src="/assets/svgs/shapes/shape-zigzag-gray.png"
            alt="White Zigzag Left"
            width={176}
            height={176}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="animate-float pointer-events-none absolute top-[0%] right-[10%] z-10 w-32 select-none lg:right-[20%] lg:size-30 xl:size-38 2xl:size-47">
          <Image
            src="/assets/svgs/shapes/hero-shape-triangle-white.svg"
            alt="White Pyramid"
            width={350}
            height={350}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="animate-float-slow pointer-events-none absolute bottom-[-3%] left-[5%] z-20 w-44 border select-none lg:size-57.5 xl:left-[-5%] xl:size-72 2xl:left-[11%] 2xl:size-85.5">
          <Image
            src="/assets/svgs/shapes/shape-ring-gray.png"
            alt="White Ring"
            width={400}
            height={400}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="animate-float-reverse pointer-events-none absolute right-[5%] bottom-[0%] z-20 w-48 select-none lg:size-52.5 xl:right-[-4%] xl:size-64 2xl:right-[9.5%] 2xl:size-82.5">
          <Image
            src="/assets/svgs/shapes/shape-zigzag-gray.png"
            alt="White Zigzag Right"
            width={350}
            height={350}
            className="h-auto w-full object-contain"
          />
        </div>

        <Card className="absolute top-[25%] left-[20%] z-30 flex origin-top-left scale-90 gap-1 rounded-2xl border-0 bg-white p-3 shadow-xl transition-transform duration-300 hover:-translate-y-1 lg:top-[30%] lg:scale-100 lg:p-4 xl:left-[20%] 2xl:left-[30.5%]">
          <h4 className="font-satoshi text-sm leading-none font-semibold text-neutral-950 sm:text-base">
            UI/UX Design
          </h4>
          <p className="font-satoshi mt-1 flex items-center gap-1.5 text-xs font-normal whitespace-nowrap text-neutral-400">
            <span>200 Courses</span>
            <span>•</span>
            <span>1000+ Students</span>
          </p>
        </Card>

        <Card className="absolute top-[25%] right-[20%] z-30 flex w-48 origin-top-right scale-90 flex-col gap-2 rounded-2xl border-0 bg-white p-3 shadow-xl transition-transform duration-300 hover:-translate-y-1 lg:top-[29%] lg:w-56 lg:scale-100 lg:p-4 xl:right-[20%] 2xl:right-[30%]">
          <span className="font-satoshi block text-sm leading-none font-medium text-neutral-950">
            Learning Progress
          </span>
          <span className="font-poppins mt-2 mb-5 block text-3xl leading-none font-semibold text-neutral-950 sm:text-4xl lg:text-[48px]">
            55%
          </span>
          <Progress
            value={55}
            className="mt-1 h-2 rounded-full bg-neutral-100"
            indicatorClassName="bg-secondary-400"
          />
        </Card>

        <Card className="absolute bottom-[8%] left-[20%] z-30 flex origin-bottom-left scale-90 gap-2 rounded-2xl border-0 bg-white p-3 shadow-xl transition-transform duration-300 hover:-translate-y-1 lg:bottom-[10%] lg:left-[29%] lg:scale-100 lg:p-4">
          <div className="flex flex-col">
            <span className="font-satoshi text-sm leading-none font-semibold text-neutral-900 sm:text-base">
              Happy Students
            </span>
            <div className="font-satoshi mt-1 flex items-center gap-1 text-xs text-neutral-700">
              <span>4.5 (240)</span>
              <Star className="size-3.5 fill-[#FACC15] text-[#FACC15]" />
            </div>
          </div>

          <AvatarGroup className="mt-1 -space-x-4">
            {avatars.map((src, i) => (
              <Avatar key={i} className="size-7 border-0 ring-0! sm:size-11">
                <AvatarImage src={src} alt={`Student ${i + 1}`} />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
            ))}
            <Badge
              variant="lime"
              className="relative z-10 flex size-7 items-center justify-center rounded-full border-0 p-0 text-xs font-bold shadow-xs ring-0! sm:size-11"
            >
              2K+
            </Badge>
          </AvatarGroup>
        </Card>
      </div>
    </section>
  );
}
