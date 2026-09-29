import Image from "next/image";
import { Check } from "lucide-react";

const STUDENT_AVATARS_FEATURE_1 = [
  "/assets/images/avatars/avatar-1.png",
  "/assets/images/avatars/avatar-2.png",
  "/assets/images/avatars/avatar-3.png",
  "/assets/images/avatars/avatar-4.png",
];

const STUDENT_AVATARS_FEATURE_2 = [
  "/assets/images/avatars/avatar-1.png",
  "/assets/images/avatars/avatar-2.png",
  "/assets/images/avatars/avatar-3.png",
  "/assets/images/avatars/avatar-4.png",
  "/assets/images/avatars/avatar-5.png",
  "/assets/images/avatars/avatar-6.png",
  "/assets/images/avatars/avatar-7.png",
];

const CREATOR_CHECKLIST = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export function FeaturesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] py-20 lg:py-30">
      <div
        className="pointer-events-none absolute -top-116.5 -left-38 h-284.25 w-284.25 rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute -top-114.5 left-202.75 h-284.25 w-284.25 rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.08) 0%, rgba(0, 59, 226, 0.0184) 53%, rgba(0, 59, 226, 0.0048) 75%, rgba(0, 59, 226, 0) 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute top-45.75 -left-127 h-284.25 w-284.25 rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.16) 0%, rgba(0, 59, 226, 0.0368) 53%, rgba(0, 59, 226, 0.0096) 75%, rgba(0, 59, 226, 0) 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute top-197 left-180.5 h-284.25 w-284.25 rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute top-236.5 -left-71.75 h-168 w-2xl rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-314.5 flex-col gap-18 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-15.75">
          <div className="flex w-full max-w-143.5 flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="font-poppins text-3xl font-semibold tracking-[-0.01em] text-neutral-950 sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
                Your Path to Professional <br className="hidden sm:inline" />
                Growth Starts Here!
              </h2>
              <p className="font-satoshi max-w-119.25 text-base leading-[1.6] text-neutral-700 sm:text-lg">
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>
            </div>

            <div className="flex items-end gap-8 sm:gap-14">
              <div className="flex flex-col items-start">
                <span className="font-poppins text-primary-800 text-3xl font-medium tracking-[-0.01em] sm:text-4xl lg:text-[36px] lg:leading-11">
                  12K
                </span>
                <span className="font-satoshi text-base leading-[1.6] text-neutral-700 sm:text-lg">
                  Students
                </span>
              </div>

              <div className="flex flex-col items-start">
                <span className="font-poppins text-primary-800 text-3xl font-medium tracking-[-0.01em] sm:text-4xl lg:text-[36px] lg:leading-11">
                  70+
                </span>
                <span className="font-satoshi text-base leading-[1.6] text-neutral-700 sm:text-lg">
                  Courses
                </span>
              </div>

              <div className="flex flex-col items-start">
                <span className="font-poppins text-primary-800 text-3xl font-medium tracking-[-0.01em] sm:text-4xl lg:text-[36px] lg:leading-11">
                  16
                </span>
                <span className="font-satoshi text-base leading-[1.6] text-neutral-700 sm:text-lg">
                  Creators
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex h-120 w-full max-w-125 items-center justify-center sm:h-138 sm:max-w-155.25">
            <div className="animate-float pointer-events-none absolute top-[10%] right-[5%] z-40 w-45 select-none sm:right-[-5%] sm:size-53.75">
              <Image
                src="/assets/svgs/shapes/shape-zigzag-yellow.png"
                alt="Yellow Coil"
                width={215}
                height={215}
                className="h-auto w-full rotate-130 object-contain"
              />
            </div>

            <div className="absolute top-0 left-0 z-10 hidden w-93.25 flex-col rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm md:flex">
              <div className="relative h-48.75 w-full overflow-hidden rounded-[12px] bg-neutral-100">
                <Image
                  src="/assets/images/courses/course-1.avif"
                  alt="Learn Figma from Basic"
                  fill
                  sizes="341px"
                  className="object-cover"
                />
                <div className="absolute top-37.5 left-3 flex items-center gap-3">
                  <span className="font-satoshi rounded-3xl bg-[#F6F6F6]/60 px-3 py-1.5 text-xs font-medium text-[#4F4F4F] backdrop-blur-xs">
                    17 Lessons
                  </span>
                  <span className="font-satoshi rounded-3xl bg-[#F6F6F6]/60 px-3 py-1.5 text-xs font-medium text-[#4F4F4F] backdrop-blur-xs">
                    2 hours 16 mins
                  </span>
                  <span className="font-satoshi rounded-3xl bg-[#F6F6F6]/60 px-3 py-1.5 text-xs font-medium text-[#4F4F4F] backdrop-blur-xs">
                    59 Comments
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <h3 className="font-poppins text-xl font-semibold tracking-[-0.01em] text-black">
                      Learn Figma from Basic
                    </h3>
                    <span className="font-satoshi text-xs text-[#4F4F4F]">
                      by purepearl studio
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-satoshi text-lg font-medium text-[#4F4F4F]">
                      4.5
                    </span>
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
                  <div className="font-satoshi flex items-center gap-1 rounded-3xl bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-700">
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
                    {STUDENT_AVATARS_FEATURE_1.map((src, i) => (
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

            <div className="relative top-15 -right-10 z-20 h-120 w-112.5 sm:h-135 sm:w-144.25">
              <Image
                src="/assets/images/home/feature-student-1.svg"
                alt="Student Learning"
                fill
                sizes="(max-width: 768px) 100vw, 577px"
                className="object-contain"
              />
            </div>

            <div className="absolute top-50 right-5 z-30 flex w-50 flex-col gap-2 rounded-2xl bg-white p-4 shadow-xl backdrop-blur-[10px] sm:w-58">
              <span className="font-satoshi text-sm font-medium text-neutral-950">
                Learning Progress
              </span>
              <span className="font-poppins text-3xl font-semibold tracking-[-0.01em] text-neutral-950 sm:text-[48px] sm:leading-[1.2]">
                55%
              </span>
              <div className="relative h-2 w-full overflow-hidden rounded-3xl bg-[#F6F6F6]">
                <div className="bg-secondary-400 h-full w-[55%] rounded-3xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-19.75">
          <div className="relative order-2 flex h-125 w-full max-w-125 items-center justify-center sm:h-149 sm:max-w-135.25 lg:order-1">
            <div className="animate-float-slow pointer-events-none absolute top-[19%] right-[10%] z-40 w-45 select-none sm:w-53.75">
              <Image
                src="/assets/svgs/shapes/shape-zigzag-yellow.png"
                alt="Yellow Coil"
                width={215}
                height={215}
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="bg-primary-800 absolute top-11 left-0 z-30 flex w-47.5 flex-col gap-2 rounded-2xl p-4 shadow-xl backdrop-blur-[10px] sm:w-58">
              <div className="flex flex-col">
                <span className="font-satoshi text-sm font-medium text-neutral-50 sm:text-base">
                  Total Revenue
                </span>
                <span className="font-satoshi text-[10px] text-neutral-50">
                  July 1-28
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-poppins text-xl font-semibold tracking-[-0.01em] text-neutral-50 sm:text-2xl">
                  $120.29
                </span>
                <span className="font-satoshi bg-secondary-500 rounded-3xl px-2 py-0.5 text-[10px] font-medium text-neutral-950">
                  +12$
                </span>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-3xl bg-white">
                <div className="bg-secondary-400 h-full w-[56%] rounded-3xl" />
              </div>
            </div>

            <div className="bg-primary-800 absolute top-48.5 left-0 z-30 flex w-33.5 flex-col gap-2 rounded-2xl p-4 shadow-xl backdrop-blur-[10px]">
              <div className="flex flex-col">
                <span className="font-satoshi text-sm font-medium text-neutral-50 sm:text-base">
                  Year to Date
                </span>
                <span className="font-satoshi text-[10px] text-neutral-50">
                  2023
                </span>
              </div>
              <span className="font-poppins text-lg font-semibold tracking-[-0.01em] text-neutral-50 sm:text-2xl">
                $1,200.38
              </span>
              <div>
                <span className="font-satoshi bg-secondary-500 inline-block rounded-3xl px-2 py-0.5 text-[10px] font-medium text-neutral-950">
                  +12$
                </span>
              </div>
            </div>

            <div className="relative -bottom-10 z-30 h-125 w-95 sm:h-149 sm:w-135.25">
              <Image
                src="/assets/images/home/feature-student-2.png"
                alt="Student Creator"
                fill
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute right-0 bottom-25 z-30 flex w-57.5 flex-col gap-2 rounded-2xl bg-white p-4 shadow-xl backdrop-blur-[10px] sm:w-64.5">
              <div className="flex flex-col">
                <span className="font-satoshi text-sm font-medium text-neutral-950 sm:text-base">
                  Happy Students
                </span>
                <div className="flex items-center gap-1">
                  <span className="font-satoshi text-[10px] font-bold text-neutral-950">
                    4.5 (240)
                  </span>
                  <Image
                    src="/assets/svgs/icons/star-yellow.svg"
                    alt="Star"
                    width={14}
                    height={14}
                    className="size-3.5 object-contain"
                  />
                </div>
              </div>

              <div className="flex items-center">
                {STUDENT_AVATARS_FEATURE_2.map((src, i) => (
                  <div
                    key={i}
                    className="-ml-3.5 size-9 overflow-hidden rounded-full first:ml-0"
                  >
                    <Image
                      src={src}
                      alt="Student"
                      width={43}
                      height={43}
                      className="size-full object-cover"
                    />
                  </div>
                ))}
                <div className="bg-secondary-400 relative -ml-3.5 flex size-9 items-center justify-center rounded-full">
                  <span className="font-satoshi text-xs font-bold text-neutral-950">
                    2K+
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 flex w-full max-w-145 flex-col gap-10 lg:order-2">
            <div className="flex flex-col gap-4">
              <h2 className="font-poppins text-3xl font-semibold tracking-[-0.01em] text-neutral-950 sm:text-4xl lg:w-97.75 lg:text-[44px] lg:leading-[1.2]">
                Create & Manage <br className="hidden sm:inline" />
                Courses Easily.
              </h2>
              <p className="font-satoshi text-base leading-7 font-bold text-neutral-950 sm:text-lg lg:w-143.5">
                ByteSpace supports individuals or entities in the creation,
                publication, and administration of educational courses.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {CREATOR_CHECKLIST.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="bg-primary-800 flex size-6 shrink-0 items-center justify-center rounded-full text-white">
                    <Check className="size-3.5 stroke-3" />
                  </div>
                  <span className="font-satoshi text-lg leading-[1.2] font-medium text-neutral-950">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
