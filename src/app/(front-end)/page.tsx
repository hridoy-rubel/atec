import { AboutSection } from "@/components/sections/about-section";
import { EventsSection } from "@/components/sections/events-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import GallerySection from "@/components/sections/gallery-section";

export default function LandingPage(): JSX.Element {
  return (
    <div className="grid w-full grid-cols-1 items-center justify-center gap-16 md:gap-24 lg:gap-32">
      <HeroSection />
      <GallerySection />
      <EventsSection />
      <AboutSection />
      <TestimonialsSection />
    </div>
  );
}
