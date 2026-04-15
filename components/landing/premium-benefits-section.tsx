import { BookHeart, Gem, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Creată să impresioneze",
    description:
      "Un obiect care atrage, se răsfoiește și rămâne în mintea celor care îl primesc.",
    icon: Heart,
    accent: "Prezență memorabilă",
  },
  {
    title: "Creată pentru tine",
    description:
      "Fiecare revistă pornește din povestea ta, nimic standard, nimic repetat.",
    icon: BookHeart,
    accent: "Poveste personală",
  },
  {
    title: "Rămâne peste ani",
    description: "Nu e un cadou de moment, ci ceva ce vei răsfoi din nou.",
    icon: Gem,
    accent: "Păstrată în timp",
  },
];

export function PremiumBenefitsSection() {
  return (
    <section id="benefits" className="relative overflow-hidden px-6 py-16 lg:px-10 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(139,31,65,0.42),transparent)]" />
      <div className="absolute left-1/2 top-10 h-52 w-52 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(210,198,182,0.44),transparent_68%)] blur-2xl" />

      <div className="mx-auto max-w-[88rem]">
        <div className="relative overflow-hidden rounded-[2.75rem] bg-[linear-gradient(135deg,rgba(255,252,247,0.96),rgba(237,231,223,0.86)_45%,rgba(208,196,179,0.58))] px-6 py-8 shadow-[0_24px_68px_rgba(91,35,56,0.09)] sm:px-8 lg:px-10 lg:py-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.72),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(183,154,115,0.14),transparent_28%)]" />

          <div className="relative">
            <div className="max-w-3xl">
              <h2 className="font-display text-4xl leading-none text-ink sm:text-5xl">
                Nu e doar un cadou.
                <br />
                E ceva ce rămâne.
              </h2>
              <p className="mt-5 text-base leading-8 text-olive-deep/72 sm:text-lg">
                Transformăm fotografiile, povestea și amintirile tale într-o revistă
                personalizată, un suvenir prețios al momentelor care merită retrăite.
              </p>
            </div>

            <div className="mt-10 grid gap-5 xl:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <Card
                    key={benefit.title}
                    className="relative overflow-hidden rounded-[2.1rem] bg-white/52 shadow-none backdrop-blur-sm"
                  >
                    <CardContent className="p-7 lg:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-white/70 text-gold shadow-[0_8px_18px_rgba(139,31,65,0.1)]">
                          <Icon className="h-6 w-6" strokeWidth={1.8} />
                        </div>
                        <span className="rounded-full bg-white/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-mocha">
                          {benefit.accent}
                        </span>
                      </div>

                      <h3 className="mt-8 font-display text-[2rem] leading-tight text-olive-deep">
                        {benefit.title}
                      </h3>
                      <p className="mt-4 max-w-md text-[15px] leading-8 text-olive-deep/76">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
