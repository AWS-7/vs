import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — VS Electrical Services & Maintenance" },
      { name: "description", content: "Learn about VS Electrical Services & Maintenance — premier industrial electrical and solar contracting firm since 2019." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About VS Electrical"
        subtitle="Premier industrial electrical and solar contracting firm delivering certified workmanship since 2019."
      />
      <About />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
