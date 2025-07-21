import PageLayout from "@/components/layout/page-layout";
import { ThemeProvider } from "@/components/layout/theme-provider";
import AboutMeSection from "@/components/sections/about-me-section";
import { ContactInfoSection } from "@/components/sections/contact-info-section";
import FeaturedProjectsSection from "@/components/sections/featured-projects";
import HeroSection from "@/components/sections/hero-section";
import TechnologiesSection from "@/components/sections/technologies-section";

export default function Home() {
  return (
    <div className="h-full">
      <ThemeProvider attribute={"class"} defaultTheme="dark">
        <PageLayout>
          <HeroSection />
          <AboutMeSection />
          <TechnologiesSection />
          <FeaturedProjectsSection />
          <ContactInfoSection />
        </PageLayout>
      </ThemeProvider>
    </div>
  );
}
