import { TestimonialCard } from "./testimonial-card";
import type { Testimonial } from "@/types/testimonial.types";

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/assets/images/avatars/avatar-3.png",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/assets/images/avatars/avatar-11.png",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/assets/images/avatars/avatar-12.png",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] py-18 lg:py-18.5">
      {/* Figma Ellipse 11 (Top Right Lime Glow) */}
      <div
        className="pointer-events-none absolute -top-60 right-[-10%] h-284.25 w-284.25 rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
        }}
      />

      {/* Figma Ellipse 12 (Top Center Lime Glow) */}
      <div
        className="pointer-events-none absolute -top-34.5 left-[30%] h-168 w-2xl rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)",
        }}
      />

      {/* Figma Ellipse 8 (Bottom Left Blue Glow) */}
      <div
        className="pointer-events-none absolute top-37.25 left-[-30%] h-284.25 w-284.25 rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)",
        }}
      />

      {/* Main Content Container (Frame / Content) */}
      <div className="relative z-10 mx-auto flex w-full max-w-301 flex-col gap-18 px-4 sm:px-6 lg:px-0">
        {/* Text Container */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end lg:gap-10.75">
          {/* Title */}
          <h2 className="font-poppins text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:w-144.25 lg:text-[44px] lg:leading-[1.2]">
            Discover What Our Community Is Saying
          </h2>
          {/* Subtitle / Paragraph */}
          <p className="font-satoshi text-base leading-[1.6] text-[#4F4F4F] sm:text-lg lg:w-145">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonials Cards Row (Testimonial_Card) */}
        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10.25">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
