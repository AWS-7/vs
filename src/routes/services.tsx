import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/site/Services";
import { BrochureCTA } from "@/components/site/BrochureCTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — VS Electrical Services & Maintenance" },
      { name: "description", content: "Comprehensive electrical and solar services: HT/LT cable work, solar installations, transformer maintenance, LED lighting, and more." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Our Services"
        subtitle="From HT cable joints to utility-scale solar erections — certified, end-to-end execution across every electrical discipline."
      />
      <Services />
      <BrochureCTA />
    </main>
  );
}
