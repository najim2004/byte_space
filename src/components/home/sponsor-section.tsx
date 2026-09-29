import Image from "next/image";

const SPONSORS = [
  {
    name: "Logoipsum 1",
    logo: "/assets/svgs/logos/company-logo-1.svg",
    width: 167,
    height: 41,
  },
  {
    name: "Logoipsum 2",
    logo: "/assets/svgs/logos/company-logo-2.svg",
    width: 168,
    height: 41,
  },
  {
    name: "Logoipsum 3",
    logo: "/assets/svgs/logos/company-logo-3.svg",
    width: 167,
    height: 41,
  },
  {
    name: "Logoipsum 4",
    logo: "/assets/svgs/logos/company-logo-4.svg",
    width: 167,
    height: 41,
  },
  {
    name: "Logoipsum 5",
    logo: "/assets/svgs/logos/company-logo-5.svg",
    width: 167,
    height: 41,
  },
];

export function SponsorSection() {
  return (
    <section className="relative flex w-full items-center justify-center bg-neutral-50 py-12 md:h-50.5 md:py-0">
      <div className="mx-auto w-full max-w-300 px-6 md:px-12">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:justify-between lg:gap-16">
          {SPONSORS.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={sponsor.width}
                height={sponsor.height}
                className="h-8 w-auto object-contain opacity-90 transition-opacity hover:opacity-100 md:h-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
