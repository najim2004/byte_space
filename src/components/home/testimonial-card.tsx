import Image from "next/image";
import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/types/testimonial.types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="group flex h-full min-h-108 w-full max-w-93.5 flex-col items-start justify-start gap-6 rounded-3xl border-0 bg-white p-6 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative size-20 shrink-0 overflow-hidden rounded-full">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={80}
          height={80}
          className="size-full object-cover"
        />
      </div>

      <div className="flex flex-col items-start">
        <h3 className="font-poppins text-xl leading-[1.2] font-semibold tracking-tight text-black">
          {testimonial.name}
        </h3>
        <span className="font-satoshi text-primary-800 text-lg leading-[1.6] font-normal">
          {testimonial.role}
        </span>
      </div>

      <p className="font-satoshi text-lg leading-[1.6] font-normal text-[#4F4F4F]">
        {testimonial.quote}
      </p>
    </Card>
  );
}
