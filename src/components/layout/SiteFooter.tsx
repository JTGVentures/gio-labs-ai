export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© 2026 Gio Labs — JTG Ventures.</p>
        <a className="font-bold text-foreground transition hover:text-muted-foreground" href="https://x.com" target="_blank" rel="noreferrer">
          Follow us on X
        </a>
      </div>
    </footer>
  );
}
