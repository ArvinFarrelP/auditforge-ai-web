import { motion } from "framer-motion";
import { Github, BookOpen, CheckCircle2 } from "lucide-react";
import OKXLogo from "./OKXLogo";
import { LINKS, SOCIAL_PROOF_ITEMS } from "../lib/constants";

export default function SocialProof() {
  return (
    <section className="relative border-y border-line bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:max-w-md"
          >
            <p className="eyebrow mb-3">Trusted Developer Tool</p>
            <ul className="space-y-2.5">
              {SOCIAL_PROOF_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2.5 font-body text-sm text-ink"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                  {item.label}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href={LINKS.okx}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <OKXLogo className="h-4 w-4" />
              View on OKX.AI Marketplace
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={LINKS.docs}
              target="_blank"
              rel="noreferrer"
              className="btn-tertiary"
            >
              <BookOpen className="h-4 w-4" />
              Swagger Docs
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
