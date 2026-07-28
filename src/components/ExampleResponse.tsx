import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

type Token = { text: string; cls: string };
type Row = Token[];

const KEY = "text-secondary";
const STR = "text-success";
const NUM = "text-accent";
const PUNCT = "text-ink-faint";
const SEV = "text-warning";

const ROWS: Row[] = [
  [{ text: "{", cls: PUNCT }],
  [
    { text: "  ", cls: PUNCT },
    { text: '"project"', cls: KEY },
    { text: ": ", cls: PUNCT },
    { text: '"AuditForge AI"', cls: STR },
    { text: ",", cls: PUNCT },
  ],
  [
    { text: "  ", cls: PUNCT },
    { text: '"security_score"', cls: KEY },
    { text: ": ", cls: PUNCT },
    { text: "84", cls: NUM },
    { text: ",", cls: PUNCT },
  ],
  [
    { text: "  ", cls: PUNCT },
    { text: '"risk"', cls: KEY },
    { text: ": ", cls: PUNCT },
    { text: '"Medium Risk"', cls: STR },
    { text: ",", cls: PUNCT },
  ],
  [
    { text: "  ", cls: PUNCT },
    { text: '"summary"', cls: KEY },
    { text: ": ", cls: PUNCT },
    { text: '"Withdrawal logic performs an external call before…"', cls: STR },
    { text: ",", cls: PUNCT },
  ],
  [
    { text: "  ", cls: PUNCT },
    { text: '"issues"', cls: KEY },
    { text: ": [", cls: PUNCT },
  ],
  [{ text: "    {", cls: PUNCT }],
  [
    { text: "      ", cls: PUNCT },
    { text: '"title"', cls: KEY },
    { text: ": ", cls: PUNCT },
    { text: '"Reentrancy on withdraw()"', cls: STR },
    { text: ",", cls: PUNCT },
  ],
  [
    { text: "      ", cls: PUNCT },
    { text: '"severity"', cls: KEY },
    { text: ": ", cls: PUNCT },
    { text: '"High"', cls: SEV },
  ],
  [{ text: "    }", cls: PUNCT }],
  [{ text: "  ],", cls: PUNCT }],
  [
    { text: "  ", cls: PUNCT },
    { text: '"gas_optimizations"', cls: KEY },
    { text: ": [", cls: PUNCT },
    { text: "…", cls: PUNCT },
    { text: "]", cls: PUNCT },
  ],
  [{ text: "}", cls: PUNCT }],
];

const COPY_PAYLOAD = JSON.stringify(
  {
    project: "AuditForge AI",
    version: "1.1.0",
    security_score: 84,
    security_grade: "B",
    risk: "Medium Risk",
    summary:
      "Withdrawal logic performs an external call before updating internal balances.",
    issues: [
      {
        title: "Reentrancy on withdraw()",
        severity: "High",
        swc: { id: "SWC-107", name: "Reentrancy" },
        description:
          "An external call is followed by a state write in the same function, without an apparent reentrancy guard.",
        recommendation:
          "Apply checks-effects-interactions: update balances before making the external call.",
      },
    ],
    gas_optimizations: [
      "Cache balances[msg.sender] in a local variable to avoid repeated SLOADs.",
    ],
    generated_at: "2026-07-28T09:15:00+00:00",
  },
  null,
  2
);

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fail silently.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy example response JSON"
      className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] font-medium text-ink-muted transition-colors duration-200 hover:border-secondary/40 hover:text-secondary"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-success" />
          <span className="text-success">Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          Copy
        </>
      )}
    </button>
  );
}

export default function ExampleResponse() {
  return (
    <section id="example" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-4">The response</p>
            <h2 className="section-heading">
              A report your tools can actually parse
            </h2>
            <p className="mt-4 max-w-md font-body text-ink-muted">
              Every audit resolves to structured JSON — a score, a risk
              level, an AI-written summary, and a list of findings with
              severity attached. Pipe it into CI, a Slack bot, or your own
              dashboard.
            </p>
            <ul className="mt-8 space-y-3 font-body text-sm text-ink-muted">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Stable schema, versioned via OpenAPI
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Severity levels map directly to SWC identifiers
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Designed to be rendered or machine-read
              </li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="surface-card overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b border-line bg-canvas px-5 py-3">
              <span className="method-badge bg-secondary/10 text-secondary">
                POST
              </span>
              <span className="font-mono text-[13px] text-ink-muted">/audit</span>
              <span className="method-badge bg-success/10 text-success">
                200 OK
              </span>
              <span className="ml-auto">
                <CopyButton text={COPY_PAYLOAD} />
              </span>
            </div>
            <div className="flex items-center border-b border-line px-5 py-2">
              <span className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                Example Value
              </span>
            </div>
            <pre className="overflow-x-auto bg-canvas/60 px-5 py-5 font-mono text-[13px] leading-[1.85]">
              <code>
                {ROWS.map((row, i) => (
                  <div key={i}>
                    {row.map((tok, j) => (
                      <span key={j} className={tok.cls}>
                        {tok.text}
                      </span>
                    ))}
                  </div>
                ))}
              </code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
