import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { contact } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

const items = [
  { label: "Home", to: "/" as const },
  { label: "Software", to: "/software" as const },
  { label: "Industries", to: "/industries" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border hairline px-3 py-2.5 transition-all duration-500 ${
          scrolled || open
          ? "bg-white/85 backdrop-blur-xl border border-black/5 shadow-xl"
          : "bg-white/70 backdrop-blur-lg border border-black/5 shadow-lg"
        }`}
      >
        <Link to="/" className="group flex items-center gap-2 pl-2">
          <img
            src={`${import.meta.env.BASE_URL}ss-logo-black.png`}
            alt=""
            className="h-6 w-6 shrink-0 object-contain transition-transform duration-300 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
          <span className="text-[15px] font-semibold leading-none tracking-tight text-foreground">
            Startup Setup
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {items.map((it) => (
            <li key={it.label}>
              <Link
                to={it.to}
                activeProps={{ className: "text-foreground" }}
                className="group relative rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {it.label}
                <span className="pointer-events-none absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-foreground/40 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <Link
            to="/contact"
            className="btn-premium group relative hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft sm:inline-flex"
          >
            Book Demo
            <span className="grid h-4 w-4 place-items-center transition-transform duration-500 group-hover:translate-x-0.5">
              →
            </span>
          </Link>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full border hairline bg-card/80 text-foreground md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-px w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-3 right-3 top-[68px] z-40 overflow-hidden rounded-2xl border hairline glass shadow-elevated md:hidden"
          >
            <ul className="divide-y hairline">
              {items.map((it) => (
                <li key={it.label}>
                  <Link
                    to={it.to}
                    activeProps={{ className: "text-foreground bg-surface" }}
                    className="flex items-center justify-between px-5 py-4 text-[15px] text-muted-foreground"
                  >
                    {it.label}
                    <span className="text-muted-foreground/60">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-2 border-t hairline p-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
              >
                Book Demo →
              </Link>
              <a
                href={contact.whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border hairline bg-card px-4 py-3 text-sm font-medium text-foreground"
              >
                <WhatsAppIcon className="h-4 w-4 text-success" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
