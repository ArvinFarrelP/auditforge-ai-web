import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { STEPS } from "../lib/constants";

function ConnectorDesktop() {
  return (
    <div className="relative hidden shrink-0 items-center justify-center lg:my-2 lg:flex lg:h-8 lg:w-full">
      <div className="h-px w-full bg-line" />
      <motion.span
        className="absolute h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent"
        animate={{ left: ["0%", "94%"] }}
        style={{ top: "50%" }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          repeatDelay: 0.6,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
      <ArrowRight className="absolute right-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-faint" />
    </div>
  );
}

function ConnectorMobile() {
  return (
    <div className="relative flex shrink-0 items-center justify-center lg:hidden">
      <div className="h-8 w-px bg-line" />
      <motion.span
        className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent"
        animate={{ top: ["0%", "88%"] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          repeatDelay: 0.6,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
      <ArrowDown className="absolute bottom-0 left-1/2 h-3.5 w-3.5 -translate-x-1/2 text-ink-faint" />
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="section-heading">Three steps, one API call</h2>
          <p className="mt-4 font-body text-ink-muted">
            No wallets, no on-chain interaction — just source code in,
            structured report out.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-stretch gap-4 lg:flex-row lg:items-start lg:gap-4">
          {STEPS.map((step, i) => (
            <div
              key={step.index}
              className="flex flex-1 items-center gap-4 lg:flex-col lg:items-stretch"
            >
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="surface-card-interactive flex-1 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent">
                    $ {step.prompt}
                  </span>
                  <span className="font-mono text-xs text-ink-faint">
                    {step.index}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </motion.div>

              {i < STEPS.length - 1 && (
                <>
                  <ConnectorMobile />
                  <ConnectorDesktop />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
