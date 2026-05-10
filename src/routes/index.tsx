import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { PainSolution } from "@/components/site/PainSolution";
import { Features } from "@/components/site/Features";
import { Industries } from "@/components/site/Industries";
import { AIAssistant } from "@/components/site/AIAssistant";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Switch } from "@/components/site/Switch";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { absoluteUrl, site } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lead Management & Workflow Software for Businesses | Startup Setup" },
      {
        name: "description",
        content:
          "Startup Setup helps businesses manage leads, automate follow-ups, organize workflows, and centralize customer communication through operational lead management software.",
      },
      { property: "og:title", content: "Lead Management & Workflow Software | Startup Setup" },
      {
        property: "og:description",
        content:
          "One operational system for leads, follow-ups, workflows, and customer communication.",
      },
      { property: "og:url", content: absoluteUrl("/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: site.url,
            email: "contact@startupsetup.in",
            logo: absoluteUrl("/favicon.svg"),
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              telephone: "+91-74250-44822",
              areaServed: "IN",
              availableLanguage: ["en", "hi"],
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: site.url,
            inLanguage: "en-IN",
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: site.name,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "Operational lead management software for businesses, with leads, follow-ups, workflows, and customer communication in one system.",
            url: site.url,
          },
        ]),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <PainSolution />
        <Features />
        <Industries />
        <AIAssistant />
        <CaseStudies />
        <Switch />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
