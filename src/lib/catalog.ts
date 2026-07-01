import { catalog, categories } from "@/data/catalog";
import type { Product, ProductCategory } from "@/types/product";

export type CatalogFilters = {
  query?: string;
  category?: string;
  technology?: string;
  sort?: string;
  kind?: string;
};

const categorySlugs: Record<string, ProductCategory> = {
  enterprise: "Enterprise Templates",
  "enterprise-templates": "Enterprise Templates",
  design: "Design Templates",
  "design-templates": "Design Templates",
  "ui-kits": "UI Kits",
  "free-tools": "Free Tools",
};

export const categoryToSlug = (category: ProductCategory) => category.toLowerCase().replaceAll(" ", "-");

export const normalizeCategory = (category?: string) => {
  if (!category || category === "all") return undefined;
  const decoded = decodeURIComponent(category).toLowerCase();
  return categorySlugs[decoded] ?? categories.find((item) => item.toLowerCase() === decoded);
};

export function filterCatalog(filters: CatalogFilters = {}, source: Product[] = catalog) {
  const query = filters.query?.trim().toLowerCase();
  const category = normalizeCategory(filters.category);
  const technology = filters.technology?.trim().toLowerCase();
  const kind = filters.kind?.trim().toLowerCase();

  const filtered = source.filter((product) => {
    const haystack = [
      product.title,
      product.shortDescription,
      product.description,
      product.category,
      product.kind,
      ...product.tags,
      ...product.stack,
    ]
      .join(" ")
      .toLowerCase();

    if (query && !haystack.includes(query)) return false;
    if (category && product.category !== category) return false;
    if (technology && technology !== "any" && !product.stack.join(" ").toLowerCase().includes(technology)) return false;
    if (kind && kind !== "all" && product.kind !== kind) return false;
    return true;
  });

  return sortCatalog(filtered, filters.sort);
}

export function sortCatalog(products: Product[], sort = "popular") {
  return [...products].sort((a, b) => {
    if (sort === "newest") return b.createdAt.localeCompare(a.createdAt);
    if (sort === "az") return a.title.localeCompare(b.title);
    if (sort === "free") return Number(a.tier === "pro") - Number(b.tier === "pro");
    return b.popularity - a.popularity;
  });
}

export const technologies = Array.from(new Set(catalog.flatMap((product) => product.stack))).sort();
