import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { TopBar } from "@/components/site/TopBar";
import { Loader } from "@/components/site/Loader";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Projects } from "@/components/site/Projects";
import { Gallery } from "@/components/site/Gallery";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ServiceArea } from "@/components/site/ServiceArea";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingButtons } from "@/components/site/FloatingButtons";
import { CursorGlow } from "@/components/site/CursorGlow";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { FAQ } from "@/components/site/FAQ";
import { BrochureCTA } from "@/components/site/BrochureCTA";
import { HiddenSEO } from "@/components/site/HiddenSEO";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VS Electrical Services & Maintenance — Industrial, Commercial & Solar" },
      { name: "description", content: "Trusted industrial electrical, commercial, solar and HT/LT cable services since 2019. 800MW+ of solar project experience across India." },
      { property: "og:title", content: "VS Electrical Services & Maintenance" },
      { property: "og:description", content: "Industrial • Commercial • Solar • Maintenance. Engineered electrical execution since 2019." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <ScrollProgress />
      <CursorGlow />
      <HiddenSEO />
      <Loader />
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <LogoMarquee />
      <Gallery />
      <BeforeAfter />
      <ServiceArea />
      <Testimonials />
      <FAQ />
      <Contact />
      <BrochureCTA />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
