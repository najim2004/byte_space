import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { SponsorSection } from "@/components/home/sponsor-section";
import { CoursesSection } from "@/components/home/courses-section";
import { LearningPathsSection } from "@/components/home/learning-paths-section";
import { FeaturesSection } from "@/components/home/features-section";
import { CtaSection } from "@/components/home/cta-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SponsorSection />
      <CoursesSection />
      <LearningPathsSection />
      <FeaturesSection />
      <CtaSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
