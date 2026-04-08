import Link from "next/link";

const links = [
  { href: "/#how-it-works", label: "Cum funcționează?" },
  { href: "/events/weddings", label: "Revista nunții" },
  { href: "/events/bachelorette", label: "Revista bachelorette" },
  { href: "/events/birthdays", label: "Revista zi de naștere" },
  { href: "/events/anniversaries", label: "Revista aniversare" },
  { href: "/#reviews", label: "Recenzii" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-olive/8 bg-[rgba(255,251,244,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-olive/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(236,226,209,0.72))] text-[10px] font-semibold uppercase tracking-[0.35em] text-olive-deep shadow-[0_8px_24px_rgba(96,74,54,0.08)]">
            EM
          </span>
          <span>
            <span className="font-display text-[2rem] leading-none text-olive-deep">
              Emotia
            </span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.35em] text-mocha/80">
              Reviste personalizate premium
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-olive-deep/68 xl:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-olive">
              {link.label}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}
