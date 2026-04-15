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
    <header className="sticky top-0 z-30 bg-[rgba(255,253,248,0.92)] shadow-[0_10px_30px_rgba(91,35,56,0.05)] backdrop-blur-xl">
      <div className="bg-[linear-gradient(90deg,#67102c,#8f173d,#c43868)] px-6 py-3.5 text-center text-base font-medium text-white lg:px-10">
        <span className="font-semibold uppercase tracking-[0.24em] text-white/82">
          Promoția lunii aprilie:
        </span>{" "}
        <span className="font-semibold text-white">20% reducere la toate revistele</span>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(250,239,215,0.92))] text-[10px] font-semibold uppercase tracking-[0.35em] text-olive-deep shadow-[0_8px_20px_rgba(126,92,35,0.1)]">
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
