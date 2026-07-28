import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import OKXLogo from "./OKXLogo";
import { LINKS } from "../lib/constants";

export default function CTASection() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-line bg-brand-gradient-soft px-8 py-14 text-center sm:px-16"
        >
          <p className="eyebrow relative mb-4">Get started</p>
          <h2 className="relative font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Run your first pre-audit today
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg font-body text-ink-muted">
            One request, one JSON report. No sign-up flow to get in the way
            of trying it against your own contract.
          </p>
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href={LINKS.api} target="_blank" rel="noreferrer" className="btn-primary">
              Try the API
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={LINKS.docs} target="_blank" rel="noreferrer" className="btn-secondary">
              <BookOpen className="h-4 w-4" />
              Read the docs
            </a>
            <a href={LINKS.okx} target="_blank" rel="noreferrer" className="btn-secondary">
              <OKXLogo className="h-4 w-4" />
              View on OKX.AI Marketplace
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
