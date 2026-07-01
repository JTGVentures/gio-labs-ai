import type { Product } from "@/types/product";
import { CopyButton } from "@/components/detail/CopyButton";

export function CodePanel({ product }: { product: Product }) {
  if (product.deliveryType === "github") {
    return (
      <div className="rounded-3xl border bg-muted p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Repo delivery</p>
        <h3 className="mt-2 text-2xl font-bold text-foreground">Full project ships through GitHub</h3>
        <p className="mt-3 leading-7 text-muted-foreground">
          This product is a complete system rather than a single snippet. The public detail page stays browsable while Pro delivery is prepared.
        </p>
      </div>
    );
  }

  const files = product.files;
  const copyAll = files.map((file) => `// ${file.filename}\n${file.content}`).join("\n\n");

  return (
    <div className="rounded-3xl border bg-background">
      <div className="flex flex-col gap-4 border-b p-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Included files</p>
          <h3 className="text-2xl font-bold text-foreground">{product.deliveryType === "prompt-md" ? "Prompt markdown" : "Copyable code"}</h3>
        </div>
        <CopyButton text={copyAll} label={product.deliveryType === "prompt-md" ? "Copy Prompt" : "Copy All"} />
      </div>
      <div className="divide-y">
        {files.map((file) => (
          <div key={file.filename}>
            <div className="flex items-center justify-between px-5 py-3">
              <span className="font-mono text-sm font-semibold text-muted-foreground">{file.filename}</span>
              <CopyButton text={file.content} label="Copy" />
            </div>
            <pre className="max-h-[32rem] overflow-auto bg-muted p-5 text-sm leading-6">
              <code>{file.content}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
