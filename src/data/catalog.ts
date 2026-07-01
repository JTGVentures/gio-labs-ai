import type { Product, ProductCategory } from "@/types/product";

export const categories: ProductCategory[] = [
  "Enterprise Templates",
  "Design Templates",
  "UI Kits",
  "Free Tools",
];

const agentStatusCode = `import { CheckCircle2, Clock3, Radio } from "lucide-react";

type AgentStatus = "online" | "working" | "idle";

type Agent = {
  name: string;
  role: string;
  status: AgentStatus;
  lastRun: string;
};

const agents: Agent[] = [
  { name: "Gio", role: "Primary operator", status: "working", lastRun: "Memory sync running" },
  { name: "GLS", role: "Scout", status: "online", lastRun: "Inbox sweep complete" },
  { name: "GLF", role: "Forge", status: "idle", lastRun: "Build queue clear" },
];

const statusStyles: Record<AgentStatus, string> = {
  online: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  working: "bg-slate-900 text-white ring-slate-900",
  idle: "bg-slate-100 text-slate-500 ring-slate-200",
};

export function AgentStatusWidget() {
  return (
    <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Agent network</p>
          <h2 className="text-xl font-semibold text-slate-950">Live Gio Ops</h2>
        </div>
        <Radio className="size-5 text-slate-950" />
      </div>
      <div className="space-y-3">
        {agents.map((agent) => (
          <article key={agent.name} className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-white">
                {agent.status === "working" ? <Clock3 className="size-4" /> : <CheckCircle2 className="size-4" />}
              </div>
              <div>
                <p className="font-semibold text-slate-950">{agent.name}</p>
                <p className="text-sm text-slate-500">{agent.role}</p>
              </div>
            </div>
            <span className={\`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 \${statusStyles[agent.status]}\`}>
              {agent.lastRun}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}`;

const decisionRailCode = `type Decision = {
  label: string;
  owner: string;
  status: "decide" | "delegate" | "done";
  summary: string;
};

const decisions: Decision[] = [
  {
    label: "Avanti acquisition screen",
    owner: "Joe",
    status: "decide",
    summary: "Confirm whether the operator can produce cash flow inside 90 days.",
  },
  {
    label: "Cardhouse packaging sprint",
    owner: "GLF",
    status: "delegate",
    summary: "Draft the SKU matrix and pass the naming pass back to Gio.",
  },
  {
    label: "Memory sync protocol",
    owner: "Gio",
    status: "done",
    summary: "Daily compact context now writes to state/FAST_CONTEXT.md.",
  },
];

export function DecisionRail() {
  return (
    <aside className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-4">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Decision rail</p>
          <h2 className="text-xl font-semibold text-slate-950">What needs judgment</h2>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">3 active</span>
      </div>
      <ol className="space-y-3">
        {decisions.map((decision, index) => (
          <li key={decision.label} className="grid grid-cols-[2rem_1fr] gap-3 rounded-xl bg-slate-50 p-3">
            <span className="flex size-8 items-center justify-center rounded-full bg-white text-sm font-semibold">
              {index + 1}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-semibold text-slate-950">{decision.label}</p>
                <span className="rounded-full border border-slate-200 px-2 py-0.5 text-xs text-slate-500">
                  {decision.owner} · {decision.status}
                </span>
              </div>
              <p className="mt-1 text-sm leading-6 text-slate-600">{decision.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}`;

const denseNavCode = `import Link from "next/link";

const projects = [
  { name: "TomDe Studio", href: "/projects/tomde", badge: "Brand" },
  { name: "Cardhouse", href: "/projects/cardhouse", badge: "Build" },
  { name: "Avanti Values", href: "/projects/avanti", badge: "M&A" },
  { name: "Galifi Estates", href: "/projects/galifi-estates", badge: "RE" },
];

export function DenseProjectNav() {
  return (
    <nav aria-label="Project navigation" className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-2">
      {projects.map((project) => (
        <Link
          key={project.href}
          href={project.href}
          className="flex items-center justify-between rounded-xl px-3 py-2 text-sm transition hover:bg-slate-50"
        >
          <span className="font-medium text-slate-950">{project.name}</span>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">
            {project.badge}
          </span>
        </Link>
      ))}
    </nav>
  );
}`;

const memoryDiagramCode = `const layers = [
  ["Permanent", "MEMORY.md + EMPIRE_SNAPSHOT.md"],
  ["Project", "projects/<name>/CONTEXT.md"],
  ["Session", "active transcript + compaction"],
  ["Archive", "rotated notes and historical transcripts"],
];

export function MemoryArchitectureDiagram() {
  return (
    <figure className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6">
      <figcaption className="mb-5 text-sm font-medium text-slate-500">Gio continuity architecture</figcaption>
      <div className="grid gap-3">
        {layers.map(([label, detail], index) => (
          <div key={label} className="grid grid-cols-[7rem_1fr] items-center gap-4 rounded-xl bg-slate-50 p-4">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
                {index + 1}
              </span>
              <span className="font-semibold text-slate-950">{label}</span>
            </div>
            <code className="rounded-lg bg-white px-3 py-2 text-sm text-slate-700">{detail}</code>
          </div>
        ))}
      </div>
    </figure>
  );
}`;

const landingCode = `export function CinematicAILanding() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-cyan-300">Gio Labs system</p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          The build system behind the empire, now shipping to operators.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Launch an AI product page with proof, product motion, pricing, and an operator-grade narrative in one reusable section stack.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a className="rounded-full bg-white px-5 py-3 font-semibold text-slate-950" href="#templates">Browse templates</a>
          <a className="rounded-full border border-white/20 px-5 py-3 font-semibold text-white" href="#manifesto">Read manifesto</a>
        </div>
      </section>
    </main>
  );
}`;

const opsDashboardCode = `type Metric = { label: string; value: string; delta: string };

const metrics: Metric[] = [
  { label: "Open loops", value: "18", delta: "-6 this week" },
  { label: "Revenue lanes", value: "6", delta: "all monitored" },
  { label: "Agent runs", value: "142", delta: "+28%" },
];

export function OpsCommandDashboard() {
  return (
    <section className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500">JTG Ventures</p>
            <h1 className="text-3xl font-semibold text-slate-950">Ops Command Dashboard</h1>
          </div>
          <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">Run daily sweep</button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <article key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-500">{metric.label}</p>
              <p className="mt-3 text-4xl font-semibold text-slate-950">{metric.value}</p>
              <p className="mt-2 text-sm font-medium text-emerald-600">{metric.delta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`;

const entityGridCode = `const entities = ["TomDe Studio", "Cardhouse", "Avanti Values", "Galifi Estates", "Genosis", "Gio Labs"];

export function EmpireEntityGrid() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6">
      <div className="mb-6 max-w-xl">
        <p className="text-sm font-medium text-slate-500">Empire map</p>
        <h2 className="text-2xl font-semibold text-slate-950">Six operating surfaces, one intelligence layer.</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {entities.map((entity) => (
          <article key={entity} className="rounded-2xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-950">{entity}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Status, priorities, files, and next actions stay visible in the same operating frame.</p>
          </article>
        ))}
      </div>
    </section>
  );
}`;

export const gioAgentOpsPrompt = `# Gio Agent Ops Prompt Pack

You are Gio, the operating intelligence partner for Joe Galifi and JTG Ventures. Your job is to keep execution moving without leaking private context or creating noise.

## Operating Rules

1. Read the local source-of-truth files before acting: SOUL.md, USER.md, today's daily note, yesterday's daily note, and the relevant project CONTEXT.md.
2. Treat files as durable memory. If a decision, milestone, or action item matters after this session, write it down.
3. Stay concise in chat. Use short status updates during work and a tight final summary when done.
4. Never send external messages, public posts, emails, or calendar changes unless the human explicitly asked for that action.
5. In group chats, contribute only when asked, directly useful, or naturally social. Do not dominate the conversation.

## Daily Inbox Triage Procedure

1. Gather unread or recent items from the configured inbox sources.
2. Classify each item as urgent, waiting-on-human, reference, routine, or ignore.
3. Surface only items that need Joe's attention, include why they matter, and propose the smallest next action.
4. If nothing is important, report HEARTBEAT_OK instead of filling the channel.

## Memory Sync Procedure

1. Read daily notes from the last 72 hours and the active project CONTEXT.md files.
2. Distill only outcomes, decisions, open actions, and reusable lessons.
3. Update MEMORY.md with one-line durable facts and pointers to detailed files.
4. Update each affected project CONTEXT.md with status, decisions, and current next actions.
5. Write a short completion note to today's daily note.

## Response Shape

- Start with the answer or result.
- Include file paths when useful.
- Ask only when the missing information blocks the task or creates real risk.
- Prefer doing internal work quietly over narrating every intermediate step.
`;

const product = (p: Product): Product => p;

export const catalog: Product[] = [
  product({
    title: "Ops Command Dashboard",
    slug: "ops-command-dashboard",
    category: "Enterprise Templates",
    kind: "template",
    deliveryType: "code",
    tier: "free",
    shortDescription: "A command-center dashboard for open loops, entity health, and agent runs.",
    description: "A production-style Next.js operations dashboard inspired by the JTG Ventures operating stack.",
    overviewTitle: "Run the empire from one calm dashboard",
    overview: "Ops Command Dashboard gives operators a single view of priorities, entity health, agent activity, and execution lanes. It is intentionally dense without feeling noisy, built for founders who need to scan and decide quickly.",
    highlights: [
      { title: "Entity-aware", description: "Group metrics by company, project, or operating lane." },
      { title: "Agent-ready", description: "Dedicated run log patterns for automated sweeps and handoffs." },
      { title: "Executive scan", description: "Metrics prioritize judgment, not vanity reporting." },
      { title: "Copyable blocks", description: "Cards, rails, and status modules can be lifted into existing apps." },
      { title: "Responsive shell", description: "Works as a full dashboard or an embedded ops view." },
      { title: "Next.js native", description: "Server-friendly structure with TypeScript and Tailwind." },
    ],
    features: [],
    checklist: ["Entity metrics", "Agent run log", "Priority rail", "Responsive grid", "TypeScript", "Tailwind"],
    tags: ["dashboard", "ops", "agents", "next.js"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
    complexity: "Advanced",
    popularity: 98,
    createdAt: "2026-06-01",
    updatedAt: "2026-06-28",
    files: [{ filename: "OpsCommandDashboard.tsx", language: "tsx", content: opsDashboardCode }],
    stats: { downloads: "1.8k", version: "1.0.0", updated: "Jun 28, 2026" },
    accent: "slate",
  }),
  product({
    title: "Empire / Entity Grid",
    slug: "empire-entity-grid",
    category: "Enterprise Templates",
    kind: "template",
    deliveryType: "code",
    tier: "free",
    shortDescription: "A portfolio grid for showing multiple ventures, status, and operating notes.",
    description: "A clean entity map for founders managing a group of companies, real estate, products, and labs.",
    overviewTitle: "Map every operating surface without losing the thread",
    overview: "Empire / Entity Grid turns a scattered portfolio into a scannable surface. Each entity gets ownership, context, status, and the current next action so the system stays legible.",
    highlights: [
      { title: "Portfolio-native", description: "Designed for multiple companies, not a single SaaS workspace." },
      { title: "Status language", description: "Use the same states across deals, products, and experiments." },
      { title: "Compact cards", description: "Dense enough for repeated daily use." },
      { title: "Founder-friendly", description: "Makes it easy to know where attention should go next." },
      { title: "Easy to brand", description: "Built on theme tokens and simple card anatomy." },
      { title: "Fast setup", description: "Drop in your entities and launch the first view." },
    ],
    features: [],
    checklist: ["Six-entity layout", "Status cards", "Next actions", "Responsive", "Accessible", "Tokenized"],
    tags: ["portfolio", "entity map", "operators", "grid"],
    stack: ["Next.js", "React", "Tailwind"],
    complexity: "Intermediate",
    popularity: 86,
    createdAt: "2026-06-02",
    updatedAt: "2026-06-25",
    files: [{ filename: "EmpireEntityGrid.tsx", language: "tsx", content: entityGridCode }],
    stats: { downloads: "1.2k", version: "1.0.0", updated: "Jun 25, 2026" },
    accent: "emerald",
  }),
  product({
    title: "Agent Console Shell",
    slug: "agent-console-shell",
    category: "Enterprise Templates",
    kind: "template",
    deliveryType: "github",
    tier: "pro",
    shortDescription: "A full repo shell for multi-agent sessions, memory, and job state.",
    description: "A GitHub-backed system shell for coordinating agents, tools, and durable operations.",
    overviewTitle: "Give every agent a clean operating console",
    overview: "Agent Console Shell is the repo-grade version of Gio Labs' agent workspace pattern: session state, tool output, memory references, and dispatch controls in a unified interface.",
    highlights: [
      { title: "Session timeline", description: "Show agent work, human interventions, and completion states." },
      { title: "Memory-aware", description: "Surface context files and source-of-truth notes where work happens." },
      { title: "Tool routing", description: "Dedicated panels for logs, commands, and delegated tasks." },
      { title: "Pro repo", description: "Ships as a complete GitHub project when Pro opens." },
      { title: "Operator UX", description: "Built for fast triage and multi-step execution." },
      { title: "Extensible", description: "Ready for services, account, and download flows later." },
    ],
    features: [],
    checklist: ["Session feed", "Memory panel", "Tool output", "GitHub repo", "Pro gated", "Agent ops"],
    tags: ["agents", "console", "server actions", "streaming"],
    stack: ["Next.js", "Server Actions", "TypeScript", "Tailwind"],
    complexity: "Advanced",
    popularity: 93,
    createdAt: "2026-06-03",
    updatedAt: "2026-06-27",
    files: [],
    githubUrl: "https://github.com/JTGVentures/gio-agent-console-shell",
    stats: { downloads: "Pro preview", version: "0.9.0", updated: "Jun 27, 2026", stars: "124", forks: "18", watchers: "31", issues: "4", commits: "492" },
    accent: "blue",
  }),
  product({
    title: "Automation Pipeline Visualizer",
    slug: "automation-pipeline-visualizer",
    category: "Enterprise Templates",
    kind: "template",
    deliveryType: "github",
    tier: "pro",
    shortDescription: "A repo-backed pipeline map for automations, triggers, approvals, and handoffs.",
    description: "Visualize operational automations from trigger to approval to agent execution.",
    overviewTitle: "See where every automation starts, waits, and finishes",
    overview: "This visualizer gives teams a clear map of automations, dependencies, approval gates, and failure recovery paths. It is built for real operating systems where automation needs accountability.",
    highlights: [
      { title: "Flow mapping", description: "Represent triggers, tools, and handoffs in one canvas." },
      { title: "Approval gates", description: "Mark where human judgment is required before execution." },
      { title: "Failure states", description: "Show retry, escalation, and blocked paths clearly." },
      { title: "Repo-ready", description: "Pro ships as a full implementation repository." },
      { title: "Operator notes", description: "Each node carries owner and recovery context." },
      { title: "Future-proof", description: "Designed to slot into Gio OS and GioSeek services later." },
    ],
    features: [],
    checklist: ["Pipeline map", "Approval gates", "Failure paths", "Owner notes", "React Flow", "Pro gated"],
    tags: ["automation", "pipelines", "react-flow", "ops"],
    stack: ["React", "React Flow", "TypeScript", "Tailwind"],
    complexity: "Advanced",
    popularity: 81,
    createdAt: "2026-06-04",
    updatedAt: "2026-06-23",
    files: [],
    githubUrl: "https://github.com/JTGVentures/gio-automation-pipeline-visualizer",
    stats: { downloads: "Pro preview", version: "0.8.0", updated: "Jun 23, 2026", stars: "88", forks: "12", watchers: "19", issues: "6", commits: "238" },
    accent: "violet",
  }),
  product({
    title: "Cinematic AI Landing",
    slug: "cinematic-ai-landing",
    category: "Design Templates",
    kind: "template",
    deliveryType: "code",
    tier: "free",
    shortDescription: "A polished AI landing page section stack for products with real operating proof.",
    description: "A refined marketing template carrying the original Gio Labs manifesto energy into a usable product page.",
    overviewTitle: "Turn an AI product into a credible offer",
    overview: "Cinematic AI Landing keeps the dramatic Gio Labs positioning but packages it as a reusable landing page with hero, proof, CTA, and product narrative sections.",
    highlights: [
      { title: "Strong first viewport", description: "A clear offer, not generic AI fog." },
      { title: "Proof sections", description: "Designed around operating evidence and outcomes." },
      { title: "Conversion-ready", description: "CTA structure works for waitlists, downloads, and demos." },
      { title: "Brandable", description: "Tokenized colors make future Gio Labs branding easy." },
      { title: "Responsive", description: "Hero and section rhythm hold up on mobile." },
      { title: "Free code", description: "Download and adapt the full section." },
    ],
    features: [],
    checklist: ["Hero", "Proof band", "CTA", "Responsive", "Tokenized", "Free"],
    tags: ["landing", "ai", "marketing", "tailwind"],
    stack: ["React", "Tailwind", "TypeScript"],
    complexity: "Starter",
    popularity: 76,
    createdAt: "2026-06-05",
    updatedAt: "2026-06-24",
    files: [{ filename: "CinematicAILanding.tsx", language: "tsx", content: landingCode }],
    stats: { downloads: "940", version: "1.0.0", updated: "Jun 24, 2026" },
    accent: "slate",
  }),
  product({
    title: "Dark Analytics Suite",
    slug: "dark-analytics-suite",
    category: "Design Templates",
    kind: "template",
    deliveryType: "github",
    tier: "pro",
    shortDescription: "A complete analytics repo with executive cards, charts, and cohort views.",
    description: "A design-forward analytics suite for founders who need numbers, not noise.",
    overviewTitle: "Analytics for operators who need a readable cockpit",
    overview: "Dark Analytics Suite packages charts, data cards, cohorts, and narrative summaries into a polished Pro repo. It keeps the visual polish of the original Gio Labs dark aesthetic inside a light marketplace wrapper.",
    highlights: [
      { title: "Executive metrics", description: "Surface trend, risk, and next action together." },
      { title: "Chart patterns", description: "Reusable chart cards for revenue, pipeline, and throughput." },
      { title: "Dark product UI", description: "Works for embedded admin surfaces and premium dashboards." },
      { title: "Repo delivery", description: "Pro GitHub project when payments launch." },
      { title: "Data-ready", description: "Designed around typed data inputs." },
      { title: "Founder summary", description: "Narrative digest section explains what changed." },
    ],
    features: [],
    checklist: ["Charts", "Cohorts", "Summary cards", "Dark UI", "GitHub", "Pro gated"],
    tags: ["analytics", "charts", "recharts", "dashboard"],
    stack: ["Next.js", "Recharts", "shadcn/ui", "Tailwind"],
    complexity: "Intermediate",
    popularity: 73,
    createdAt: "2026-06-06",
    updatedAt: "2026-06-21",
    files: [],
    githubUrl: "https://github.com/JTGVentures/gio-dark-analytics-suite",
    stats: { downloads: "Pro preview", version: "0.9.0", updated: "Jun 21, 2026", stars: "101", forks: "14", watchers: "22", issues: "3", commits: "176" },
    accent: "blue",
  }),
  product({
    title: "Agent Status Widget",
    slug: "agent-status-widget",
    category: "UI Kits",
    kind: "kit",
    deliveryType: "code",
    tier: "free",
    shortDescription: "A compact live-status component for agent availability, work state, and latest run.",
    description: "A focused widget for showing which agents are online, working, idle, or blocked.",
    overviewTitle: "Make agent state visible at a glance",
    overview: "Agent Status Widget is a small but complete UI primitive for agent-led products. It shows live work state, role, and last run context without requiring a full console.",
    highlights: [
      { title: "Real component", description: "Ships as working TSX, not pseudocode." },
      { title: "Status model", description: "Online, working, and idle states are typed." },
      { title: "Compact display", description: "Fits into dashboards, sidebars, and admin rails." },
      { title: "Accessible icons", description: "Simple labels and status color treatment." },
      { title: "No setup", description: "Copy the component into any React app." },
      { title: "Free", description: "Copy and download immediately." },
    ],
    features: [],
    checklist: ["Typed statuses", "Agent list", "Status pill", "Copy code", "Download zip", "Free"],
    tags: ["agent", "status", "live-sync", "react"],
    stack: ["React", "TypeScript", "Tailwind", "lucide-react"],
    complexity: "Starter",
    popularity: 99,
    createdAt: "2026-06-07",
    updatedAt: "2026-06-29",
    files: [{ filename: "AgentStatusWidget.tsx", language: "tsx", content: agentStatusCode }],
    stats: { downloads: "2.4k", version: "1.0.0", updated: "Jun 29, 2026" },
    accent: "emerald",
  }),
  product({
    title: "Decision Rail",
    slug: "decision-rail",
    category: "UI Kits",
    kind: "kit",
    deliveryType: "code",
    tier: "free",
    shortDescription: "A structured rail for surfacing judgment calls, owners, and next actions.",
    description: "A reusable component for keeping founder decisions out of chat sprawl.",
    overviewTitle: "Separate tasks from decisions",
    overview: "Decision Rail is designed for operators who need to see which issues require judgment, which can be delegated, and which are already closed.",
    highlights: [
      { title: "Judgment-first", description: "Items are framed by decision state, not generic task state." },
      { title: "Owner visible", description: "Every decision shows who should act." },
      { title: "Compact", description: "Works in sidebars and dashboard panels." },
      { title: "Typed data", description: "Status values are explicit and easy to extend." },
      { title: "Accessible", description: "Uses semantic list structure." },
      { title: "Free code", description: "Copy or download as a zip." },
    ],
    features: [],
    checklist: ["Decision states", "Owners", "Ordered list", "Accessible", "Tailwind", "Free"],
    tags: ["decision", "a11y", "operators", "rail"],
    stack: ["React", "TypeScript", "Tailwind"],
    complexity: "Intermediate",
    popularity: 87,
    createdAt: "2026-06-08",
    updatedAt: "2026-06-26",
    files: [{ filename: "DecisionRail.tsx", language: "tsx", content: decisionRailCode }],
    stats: { downloads: "1.5k", version: "1.0.0", updated: "Jun 26, 2026" },
    accent: "amber",
  }),
  product({
    title: "Dense Project Navigation",
    slug: "dense-project-nav",
    category: "UI Kits",
    kind: "kit",
    deliveryType: "code",
    tier: "free",
    shortDescription: "A compact navigation primitive for multi-project operators and internal tools.",
    description: "A small sidebar nav pattern for moving between companies, products, and workstreams.",
    overviewTitle: "Navigate many workstreams without a bloated sidebar",
    overview: "Dense Project Navigation is a compact, repeated-use component for internal tools where every pixel has to earn its place.",
    highlights: [
      { title: "Multi-project", description: "Built for a portfolio of active workstreams." },
      { title: "Badge system", description: "Each item gets a short classification label." },
      { title: "Next.js links", description: "Uses Link for fast app-router navigation." },
      { title: "Low-noise", description: "Restrained styling for operational tools." },
      { title: "Drop-in", description: "Minimal dependencies and simple data." },
      { title: "Free", description: "Available with code and zip delivery." },
    ],
    features: [],
    checklist: ["Project links", "Badges", "Compact", "Next Link", "Tailwind", "Free"],
    tags: ["navigation", "projects", "next.js", "sidebar"],
    stack: ["Next.js", "React", "Tailwind"],
    complexity: "Intermediate",
    popularity: 84,
    createdAt: "2026-06-09",
    updatedAt: "2026-06-22",
    files: [{ filename: "DenseProjectNav.tsx", language: "tsx", content: denseNavCode }],
    stats: { downloads: "1.1k", version: "1.0.0", updated: "Jun 22, 2026" },
    accent: "slate",
  }),
  product({
    title: "Memory-Architecture Diagram",
    slug: "memory-architecture-diagram",
    category: "Free Tools",
    kind: "tool",
    deliveryType: "code",
    tier: "free",
    shortDescription: "A React diagram explaining permanent, project, session, and archive memory layers.",
    description: "A visual primitive for documenting agent continuity systems.",
    overviewTitle: "Explain durable agent memory in one visual",
    overview: "Memory-Architecture Diagram turns Gio's continuity model into a clean embeddable component. It is useful for docs, onboarding, and agent-platform product pages.",
    highlights: [
      { title: "Four-layer model", description: "Permanent, project, session, and archive are explicit." },
      { title: "Docs-friendly", description: "Works inside docs pages and app settings." },
      { title: "Real code", description: "No screenshot dependency or broken image risk." },
      { title: "Accessible", description: "Uses text and figure semantics." },
      { title: "Token-ready", description: "Easy to retheme with Tailwind variables." },
      { title: "Free tool", description: "Download and adapt immediately." },
    ],
    features: [],
    checklist: ["Memory layers", "React figure", "Code blocks", "Docs-ready", "Free", "Download"],
    tags: ["memory", "diagram", "agents", "docs"],
    stack: ["React", "TypeScript", "Tailwind"],
    complexity: "Intermediate",
    popularity: 91,
    createdAt: "2026-06-10",
    updatedAt: "2026-06-20",
    files: [{ filename: "MemoryArchitectureDiagram.tsx", language: "tsx", content: memoryDiagramCode }],
    stats: { downloads: "1.7k", version: "1.0.0", updated: "Jun 20, 2026" },
    accent: "violet",
  }),
  product({
    title: "Live Sync Surface",
    slug: "live-sync-surface",
    category: "UI Kits",
    kind: "kit",
    deliveryType: "github",
    tier: "pro",
    shortDescription: "A Pro repo for showing realtime sync, conflicts, pending writes, and handoff state.",
    description: "A GitHub-delivered UI surface for realtime agent and human collaboration.",
    overviewTitle: "Show realtime state without making users guess",
    overview: "Live Sync Surface gives agent products a polished way to show who changed what, what synced, and what still needs attention.",
    highlights: [
      { title: "Realtime states", description: "Pending, synced, stale, and blocked states are visible." },
      { title: "Collaboration-ready", description: "Human and agent changes can share the same activity surface." },
      { title: "Conflict handling", description: "Includes UI patterns for overwrite and reconcile decisions." },
      { title: "Pro repo", description: "Ships as a complete GitHub project later." },
      { title: "Operational", description: "Designed for work tools, not chat novelty." },
      { title: "Extensible", description: "Ready for websocket or polling adapters." },
    ],
    features: [],
    checklist: ["Realtime", "Conflicts", "Activity feed", "Websockets", "GitHub", "Pro gated"],
    tags: ["live-sync", "websockets", "agents", "collaboration"],
    stack: ["React", "TypeScript", "WebSockets", "Tailwind"],
    complexity: "Advanced",
    popularity: 79,
    createdAt: "2026-06-11",
    updatedAt: "2026-06-19",
    files: [],
    githubUrl: "https://github.com/JTGVentures/gio-live-sync-surface",
    stats: { downloads: "Pro preview", version: "0.7.0", updated: "Jun 19, 2026", stars: "67", forks: "9", watchers: "16", issues: "5", commits: "154" },
    accent: "emerald",
  }),
  product({
    title: "Edge API Shell",
    slug: "edge-api-shell",
    category: "Free Tools",
    kind: "tool",
    deliveryType: "github",
    tier: "pro",
    shortDescription: "A deployable edge-runtime repo for agent-safe API routes and observability.",
    description: "A Pro repo for building fast, observable API surfaces around agent operations.",
    overviewTitle: "Start agent APIs from a hardened edge shell",
    overview: "Edge API Shell provides route structure, request validation patterns, observability hooks, and deployment conventions for agentic products.",
    highlights: [
      { title: "Edge runtime", description: "Designed around low-latency route handlers." },
      { title: "Guardrails", description: "Validation and scoped handlers reduce accidental exposure." },
      { title: "Observability", description: "Includes request logging and lightweight event patterns." },
      { title: "Repo delivery", description: "GitHub delivery keeps the full system intact." },
      { title: "Agent-safe", description: "Built for API work driven by agents and humans." },
      { title: "Services-ready", description: "A foundation for future Gio OS work." },
    ],
    features: [],
    checklist: ["Edge runtime", "Route handlers", "Validation", "Observability", "GitHub", "Pro gated"],
    tags: ["edge", "api", "automation", "typescript"],
    stack: ["Next.js", "Edge Runtime", "TypeScript"],
    complexity: "Advanced",
    popularity: 70,
    createdAt: "2026-06-12",
    updatedAt: "2026-06-18",
    files: [],
    githubUrl: "https://github.com/JTGVentures/gio-edge-api-shell",
    stats: { downloads: "Pro preview", version: "0.8.0", updated: "Jun 18, 2026", stars: "74", forks: "10", watchers: "13", issues: "2", commits: "119" },
    accent: "amber",
  }),
  product({
    title: "Gio Agent Ops Prompt Pack",
    slug: "gio-agent-ops-prompt-pack",
    category: "Free Tools",
    kind: "tool",
    deliveryType: "prompt-md",
    tier: "free",
    shortDescription: "A downloadable SKILL.md-style prompt for daily triage and memory sync operations.",
    description: "A real Gio Labs agent-ops procedure packaged as a markdown prompt for local or cloud agents.",
    overviewTitle: "Give any agent a practical operating procedure",
    overview: "Gio Agent Ops Prompt Pack codifies the daily triage and memory-sync patterns that keep Gio useful without being noisy. It is designed to be pasted into an agent skill, custom GPT instruction, or local system prompt.",
    highlights: [
      { title: "Agent-ready", description: "Written as a durable procedure, not a casual prompt." },
      { title: "Triage included", description: "Classify inbox signals and surface only what matters." },
      { title: "Memory sync", description: "Clear rules for preserving decisions and project state." },
      { title: "Privacy-aware", description: "Explicit external-action and group-chat boundaries." },
      { title: "Markdown delivery", description: "Downloads as a real .md file." },
      { title: "Free", description: "Immediate download for prompt-based workflows." },
    ],
    features: [],
    checklist: ["SKILL-style", "Inbox triage", "Memory sync", "Privacy rules", "Markdown", "Free"],
    tags: ["prompt", "agents", "memory", "triage"],
    stack: ["Markdown", "Agent Ops", "OpenClaw"],
    complexity: "Starter",
    popularity: 96,
    createdAt: "2026-06-13",
    updatedAt: "2026-06-30",
    files: [{ filename: "GioAgentOpsPromptPack.md", language: "md", content: gioAgentOpsPrompt }],
    prompt: gioAgentOpsPrompt,
    stats: { downloads: "2.1k", version: "1.0.0", updated: "Jun 30, 2026" },
    accent: "slate",
  }),
];

export const getProductBySlug = (slug: string) => catalog.find((product) => product.slug === slug);

export const getRelatedProducts = (product: Product) =>
  catalog
    .filter((item) => item.slug !== product.slug)
    .sort((a, b) => {
      const categoryScore = Number(b.category === product.category) - Number(a.category === product.category);
      if (categoryScore !== 0) return categoryScore;
      const sharedTagsA = a.tags.filter((tag) => product.tags.includes(tag)).length;
      const sharedTagsB = b.tags.filter((tag) => product.tags.includes(tag)).length;
      return sharedTagsB - sharedTagsA;
    })
    .slice(0, 3);
