import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { LINKS, NAV_ITEMS } from "../lib/constants";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/90 backdrop-blur-sm"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="h-8 w-8" />
          <span className="font-display text-[15px] font-bold tracking-tight text-primary">
            AuditForge<span className="text-secondary">AI</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm text-ink-muted transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={LINKS.docs}
            target="_blank"
            rel="noreferrer"
            className="font-body text-sm text-ink-muted transition-colors hover:text-primary"
          >
            Documentation
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="View AuditForge AI on GitHub"
            className="hidden rounded-lg border border-line p-2 text-ink-muted transition-colors hover:border-primary/30 hover:text-primary sm:inline-flex"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={LINKS.api}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-4 py-2 font-body text-sm font-semibold text-white shadow-brand-glow transition-transform hover:-translate-y-0.5"
          >
            Try API
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
