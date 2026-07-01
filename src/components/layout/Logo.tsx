import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="text-xl font-bold tracking-normal text-foreground" aria-label="Gio Labs home">
      Gio Labs
    </Link>
  );
}
