import { motion } from "framer-motion";
import {
  Bot,
  ScanSearch,
  ShieldCheck,
  Gauge,
  FileText,
  Fuel,
  Webhook,
  FileJson,
  type LucideIcon,
} from "lucide-react";
import { FEATURES, type FeatureItem } from "../lib/constants";

const ICONS: LucideIcon[] = [
  Bot,
  ScanSearch,
  ShieldCheck,
  Gauge,
  FileText,
  Fuel,
  Webhook,
  FileJson,
];

const TAG_STYLES: Record<FeatureItem["tag"], string> = {
  ANALYSIS: "bg-secondary/10 text-secondary",
  SCORING: "bg-accent/10 text-accent",
  API: "bg-primary/10 text-primary",
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">What you get</p>
          <h2 className="section-heading">Everything a first-pass audit needs</h2>
          <p className="mt-4 font-body text-ink-muted">
            One API call runs both analysis engines and returns a report
            structured enough to act on immediately.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="surface-card-interactive group p-5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-canvas text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-secondary/30 group-hover:bg-secondary/10 group-hover:text-secondary">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </div>
                  <span
                    className={`method-badge ${TAG_STYLES[feature.tag]}`}
                  >
                    {feature.tag}
                  </span>
                </div>
                <h3 className="font-display text-[15px] font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-muted">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
