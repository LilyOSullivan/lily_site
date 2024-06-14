import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="-mt-2 flex h-8 items-center justify-between">
          <Link href="/">
            <h1 className="prose-invert">Lily OS</h1>
          </Link>
          <div className="flex items-center gap-x-4">
            <Link href="/">Nav</Link>
            <Link href="/">Nav</Link>
            <Link href="/">Nav</Link>
            <Link href="/">Nav</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
