import { Search } from "lucide-react";
import { ProductExplorer } from "@/components/marketplace/ProductExplorer";
import { catalog } from "@/data/catalog";

export default function Home() {
  return (
    <>
      <section className="blueprint-grid border-b bg-background">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center md:py-24">
          <p className="mb-5 rounded-full border bg-background px-4 py-2 text-sm font-bold text-muted-foreground">
            The build system behind the empire — now shipping to you
          </p>
          <h1 className="max-w-5xl text-5xl font-bold tracking-normal text-foreground md:text-7xl">
            Build faster with Gio Labs&apos; production-tested templates, kits, and agent tools
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Browse Next.js templates, reusable UI kits, free tools, and agent-ready operating prompts drawn from the stack running Joe Galifi and JTG Ventures.
          </p>
          <form action="/templates" className="relative mt-10 w-full max-w-2xl">
            <Search className="absolute left-5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
            <input
              name="q"
              placeholder="What are you looking for?"
              className="h-16 w-full rounded-full border bg-background pl-14 pr-20 text-base outline-none transition focus:ring-4 focus:ring-ring/10"
            />
            <button className="absolute right-2 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground" aria-label="Search">
              <Search className="size-5" />
            </button>
          </form>
        </div>
      </section>
      <ProductExplorer products={catalog} />
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground md:px-12">
          <h2 className="text-3xl font-bold md:text-5xl">Get notified when we ship new templates.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 opacity-80">
            New Gio Labs drops include full repo systems, free UI primitives, and operator prompt packs for people building real companies.
          </p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-full bg-background p-2 md:flex-row">
            <input className="h-12 min-w-0 flex-1 bg-transparent px-5 text-foreground outline-none" placeholder="Enter your email" type="email" />
            <button className="h-12 rounded-full bg-primary px-6 font-bold text-primary-foreground ring-1 ring-primary-foreground/20">Notify me</button>
          </form>
        </div>
      </section>
    </>
  );
}
