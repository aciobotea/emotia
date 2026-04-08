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
      "Fiecare revistă pornește din povestea ta — nimic standard, nimic repetat.",
    icon: BookHeart,
    accent: "Poveste personală",
  },
  {
    title: "Rămâne peste ani",
    description:
      "Nu e un cadou de moment, ci ceva ce vei răsfoi din nou.",
    icon: Gem,
    accent: "Păstrată în timp",
  },
];

export function PremiumBenefitsSection() {
  return (
    <section id="benefits" className="relative overflow-hidden px-6 py-16 lg:px-10 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(176,138,82,0.42),transparent)]" />
      <div className="absolute left-1/2 top-10 h-52 w-52 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,244,225,0.78),transparent_68%)] blur-2xl" />

      <div className="mx-auto max-w-[88rem]">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/55 bg-[linear-gradient(135deg,rgba(255,251,245,0.95),rgba(239,225,205,0.84)_45%,rgba(222,203,177,0.74))] px-6 py-8 shadow-[0_30px_90px_rgba(92,69,49,0.12)] sm:px-8 lg:px-10 lg:py-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.72),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(176,138,82,0.16),transparent_28%)]" />
          <div className="absolute right-8 top-8 hidden h-28 w-28 rounded-full border border-white/45 bg-white/18 blur-[1px] lg:block" />

          <div className="relative">
            <div className="max-w-3xl">
              <h2 className="font-display text-4xl leading-none text-ink sm:text-5xl">
                Nu e doar un cadou.
                <br />
                E ceva ce rămâne.
              </h2>
              <p className="mt-5 text-base leading-8 text-olive-deep/72 sm:text-lg">
                Transformăm fotografiile, mesajele și amintirile tale într-o revistă
                personalizată — creată pentru moment și păstrată mult după el.
              </p>
            </div>

            <div className="mt-10 grid gap-5 xl:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <Card
                    key={benefit.title}
                    className="relative overflow-hidden rounded-[2.1rem] border-white/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,248,240,0.52))] shadow-[0_24px_55px_rgba(96,74,54,0.1)] backdrop-blur-sm"
                  >
                    <CardContent className="p-7 lg:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,237,222,0.68))] text-gold shadow-[0_10px_25px_rgba(176,138,82,0.18)]">
                          <Icon className="h-6 w-6" strokeWidth={1.8} />
                        </div>
                        <span className="rounded-full border border-white/60 bg-white/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-mocha">
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
