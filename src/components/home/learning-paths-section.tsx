import { LearningPathCard } from "./learning-path-card";
import type { LearningPath } from "@/types/learning-path.types";

const LEARNING_PATHS: LearningPath[] = [
  {
    id: 1,
    title: "Design",
    icon: "/assets/svgs/icons/design-icon.svg",
  },
  {
    id: 2,
    title: "Development",
    icon: "/assets/svgs/icons/development-icon.svg",
  },
  {
    id: 3,
    title: "IT & Software",
    icon: "/assets/svgs/icons/it-&-software-icon.svg",
  },
  {
    id: 4,
    title: "Business",
    icon: "/assets/svgs/icons/business-icon.svg",
  },
  {
    id: 5,
    title: "Marketing",
    icon: "/assets/svgs/icons/marketing-icon.svg",
  },
  {
    id: 6,
    title: "Photography",
    icon: "/assets/svgs/icons/photography-icon.svg",
  },
];

export function LearningPathsSection() {
  return (
    <section className="relative w-full bg-white py-18">
      <div className="mx-auto flex w-full max-w-300 flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-poppins text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-[36px] lg:leading-[1.2]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-satoshi max-w-229.25 text-base leading-relaxed text-neutral-400">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        <div className="mt-12 grid w-full max-w-300 grid-cols-2 gap-6 sm:mt-16 sm:grid-cols-3 sm:gap-8 lg:grid-cols-6 lg:gap-10">
          {LEARNING_PATHS.map((item) => (
            <LearningPathCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
