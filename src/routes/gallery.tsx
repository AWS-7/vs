import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Gallery } from "@/components/site/Gallery";
import { BeforeAfter } from "@/components/site/BeforeAfter";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — VS Electrical Services & Maintenance" },
      { name: "description", content: "View our project gallery showcasing electrical and solar installations across industrial and commercial sites." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <main>
      <PageHeader
        title="Project Gallery"
        subtitle="A visual showcase of our electrical and solar installations across India."
      />
      <Gallery />
      <BeforeAfter />
    </main>
  );
}
