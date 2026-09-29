import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { SponsorSection } from "@/components/home/sponsor-section";
import { CoursesSection } from "@/components/home/courses-section";
import { LearningPathsSection } from "@/components/home/learning-paths-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SponsorSection />
      <CoursesSection />
      <LearningPathsSection />
    </main>
  );
}
