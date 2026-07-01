const milestones = [
  {
    title: "Services launch: Gio UI",
    detail: "A guided build service for founders who want Gio Labs to turn marketplace patterns into a finished interface.",
  },
  {
    title: "Gio OS private beta",
    detail: "A heavier operating layer for agents, memory, files, and multi-company execution.",
  },
  {
    title: "GioSeek research surfaces",
    detail: "Search and synthesis workflows for deal sourcing, project context, and operator knowledge bases.",
  },
  {
    title: "Pro tier and payments",
    detail: "Unlock full GitHub repos, deeper templates, commercial licenses, and future account downloads.",
  },
  {
    title: "More template drops",
    detail: "Additional dashboards, landing pages, diagrams, rails, and agent UI components from real JTG workflows.",
  },
  {
    title: "Preview environments",
    detail: "Self-hosted live previews for repo-backed products with device toggles and implementation notes.",
  },
];

export default function RoadmapPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Gio Labs Roadmap</p>
      <h1 className="mt-4 text-4xl font-bold tracking-normal text-foreground md:text-6xl">What ships next.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        The marketplace is phase one. Services, Pro delivery, and deeper Gio Labs operating systems are already slotted into the architecture.
      </p>
      <div className="mt-12 grid gap-4">
        {milestones.map((milestone, index) => (
          <article key={milestone.title} className="grid gap-4 rounded-3xl border bg-background p-6 md:grid-cols-[5rem_1fr]">
            <span className="flex size-12 items-center justify-center rounded-full bg-muted text-lg font-bold text-foreground">{index + 1}</span>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{milestone.title}</h2>
              <p className="mt-2 leading-7 text-muted-foreground">{milestone.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
