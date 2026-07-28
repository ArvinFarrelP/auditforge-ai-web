import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { Bot, Globe } from "lucide-react";
import { TECH_STACK } from "../lib/constants";
import {
  PythonIcon,
  FastAPIIcon,
  DockerIcon,
  SolidityIcon,
  OpenAPIIcon,
} from "./TechIcons";

const ICONS: ComponentType<{ className?: string }>[] = [
  PythonIcon,
  FastAPIIcon,
  Bot,
  SolidityIcon,
  DockerIcon,
  OpenAPIIcon,
  Globe,
];

export default function TechStack() {
  return (
    <section id="stack" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">Under the hood</p>
          <h2 className="section-heading">Built on a boring, reliable stack</h2>
          <p className="mt-4 font-body text-ink-muted">
            Nothing exotic — a typed API service, a proven LLM provider, and
            containerized deployment.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {TECH_STACK.map((tech, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.4, delay: (i % 7) * 0.05 }}
                className="flex items-center gap-2.5 rounded-full border border-line bg-surface py-2.5 pl-3 pr-5 shadow-card transition-all duration-200 hover:border-secondary/40 hover:shadow-card-hover"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-canvas">
                  <Icon className="h-[16px] w-[16px]" />
                </span>
                <div className="leading-tight">
                  <p className="font-display text-[13px] font-semibold text-ink">
                    {tech.name}
                  </p>
                  <p className="font-mono text-[10px] text-ink-faint">
                    {tech.role}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
