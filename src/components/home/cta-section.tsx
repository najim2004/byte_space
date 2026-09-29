import Image from "next/image";

export function CtaSection() {
  return (
    <section className="bg-hero-grid bg-primary-800 relative flex min-h-122 w-full items-center justify-center overflow-hidden py-18 lg:py-0">
      <div className="animate-float pointer-events-none absolute -top-40 -left-30 z-0 size-44 -rotate-45 select-none lg:size-96.25">
        <Image
          src="/assets/svgs/shapes/shape-zigzag-yellow.png"
          alt="Yellow Coil"
          width={256}
          height={256}
          className="h-auto w-full rotate-50 object-contain"
        />
      </div>

      <div className="animate-float-slow pointer-events-none absolute top-4 left-[13%] z-0 size-24 rotate-12 select-none lg:size-36">
        <Image
          src="/assets/svgs/shapes/shape-zigzag-gray.png"
          alt="White Zigzag"
          width={144}
          height={144}
          className="h-auto w-full -rotate-15 object-contain"
        />
      </div>

      <div className="animate-float-reverse pointer-events-none absolute bottom-[20%] left-[-2%] z-0 size-28 -rotate-12 select-none lg:size-47">
        <Image
          src="/assets/svgs/shapes/cone-gray.png"
          alt="White Cone"
          width={144}
          height={144}
          className="h-auto w-full rotate-10 object-contain"
        />
      </div>

      <div className="animate-float pointer-events-none absolute bottom-[-30%] left-[5%] z-0 size-44 rotate-45 select-none lg:size-85.5">
        <Image
          src="/assets/svgs/shapes/shape-ring-yellow.png"
          alt="Yellow Ring"
          width={256}
          height={256}
          className="h-auto w-full rotate-130 object-contain"
        />
      </div>

      <div className="animate-float-slow pointer-events-none absolute top-[5%] right-[15%] z-0 size-32 rotate-12 select-none lg:size-47">
        <Image
          src="/assets/svgs/shapes/hero-shape-triangle-yellow.png"
          alt="Yellow Pyramid"
          width={176}
          height={176}
          className="h-auto w-full rotate-[-10deg] object-contain"
        />
      </div>

      <div className="animate-float-reverse pointer-events-none absolute top-[10%] right-[-7%] z-0 size-48 rotate-12 select-none lg:size-92.5">
        <Image
          src="/assets/svgs/shapes/shape-cylinder-gray.png"
          alt="White Cylinder"
          width={256}
          height={256}
          className="h-auto w-full rotate-[-10deg] object-contain"
        />
      </div>

      <div className="animate-float pointer-events-none absolute right-[5%] bottom-[-25%] z-0 size-44 rotate-12 select-none lg:size-82.5">
        <Image
          src="/assets/svgs/shapes/shape-zigzag-yellow.png"
          alt="Yellow Coil"
          width={256}
          height={256}
          className="h-auto w-full rotate-[-60deg] object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-241 flex-col items-center gap-10 px-4 text-center sm:px-6">
        <h2 className="font-poppins text-3xl font-semibold tracking-[-0.01em] text-neutral-50 sm:text-4xl lg:max-w-177.5 lg:text-[44px] lg:leading-[1.2]">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="font-satoshi max-w-241 text-base leading-[1.6] text-neutral-50 sm:text-lg">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button
          type="button"
          className="font-satoshi bg-secondary-400 hover:bg-secondary-500 h-11.5 cursor-pointer rounded-full px-6 text-lg font-medium text-neutral-950 shadow-none transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
}
