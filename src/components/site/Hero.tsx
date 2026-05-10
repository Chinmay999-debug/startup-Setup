import { motion } from "framer-motion";
import { Dashboard } from "./Dashboard";
import { MagneticButton } from "./MagneticButton";
import { contact } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero pb-16 pt-28 sm:pb-28 sm:pt-36 lg:pb-40 lg:pt-44 grain">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.32]" />
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 left-[-15%] h-[420px] w-[420px] rounded-full bg-primary/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:gap-20 sm:px-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6 lg:pt-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border hairline bg-card/80 px-3 py-1 text-xs text-muted-foreground shadow-soft backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            Lead Management & Workflow Software
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-balance font-display text-[38px] leading-[1.04] tracking-[-0.025em] text-foreground sm:text-6xl lg:text-[60px] xl:text-[72px]"
          >
            Stop managing leads through
            <span className="text-muted-foreground/80"> spreadsheets </span>
            and
            <span className="relative whitespace-nowrap">
              {" "}
              WhatsApp chats
              <svg
                className="absolute -bottom-1 left-0 h-2 w-full text-accent"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 5 Q 50 1 100 4 T 198 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-6 max-w-xl text-pretty text-[16px] leading-[1.65] text-muted-foreground sm:mt-7 sm:text-[17px] sm:leading-[1.7]"
          >
            Startup Setup helps businesses manage leads, automate follow-ups, assign teams, track
            workflows, and centralize customer communication from one operational system.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <MagneticButton
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elevated sm:w-auto"
            >
              Book Demo
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </MagneticButton>
            <MagneticButton
              href={contact.whatsappHref}
              strength={5}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border hairline bg-card/80 px-6 py-3.5 text-sm font-medium text-foreground shadow-soft backdrop-blur-sm hover:border-foreground/25 sm:w-auto"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-success/15 text-success">
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </span>
              Chat on WhatsApp
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-muted-foreground sm:mt-14 sm:gap-x-8"
          >
            {[
              "WhatsApp Updates",
              "Email Notifications",
              "AI Task Assistant",
              "Custom Workflows",
            ].map((label) => (
              <span key={label} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-success" /> {label}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-6 lg:-mr-4">
          <Dashboard />
        </div>
      </div>
    </section>
  );
}
