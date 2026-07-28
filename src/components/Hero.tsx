import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, CheckCircle2 } from "lucide-react";
import DashboardCard from "./DashboardCard";
import Logo from "./Logo";
import OKXLogo from "./OKXLogo";
import { LINKS, TRUST_BADGES, POWERED_BY } from "../lib/constants";

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-3"
          >
            <Logo className="h-10 w-10" />
            <span className="eyebrow">AI-assisted pre-audit for Solidity</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.15rem]"
          >
            AI-assisted Smart Contract{" "}
            <span className="text-secondary">Security Copilot</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink-muted"
          >
            AI-powered Solidity smart contract pre-audit platform combining
            rule-based analysis and Fireworks AI to help developers identify
            vulnerabilities before a comprehensive manual audit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={LINKS.api}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Try the API
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={LINKS.docs}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <BookOpen className="h-4 w-4" />
              Documentation
            </a>
          </motion.div>

          {/* Trust badge cluster — verifiable, not marketing copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-6 flex flex-wrap items-center gap-2"
          >
            <a
              href={LINKS.okx}
              target="_blank"
              rel="noreferrer"
              className="trust-pill hover:border-success/50 hover:text-ink"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="text-ink-faint">Listed on</span>
              <OKXLogo className="h-4 w-4" />
              <span>OKX.AI Marketplace</span>
            </a>
            {TRUST_BADGES.slice(1).map((badge) => (
              <span key={badge.label} className="trust-pill">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                {badge.label}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1.5 font-mono text-xs text-ink-faint"
          >
            <span className="uppercase tracking-wide">Powered by</span>
            {POWERED_BY.map((tech, i) => (
              <span key={tech} className="flex items-center gap-2">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-line" />}
                <span className="text-ink-muted">{tech}</span>
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <DashboardCard />
        </motion.div>
      </div>
    </section>
  );
}
