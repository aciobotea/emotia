import { Gem, Gift, Heart, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    title: "Vrei un cadou care chiar impresionează",
    description:
      "Nu ceva previzibil, ci un obiect cu emoție și prezență.",
    icon: Gift,
    accent: "IMPACT REAL",
  },
  {
    title: "Vrei ceva personal, nu generic",
    description:
      "Fiecare revistă este construită din povestea ta, fără șabloane.",
    icon: Gem,
    accent: "PERSONALIZARE REALĂ",
  },
  {
    title: "Vrei să creezi un moment, nu doar să oferi ceva",
    description:
      "Un cadou care se trăiește, nu doar se oferă.",
    icon: Sparkles,
    accent: "MOMENT MEMORABIL",
  },
];

export function ForYouSection() {
  return (
    <section className="px-6 py-16 lg:px-10 lg:py-22">
      <div className="mx-auto max-w-[88rem]">
        <div className="relative overflow-hidden rounded-[2.7rem] bg-[linear-gradient(145deg,rgba(255,253,248,0.96),rgba(239,233,225,0.86),rgba(214,202,186,0.62))] p-7 shadow-[0_22px_60px_rgba(91,35,56,0.08)] sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(183,154,115,0.12),transparent_28%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="max-w-xl">
              <SectionHeading
                eyebrow="ALEGE CE ȚI SE POTRIVEȘTE"
                title="Pentru tine, dacă..."
                description="Alegi lucruri cu sens, nu doar obiecte."
              />

              <div className="mt-8">
                <p className="flex items-center gap-3 font-display text-[1.85rem] italic leading-tight text-gold">
                  <Heart className="h-5 w-5 shrink-0" strokeWidth={1.9} />
                  Gândit să rămână.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <Card
                    key={reason.title}
                    className="overflow-hidden rounded-[2rem] bg-white/55 shadow-none"
                  >
                    <CardContent className="flex flex-col gap-6 p-7 lg:flex-row lg:items-start lg:justify-between lg:p-8">
                      <div className="flex gap-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.15rem] bg-white/70 text-gold shadow-[0_8px_18px_rgba(139,31,65,0.1)]">
                          <Icon className="h-6 w-6" strokeWidth={1.85} />
                        </div>
                        <div>
                          <h3 className="font-display text-[2rem] leading-tight text-olive-deep">
                            {reason.title}
                          </h3>
                          <p className="mt-3 max-w-2xl text-[15px] leading-8 text-olive-deep/74">
                            {reason.description}
                          </p>
                        </div>
                      </div>

                      <span className="self-start rounded-full bg-white/55 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-mocha">
                        {reason.accent}
                      </span>
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
