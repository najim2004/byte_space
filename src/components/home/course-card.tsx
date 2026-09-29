import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from "@/components/ui/avatar";
import type { Course } from "@/types/course.types";

const STUDENT_AVATARS = [
  "/assets/images/avatars/avatar-1.png",
  "/assets/images/avatars/avatar-2.png",
  "/assets/images/avatars/avatar-3.png",
  "/assets/images/avatars/avatar-4.png",
];

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="group flex h-96 w-full max-w-93.25 flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200 bg-white p-4 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-2.5 bottom-2.5 flex items-center justify-between gap-1">
          <span className="font-satoshi rounded-full bg-neutral-900/40 px-2.5 py-1 text-[11px] font-normal text-white backdrop-blur-md">
            {course.lessons}
          </span>
          <span className="font-satoshi rounded-full bg-neutral-900/40 px-2.5 py-1 text-[11px] font-normal text-white backdrop-blur-md">
            {course.duration}
          </span>
          <span className="font-satoshi rounded-full bg-neutral-900/40 px-2.5 py-1 text-[11px] font-normal text-white backdrop-blur-md">
            {course.comments}
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-poppins truncate text-lg font-semibold text-neutral-950 sm:text-xl">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 text-sm font-semibold text-neutral-800">
              <span>{course.rating}</span>
              <Image
                src="/assets/svgs/icons/star-gray.svg"
                alt="Star Rating"
                width={24}
                height={24}
                className="size-6 object-contain"
              />
            </div>
          </div>
          <p className="font-satoshi mt-0.5 text-xs text-neutral-500">
            by{" "}
            <span className="text-primary-800 font-medium">
              {course.author}
            </span>
          </p>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="font-satoshi flex items-center gap-1.5 rounded-full bg-neutral-100/90 px-3 py-1.5 text-xs font-medium text-neutral-700">
            <Image
              src="/assets/svgs/icons/lavel-gray.svg"
              alt="Course Level"
              width={13}
              height={14}
              className="h-3.5 w-auto object-contain"
            />
            <span>{course.level}</span>
          </div>

          <AvatarGroup className="-space-x-2.5">
            {STUDENT_AVATARS.map((src, i) => (
              <Avatar key={i} className="size-6.5 border-0 ring-0!">
                <AvatarImage src={src} alt={`Student ${i + 1}`} />
                <AvatarFallback className="text-[10px]">S</AvatarFallback>
              </Avatar>
            ))}
            <Badge
              variant="lime"
              className="relative z-10 flex size-6.5 items-center justify-center rounded-full border-0 p-0 text-[10px] font-bold shadow-xs ring-0!"
            >
              26+
            </Badge>
          </AvatarGroup>
        </div>

        <div className="flex items-baseline pt-1">
          <span className="font-poppins text-primary-800 text-xl font-bold">
            ${course.price}
          </span>
          <span className="font-satoshi ml-1 text-xs font-normal text-neutral-400">
            /lifetime
          </span>
        </div>
      </div>
    </Card>
  );
}
