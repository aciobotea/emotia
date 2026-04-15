"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/#how-it-works", label: "Cum funcționează?" },
  { href: "/events/weddings", label: "Revista nunții" },
  { href: "/events/bachelorette", label: "Revista bachelorette" },
  { href: "/events/birthdays", label: "Revista zi de naștere" },
  { href: "/events/anniversaries", label: "Revista aniversare" },
  { href: "/#reviews", label: "Recenzii" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[rgba(255,253,248,0.92)] shadow-[0_10px_30px_rgba(91,35,56,0.05)] backdrop-blur-xl">
      <div className="bg-[linear-gradient(90deg,#67102c,#8f173d,#c43868)] px-6 py-3.5 text-center text-sm font-medium text-white sm:text-base lg:px-10">
        <span className="font-semibold uppercase tracking-[0.24em] text-white/82">
          Promoția lunii aprilie:
        </span>{" "}
        <span className="font-semibold">20% reducere la toate revistele</span>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-4"
          onClick={() => setIsMenuOpen(false)}
        >
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

        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="bg-white/64 text-olive-deep shadow-[0_8px_18px_rgba(91,35,56,0.08)] hover:bg-white xl:hidden"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden px-6 transition-[max-height,opacity] duration-300 xl:hidden ${
          isMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto grid max-w-7xl gap-2 pb-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-[1.25rem] bg-white/58 px-5 py-4 text-sm font-semibold text-olive-deep shadow-[0_8px_18px_rgba(91,35,56,0.05)] transition hover:bg-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
