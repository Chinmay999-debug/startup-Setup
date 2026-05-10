import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Dashboard } from "@/components/site/Dashboard";
import { Features } from "@/components/site/Features";
import { AIAssistant } from "@/components/site/AIAssistant";
import { CTA } from "@/components/site/CTA";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { contact } from "@/lib/contact";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/software")({
  component: SoftwarePage,
  head: () => ({
    meta: [
      { title: "Software | Startup Setup · Lead Management & Workflow Platform" },
      {
        name: "description",
        content:
          "Lead tracking, follow-up automation, employee dashboards, WhatsApp & email updates, document tracking, AI assistant, status automation, and role-based access in one operational system.",
      },
      { property: "og:title", content: "Startup Setup Software | One operational system" },
      {
        property: "og:description",
        content: "Leads, follow-ups, workflows, and customer communication, unified.",
      },
      { property: "og:url", content: absoluteUrl("/software") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/software") }],
  }),
});

const capabilities = [
  {
    id: "lead-tracking",
    k: "Lead Tracking",
    d: "Capture every inquiry from forms, ads, WhatsApp, and walk-ins into one pipeline with full history.",
  },
  {
    id: "employee-dashboard",
    k: "Employee Dashboard",
    d: "Each team member sees their leads, today's follow-ups, and pending tasks. Nothing more, nothing less.",
  },
  {
    id: "workflow-management",
    k: "Workflow Management",
    d: "Design stages, owners, and automation rules per business, not a generic CRM template.",
  },
  {
    id: "whatsapp-automation",
    k: "WhatsApp Automation",
    d: "Send approved templates, status updates, and reminders directly from the lead, fully logged.",
  },
  {
    id: "email-updates",
    k: "Email Updates",
    d: "Branded email follow-ups triggered by stage changes, missed callbacks, or scheduled cadences.",
  },
  {
    id: "document-tracking",
    k: "Document Tracking",
    d: "Know exactly which documents are pending per customer and auto-nudge until received.",
  },
  {
    id: "ai-operational-assistant",
    k: "AI Operational Assistant",
    d: "Run operations in natural language. Assign, update, schedule, and notify without clicking menus.",
  },
  {
    id: "status-automation",
    k: "Status Automation",
    d: "Move leads forward automatically when documents arrive, calls happen, or replies come in.",
  },
  {
    id: "role-based-access",
    k: "Role-Based Access",
    d: "Admins, managers, counsellors, and field staff each see exactly what they need to operate.",
  },
];

function SoftwarePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-hero pb-16 pt-28 sm:pb-24 sm:pt-36 lg:pb-32 lg:pt-44 grain">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.32]" />
          <div className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

          <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border hairline bg-card/80 px-3 py-1 text-xs text-muted-foreground shadow-soft backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                The Software
              </span>
            </Reveal>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-7 max-w-4xl text-balance font-display text-[36px] leading-[1.05] tracking-[-0.025em] sm:text-6xl lg:text-[68px]"
            >
              One operational system for leads, follow-ups, and workflows.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="mx-auto mt-6 max-w-2xl text-pretty text-[16px] leading-[1.7] text-muted-foreground sm:text-[17px]"
            >
              Track leads, automate follow-ups, manage team workflows, and centralize WhatsApp &
              email communication with an AI assistant that runs operations alongside your team.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
            >
              <MagneticButton
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elevated sm:w-auto"
              >
                Book Demo →
              </MagneticButton>
              <MagneticButton
                href={contact.whatsappHref}
                strength={5}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border hairline bg-card/80 px-6 py-3.5 text-sm font-medium text-foreground shadow-soft backdrop-blur-sm sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5 text-success" />
                Chat on WhatsApp
              </MagneticButton>
            </motion.div>
          </div>

          {/* Larger dashboard */}
          <div className="relative mx-auto mt-12 max-w-6xl px-5 sm:mt-16 sm:px-6 lg:mt-20">
            <Reveal delay={0.2}>
              <Dashboard />
            </Reveal>
          </div>
        </section>

        {/* Capabilities grid */}
        <section className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  What's inside
                </span>
                <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                  Everything you need to run real operations.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border hairline bg-border sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((c, i) => (
                <Reveal key={c.k} delay={i * 0.04}>
                  <div
                    id={c.id}
                    className="group h-full scroll-mt-28 bg-card p-5 transition-colors duration-500 hover:bg-surface sm:p-7"
                  >
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                      <span className="font-mono">{String(i + 1).padStart(2, "0")}</span>
                      <span className="h-px w-5 bg-border transition-all duration-500 group-hover:w-8 group-hover:bg-accent" />
                    </div>
                    <h3 className="mt-4 font-display text-[22px] leading-tight tracking-tight">
                      {c.k}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Features />
        <AIAssistant />

        {/* Workflow visual */}
        <section id="workflow" className="relative scroll-mt-28 bg-surface py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  How operations flow
                </span>
                <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                  A single workflow from inquiry to closure.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-14 overflow-hidden rounded-2xl border hairline bg-card shadow-elevated">
                <div className="grid grid-cols-1 divide-y hairline md:grid-cols-5 md:divide-x md:divide-y-0">
                  {[
                    { t: "Inquiry", d: "Captured from form, ad, WA, walk-in" },
                    { t: "Assigned", d: "Auto-routed to the right owner" },
                    { t: "Engaged", d: "WhatsApp / call / email logged" },
                    { t: "In progress", d: "Documents, scheduling, reminders" },
                    { t: "Closed", d: "Status synced · team notified" },
                  ].map((s, i) => (
                    <div key={s.t} className="p-6">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Step {i + 1}
                      </div>
                      <div className="mt-2 font-display text-xl tracking-tight">{s.t}</div>
                      <div className="mt-2 text-[13px] text-muted-foreground">{s.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="mt-10 text-center">
              <Link
                to="/industries"
                className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                See how teams in your industry use it →
              </Link>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
