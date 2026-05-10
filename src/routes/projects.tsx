import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Projects } from "@/components/site/Projects";
import { ServiceArea } from "@/components/site/ServiceArea";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — VS Electrical Services & Maintenance" },
      { name: "description", content: "Explore our portfolio of industrial electrical and solar projects across India. 800MW+ solar experience." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main>
      <PageHeader
        title="Our Projects"
        subtitle="Industrial electrical and solar infrastructure delivered with precision, safety, and accountability."
      />
      <Projects />
      <ServiceArea />
    </main>
  );
}
