import { ThemeProvider } from "@/components/layout/theme-provider";
import AboutMeSection from "@/components/sections/about-me-section";
import { ContactInfoSection } from "@/components/sections/contact-info-section";
import FeaturedProjectsSection from "@/components/sections/featured-projects";
import HeroSection from "@/components/sections/hero-section";
import TechnologiesSection from "@/components/sections/technologies-section";

export default function Home() {
  return (
    <>
      <ThemeProvider attribute={"class"} defaultTheme="dark">
          <HeroSection />
          <AboutMeSection />
          <TechnologiesSection />
          <FeaturedProjectsSection />
          <ContactInfoSection />
      </ThemeProvider>
    </>
  );
}
