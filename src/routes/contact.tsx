import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — VS Electrical Services & Maintenance" },
      { name: "description", content: "Get in touch with VS Electrical for industrial electrical services, solar installations, and maintenance support across India." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contact Us"
        subtitle="Ready to power your next project? Reach out for quotes, consultations, and emergency support."
      />
      <Contact />
      <FAQ />
    </main>
  );
}
