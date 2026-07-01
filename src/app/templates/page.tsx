import { ProductExplorer } from "@/components/marketplace/ProductExplorer";
import { catalog } from "@/data/catalog";

type TemplatesPageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
  }>;
};

export default async function TemplatesPage({ searchParams }: TemplatesPageProps) {
  const params = await searchParams;

  return (
    <>
      <section className="border-b bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Marketplace</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-normal text-foreground md:text-6xl">Templates, UI kits, and free tools for operator-grade AI products.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Filter the full Gio Labs launch catalog by category, technology, and delivery type. Every free product includes working code or a real markdown prompt.
          </p>
        </div>
      </section>
      <ProductExplorer products={catalog} mode="index" initialQuery={params.q} initialCategory={params.category ?? "all"} />
    </>
  );
}
