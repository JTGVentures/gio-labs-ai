import { ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { CodePanel } from "@/components/detail/CodePanel";
import { CopyButton } from "@/components/detail/CopyButton";
import { DownloadButton } from "@/components/detail/DownloadButton";
import { ShareButton } from "@/components/detail/ShareButton";
import { PriceBadge } from "@/components/marketplace/PriceBadge";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { ProductVisual } from "@/components/marketplace/ProductVisual";
import { getRelatedProducts } from "@/data/catalog";
import type { Product } from "@/types/product";

export function ProductDetailLayout({ product }: { product: Product }) {
  const related = getRelatedProducts(product);
  const primaryFile = product.files[0]?.content ?? "";
  const statsTitle = product.deliveryType === "github" ? "Repository stats" : "Product stats";

  return (
    <>
      <section className="border-b">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-muted-foreground">
              <span>Built by Gio Labs</span>
              {product.stack.slice(0, 3).map((tech) => (
                <span key={tech} className="rounded-full border px-2.5 py-1">
                  {tech}
                </span>
              ))}
            </div>
            <h1 className="max-w-3xl text-4xl font-bold tracking-normal text-foreground md:text-6xl">{product.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {product.deliveryType === "code" ? <CopyButton text={primaryFile} disabled={product.tier === "pro"} /> : null}
              <DownloadButton product={product} />
              <a href="#overview" className="inline-flex h-11 items-center justify-center gap-2 rounded-full border bg-background px-5 text-sm font-bold text-foreground transition hover:bg-muted">
                Explore <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
          <div className="subtle-stripes rounded-3xl border p-6">
            <ProductVisual product={product} compact />
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto grid max-w-7xl gap-x-14 gap-y-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-3">
          {product.highlights.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <CheckCircle2 className="mt-1 size-5 shrink-0 text-foreground" />
              <div>
                <h2 className="font-bold text-foreground">{feature.title}</h2>
                <p className="mt-1 leading-7 text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="overview" className="border-b">
        <div className="mx-auto grid max-w-7xl gap-0 px-6 lg:grid-cols-[minmax(0,1fr)_28rem]">
          <article className="py-16 pr-0 lg:pr-14">
            <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Overview</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-normal text-foreground md:text-4xl">{product.overviewTitle}</h2>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-muted-foreground">{product.overview}</p>
            <div className="my-10">
              <ProductVisual product={product} compact />
            </div>
            <h3 className="text-xl font-bold text-foreground">Highlights:</h3>
            <ul className="mt-6 space-y-5">
              {product.highlights.slice(0, 5).map((item) => (
                <li key={item.title} className="flex gap-4 text-lg leading-8 text-muted-foreground">
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-border" />
                  <span>
                    <strong className="text-foreground">{item.title}:</strong> {item.description}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg leading-9 text-muted-foreground">
              Every Gio Labs asset is built from real operator patterns used across Joe Galifi, JTG Ventures, and the Gio Labs agent stack.
            </p>
            <div className="mt-12">
              <CodePanel product={product} />
            </div>
          </article>
          <aside className="border-t py-16 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-auto lg:border-l lg:border-t-0 lg:pl-10">
            <div className="space-y-8">
              <section>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground">{statsTitle}</h3>
                  <PriceBadge tier={product.tier} />
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-muted-foreground">
                  <span>Downloads: {product.stats.downloads}</span>
                  <span>Version: {product.stats.version}</span>
                  <span>Updated: {product.stats.updated}</span>
                  <span>Complexity: {product.complexity}</span>
                  {product.stats.stars ? <span>Stars: {product.stats.stars}</span> : null}
                  {product.stats.forks ? <span>Forks: {product.stats.forks}</span> : null}
                  {product.stats.issues ? <span>Issues: {product.stats.issues}</span> : null}
                  {product.stats.commits ? <span>Commits: {product.stats.commits}</span> : null}
                </div>
              </section>
              <section className="border-t pt-8">
                <h3 className="text-lg font-bold text-foreground">Stack</h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {product.stack.map((item) => (
                    <span key={item} className="rounded-full border px-3 py-2 text-sm font-semibold text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </section>
              <section className="border-t pt-8">
                <h3 className="text-lg font-bold text-foreground">Highlights</h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {product.checklist.map((item) => (
                    <span key={item} className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                      <CheckCircle2 className="size-4 text-foreground" />
                      {item}
                    </span>
                  ))}
                </div>
              </section>
              <section className="border-t pt-8">
                <h3 className="text-lg font-bold text-foreground">Tags</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="rounded-full border px-3 py-1.5 text-sm font-medium text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
              <section className="border-t pt-8">
                <h3 className="text-lg font-bold text-foreground">Share</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ShareButton />
                  <a className="inline-flex size-10 items-center justify-center rounded-full border" href="https://x.com" target="_blank" rel="noreferrer" aria-label="Share on X">
                    <span className="text-sm font-bold">X</span>
                  </a>
                  <a className="inline-flex size-10 items-center justify-center rounded-full border" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Share on LinkedIn">
                    <span className="text-sm font-bold">in</span>
                  </a>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-foreground">You may also like</h2>
          <Link href="/templates" className="inline-flex items-center gap-2 text-sm font-bold text-foreground">
            View all kits <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </>
  );
}
