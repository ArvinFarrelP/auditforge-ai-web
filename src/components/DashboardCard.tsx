import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, Fuel, Gauge } from "lucide-react";

const SCORE = 84;
const SCORE_COLOR = "#49CC90"; // success — score in the "Low Risk" band
const CIRCUMFERENCE = 2 * Math.PI * 42;

export default function DashboardCard() {
  return (
    <div className="surface-card overflow-hidden rounded-2xl">
      {/* header bar, styled like a Swagger response block */}
      <div className="flex items-center gap-3 border-b border-line bg-canvas px-5 py-3.5">
        <span className="method-badge bg-secondary/10 text-secondary">POST</span>
        <span className="font-mono text-[13px] text-ink-muted">/audit</span>
        <span className="ml-auto method-badge bg-success/10 text-success">
          200 OK
        </span>
      </div>

      <div className="grid grid-cols-2 gap-px bg-line">
        {/* Security score with animated ring */}
        <div className="col-span-2 flex items-center gap-5 bg-surface px-6 py-6 sm:col-span-1">
          <div className="relative h-24 w-24 shrink-0">
            <svg viewBox="0 0 100 100" className="h-24 w-24 -rotate-90">
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="#E6ECF3"
                strokeWidth="8"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke={SCORE_COLOR}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                initial={{ strokeDashoffset: CIRCUMFERENCE }}
                animate={{
                  strokeDashoffset: CIRCUMFERENCE * (1 - SCORE / 100),
                }}
                transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-2xl font-bold text-ink">
                {SCORE}
              </span>
              <span className="font-mono text-[10px] text-ink-faint">/ 100</span>
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
              Security Score
            </p>
            <p className="mt-1 font-display text-sm font-semibold text-ink">
              Grade B
            </p>
          </div>
        </div>

        {/* Risk */}
        <div className="bg-surface px-6 py-6">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-warning/10 text-warning">
            <Gauge className="h-[18px] w-[18px]" strokeWidth={1.9} />
          </div>
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
            Risk
          </p>
          <p className="mt-1 font-display text-lg font-semibold text-warning">
            Medium
          </p>
        </div>

        {/* Issues found */}
        <div className="bg-surface px-6 py-6">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-danger/10 text-danger">
            <AlertTriangle className="h-[18px] w-[18px]" strokeWidth={1.9} />
          </div>
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
            Issues Found
          </p>
          <p className="mt-1 font-display text-lg font-semibold text-ink">
            3 <span className="text-sm font-normal text-ink-faint">findings</span>
          </p>
        </div>

        {/* Gas optimization */}
        <div className="bg-surface px-6 py-6">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Fuel className="h-[18px] w-[18px]" strokeWidth={1.9} />
          </div>
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
            Gas Optimization
          </p>
          <p className="mt-1 font-display text-lg font-semibold text-ink">
            2 <span className="text-sm font-normal text-ink-faint">suggestions</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-line bg-canvas px-5 py-3">
        <ShieldCheck className="h-3.5 w-3.5 text-accent" />
        <span className="font-mono text-[11px] text-ink-faint">
          rule-based scan + Fireworks AI review
        </span>
      </div>
    </div>
  );
}
