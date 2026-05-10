import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { contact } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border hairline bg-primary px-5 py-14 text-primary-foreground shadow-glow sm:px-8 sm:py-20 md:px-16">
            <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-grid" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

            <div className="relative mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
                Setup in days, not months
              </span>
              <h2 className="mt-6 font-display text-4xl leading-[1.07] tracking-tight sm:text-5xl md:text-6xl">
                Ready to streamline your operations?
              </h2>
              <p className="mt-5 text-pretty text-primary-foreground/70">
                Let's build a workflow system around your business: your stages, your team, your
                communication channels.
              </p>
              <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <MagneticButton
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground shadow-elevated sm:w-auto"
                >
                  Book Demo
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </MagneticButton>
                <MagneticButton
                  href={contact.whatsappHref}
                  strength={5}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-white/[0.10] sm:w-auto"
                >
                  <WhatsAppIcon className="h-5 w-5 text-success" />
                  Chat on WhatsApp
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
