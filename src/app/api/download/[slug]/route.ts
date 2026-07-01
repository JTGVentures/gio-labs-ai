import JSZip from "jszip";
import { NextResponse } from "next/server";
import { getProductBySlug } from "@/data/catalog";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const product = getProductBySlug(slug);

  if (!product || product.tier === "pro") {
    return NextResponse.json({ error: "Download unavailable" }, { status: 404 });
  }

  if (product.deliveryType === "prompt-md") {
    const body = product.prompt ?? product.files[0]?.content ?? "";
    return new NextResponse(body, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Content-Disposition": `attachment; filename="${product.slug}.md"`,
      },
    });
  }

  const zip = new JSZip();
  for (const file of product.files) {
    zip.file(file.filename, file.content);
  }
  zip.file(
    "README.md",
    `# ${product.title}

${product.description}

Built by Gio Labs.
`,
  );
  zip.file("LICENSE", "MIT License\n\nCopyright (c) 2026 Gio Labs\n");
  const buffer = await zip.generateAsync({ type: "arraybuffer" });

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${product.slug}.zip"`,
    },
  });
}
