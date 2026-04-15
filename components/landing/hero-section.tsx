import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-10 lg:px-10 lg:pb-18 lg:pt-14">
      <div className="absolute inset-x-0 top-6 -z-10 mx-auto h-80 max-w-6xl rounded-full bg-sand/85 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <Card className="overflow-hidden rounded-[2.75rem] bg-[linear-gradient(145deg,rgba(255,253,247,0.96),rgba(235,227,215,0.82),rgba(203,186,160,0.58))] shadow-[0_24px_70px_rgba(115,20,53,0.1)]">
          <CardContent className="grid gap-0 p-0 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-14">
              <div>
                <Badge
                  variant="outline"
                  className="border-0 bg-[rgba(255,252,244,0.78)] px-4 py-1.5 uppercase tracking-[0.35em] text-mocha"
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
                  className="bg-[linear-gradient(180deg,#c43868,#8f173d)] px-7 text-white shadow-[0_14px_32px_rgba(139,31,65,0.32)] hover:bg-[linear-gradient(180deg,#cf4d78,#a41f4f)]"
                >
                  <Link href="/#events">Descoperă colecțiile</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-0 bg-[linear-gradient(180deg,#fffdf4,#e6dbc8)] px-7 text-olive-deep shadow-[0_8px_20px_rgba(126,88,24,0.12)] hover:bg-[linear-gradient(180deg,#fffdf8,#d8c4a6)]"
                >
                  <Link href="/#pricing">Cere ofertă</Link>
                </Button>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden lg:min-h-[640px]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/homepage2/cover-2.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(50,24,34,0.04),rgba(50,24,34,0.12))]" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
