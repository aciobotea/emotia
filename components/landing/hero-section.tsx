import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-10 lg:px-10 lg:pb-18 lg:pt-14">
      <div className="absolute inset-x-0 top-6 -z-10 mx-auto h-80 max-w-6xl rounded-full bg-sand/70 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <Card className="overflow-hidden rounded-[2.75rem] border-olive/10 bg-[linear-gradient(145deg,rgba(255,251,244,0.9),rgba(236,226,209,0.64),rgba(223,208,187,0.58))] shadow-[0_28px_95px_rgba(96,74,54,0.12)]">
          <CardContent className="grid gap-0 p-0 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-14">
              <div>
                <Badge
                  variant="outline"
                  className="border-olive/14 bg-[rgba(255,251,244,0.84)] px-4 py-1.5 uppercase tracking-[0.35em] text-mocha"
                >
                  Reviste personalizate premium
                </Badge>
                <h1 className="mt-7 max-w-3xl font-display text-5xl leading-[1.02] text-olive-deep sm:text-6xl lg:text-7xl">
                  Reviste personalizate pentru momentele care contează cu adevărat.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-olive-deep/70">
                  Gândite să păstreze emoția, nu doar imaginile.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-[linear-gradient(180deg,#f5e6d0,#e7cba4)] px-7 text-olive-deep shadow-[0_12px_30px_rgba(176,138,82,0.18)] hover:bg-[linear-gradient(180deg,#f8ebd8,#ead1ae)]"
                >
                  <Link href="/#events">Descoperă colecțiile</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#e4c79f] bg-[linear-gradient(180deg,#fff8ef,#f2dec0)] px-7 text-olive-deep shadow-[0_10px_24px_rgba(176,138,82,0.12)] hover:border-[#dcb887] hover:bg-[linear-gradient(180deg,#fffaf3,#f4e3c7)]"
                >
                  <Link href="/#pricing">Cere ofertă</Link>
                </Button>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden border-t border-olive/10 lg:min-h-[640px] lg:border-l lg:border-t-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_22%),linear-gradient(145deg,rgba(76,53,40,0.96),rgba(130,105,91,0.84),rgba(176,138,82,0.72))]" />
              <video
                className="absolute inset-0 h-full w-full object-cover opacity-18 mix-blend-soft-light"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/hero-cover.mp4" type="video/mp4" />
              </video>
              <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-ivory">
                    Cover video
                  </span>
                  <span className="rounded-full border border-white/14 bg-[rgba(92,68,56,0.32)] px-4 py-2 text-xs font-medium text-ivory/84">
                    Inlocuieste `public/hero-cover.mp4`
                  </span>
                </div>

                <div className="max-w-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-ivory/68">
                    Premium presentation
                  </p>
                  <p className="mt-4 font-display text-4xl leading-tight text-ivory sm:text-5xl">
                    Un cover cinematic, facut sa vanda emotie din primul ecran.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
