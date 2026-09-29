import Image from "next/image";
import { Card } from "@/components/ui/card";
import type { LearningPath } from "@/types/learning-path.types";

interface LearningPathCardProps {
  item: LearningPath;
}

export function LearningPathCard({ item }: LearningPathCardProps) {
  return (
    <Card className="group flex aspect-square w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border border-neutral-200 bg-white p-4 shadow-none transition-all duration-300 select-none hover:-translate-y-1 hover:shadow-md">
      <div className="relative flex size-15 items-center justify-center">
        <Image
          src={item.icon}
          alt={item.title}
          width={60}
          height={60}
          className="size-15 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <span className="font-satoshi text-center text-xl leading-[1.2] font-medium text-neutral-950">
        {item.title}
      </span>
    </Card>
  );
}
