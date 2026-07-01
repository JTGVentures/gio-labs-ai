export type ProductCategory =
  | "Enterprise Templates"
  | "Design Templates"
  | "UI Kits"
  | "Free Tools";

export type ProductTier = "free" | "pro";
export type DeliveryType = "code" | "github" | "prompt-md";
export type ProductKind = "template" | "kit" | "tool";

export type ProductFile = {
  filename: string;
  language: "tsx" | "ts" | "md" | "css";
  content: string;
};

export type ProductFeature = {
  title: string;
  description: string;
};

export type ProductStats = {
  downloads: string;
  version: string;
  updated: string;
  commits?: string;
  stars?: string;
  forks?: string;
  watchers?: string;
  issues?: string;
};

export type Product = {
  title: string;
  slug: string;
  category: ProductCategory;
  kind: ProductKind;
  deliveryType: DeliveryType;
  tier: ProductTier;
  shortDescription: string;
  description: string;
  overviewTitle: string;
  overview: string;
  highlights: ProductFeature[];
  features: ProductFeature[];
  checklist: string[];
  tags: string[];
  stack: string[];
  complexity: "Starter" | "Intermediate" | "Advanced";
  popularity: number;
  createdAt: string;
  updatedAt: string;
  files: ProductFile[];
  prompt?: string;
  githubUrl?: string;
  livePreviewLabel?: string;
  stats: ProductStats;
  accent: "slate" | "blue" | "emerald" | "amber" | "violet";
};
