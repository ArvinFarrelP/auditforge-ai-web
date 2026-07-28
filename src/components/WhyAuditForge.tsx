import { motion } from "framer-motion";
import {
  Timer,
  Sparkles,
  ListChecks,
  Code2,
  Plug,
  type LucideIcon,
} from "lucide-react";
import { BENEFITS } from "../lib/constants";

const ICONS: LucideIcon[] = [Timer, Sparkles, ListChecks, Code2, Plug];

export default function WhyAuditForge() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">Why AuditForge AI</p>
          <h2 className="section-heading">
            A safety net before the real audit
          </h2>
          <p className="mt-4 font-body text-ink-muted">
            AuditForge AI doesn't replace a manual audit — it makes sure
            you're not paying an auditor to find the obvious stuff.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {BENEFITS.map((benefit, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.45, delay: (i % 5) * 0.07 }}
                className={`surface-card-interactive group p-5 ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-[15px] font-semibold text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-muted">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
