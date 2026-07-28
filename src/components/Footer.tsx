import { Github, BookOpen, Terminal } from "lucide-react";
import Logo from "./Logo";
import OKXLogo from "./OKXLogo";
import { LINKS } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <a href="#top" className="flex items-center gap-2.5">
            <Logo className="h-7 w-7" />
            <span className="font-display text-sm font-bold tracking-tight text-primary">
              AuditForge<span className="text-secondary">AI</span>
            </span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <a
              href={LINKS.docs}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-ink-muted transition-colors hover:text-primary"
            >
              <BookOpen className="h-4 w-4" />
              Documentation
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-ink-muted transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={LINKS.okx}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-ink-muted transition-colors hover:text-primary"
            >
              <OKXLogo className="h-4 w-4" />
              OKX.AI Marketplace
            </a>
            <a
              href={LINKS.apiEndpoint}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-ink-muted transition-colors hover:text-primary"
            >
              <Terminal className="h-4 w-4" />
              API Endpoint
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-8">
          <p className="mx-auto max-w-2xl text-center font-body text-xs leading-relaxed text-ink-faint">
            This service is intended for developer guidance during an
            initial smart contract pre-audit and does not replace a
            comprehensive manual security audit.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-mono text-xs text-ink-faint">
            © 2026 AuditForge AI
          </p>
          <p className="font-mono text-xs text-ink-faint">
            Agent #9186 on OKX.AI
          </p>
        </div>
      </div>
    </footer>
  );
}
