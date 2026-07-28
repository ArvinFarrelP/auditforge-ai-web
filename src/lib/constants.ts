export const LINKS = {
  landing: "/",
  docs: "https://audit.arvinlabs.tech/docs",
  apiEndpoint: "https://audit.arvinlabs.tech/audit",
  api: "https://audit.arvinlabs.tech/docs",
  github: "https://github.com/ArvinFarrelP/auditforge-ai",
  okx: "https://www.okx.ai/agents/9186",
} as const;

export const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Example", href: "#example" },
  { label: "Stack", href: "#stack" },
] as const;

export type TrustBadge = {
  label: string;
  href?: keyof typeof LINKS;
};

export const TRUST_BADGES: TrustBadge[] = [
  { label: "Listed on OKX.AI Marketplace", href: "okx" },
  { label: "Agent #9186", href: "okx" },
  { label: "Open Source", href: "github" },
  { label: "Production REST API", href: "apiEndpoint" },
];

export const POWERED_BY = ["FastAPI", "Fireworks AI", "Docker"] as const;

export type FeatureItem = {
  title: string;
  description: string;
  tag: "ANALYSIS" | "SCORING" | "API";
};

export const FEATURES: FeatureItem[] = [
  {
    title: "AI-Assisted Security Analysis",
    description:
      "An LLM reviews your contract for logic flaws and context-dependent risks that pattern matching alone tends to miss.",
    tag: "ANALYSIS",
  },
  {
    title: "Rule-Based Vulnerability Detection",
    description:
      "Deterministic checks catch the classics instantly — reentrancy, tx.origin misuse, unprotected selfdestruct, and more.",
    tag: "ANALYSIS",
  },
  {
    title: "Security Score",
    description:
      "Every audit resolves to a single 0–100 score, so severity is comparable across contracts and over time.",
    tag: "SCORING",
  },
  {
    title: "Risk Classification",
    description:
      "Findings roll up into a clear Low, Medium, or High risk rating you can act on without reading the full report.",
    tag: "SCORING",
  },
  {
    title: "AI-Generated Summary",
    description:
      "A plain-language summary of what the contract does and where it's exposed, written for humans, not auditors.",
    tag: "ANALYSIS",
  },
  {
    title: "Gas Optimization Suggestions",
    description:
      "Alongside security findings, get concrete suggestions for reducing deployment and execution cost.",
    tag: "SCORING",
  },
  {
    title: "REST API",
    description:
      "One POST request in, one structured JSON report out. Drop it into CI, a bot, or your own dashboard.",
    tag: "API",
  },
  {
    title: "OpenAPI Documentation",
    description:
      "A fully interactive OpenAPI spec means your team can explore and test every endpoint without extra tooling.",
    tag: "API",
  },
];

export type Step = {
  index: string;
  prompt: string;
  title: string;
  description: string;
};

export const STEPS: Step[] = [
  {
    index: "01",
    prompt: "paste contract",
    title: "Paste your Solidity source",
    description:
      "Send the raw source of your smart contract to the API — no build step or repo access required.",
  },
  {
    index: "02",
    prompt: "analyzing",
    title: "Rule-based scan + AI review",
    description:
      "AuditForge AI runs deterministic vulnerability checks in parallel with an AI-assisted read of the contract's logic.",
  },
  {
    index: "03",
    prompt: "report ready",
    title: "Get a structured report",
    description:
      "Receive a JSON report with a security score, risk level, individual findings, and gas suggestions — ready to parse or display.",
  },
];

export type TechItem = {
  name: string;
  role: string;
};

export const TECH_STACK: TechItem[] = [
  { name: "Python", role: "Core service" },
  { name: "FastAPI", role: "REST API layer" },
  { name: "Fireworks AI", role: "AI-assisted analysis" },
  { name: "Solidity", role: "Target language" },
  { name: "Docker", role: "Deployment" },
  { name: "OpenAPI", role: "API specification" },
  { name: "REST API", role: "Integration surface" },
];

export type Benefit = {
  title: string;
  description: string;
};

export const BENEFITS: Benefit[] = [
  {
    title: "Fast pre-audit",
    description:
      "Get a first read on your contract in seconds, not the days a full manual audit takes to schedule.",
  },
  {
    title: "AI-assisted review",
    description:
      "Catch context-dependent issues that fixed rule sets alone can't reason about.",
  },
  {
    title: "Rule-based analysis",
    description:
      "Deterministic, repeatable checks for well-known vulnerability classes, every time.",
  },
  {
    title: "Developer friendly",
    description:
      "Built by developers who ship Solidity, for the workflow you already have.",
  },
  {
    title: "Easy API integration",
    description:
      "A single REST endpoint and OpenAPI spec — wire it into CI, a bot, or a dashboard in minutes.",
  },
];

export type ProofItem = {
  label: string;
};

export const SOCIAL_PROOF_ITEMS: ProofItem[] = [
  { label: "Listed on OKX.AI Marketplace" },
  { label: "AI-Assisted Smart Contract Pre-Audit" },
  { label: "Production REST API" },
  { label: "Open Source on GitHub" },
];
