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
        <div className="relative overflow-hidden rounded-[2.7rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,252,246,0.96),rgba(240,228,210,0.86),rgba(224,205,180,0.74))] p-7 shadow-[0_28px_85px_rgba(96,74,54,0.11)] sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(176,138,82,0.14),transparent_28%)]" />

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
                    className="overflow-hidden rounded-[2rem] border-white/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(250,243,235,0.58))] shadow-[0_22px_52px_rgba(96,74,54,0.09)]"
                  >
                    <CardContent className="flex flex-col gap-6 p-7 lg:flex-row lg:items-start lg:justify-between lg:p-8">
                      <div className="flex gap-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.15rem] border border-white/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,236,222,0.68))] text-gold shadow-[0_10px_24px_rgba(176,138,82,0.16)]">
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

                      <span className="self-start rounded-full border border-white/65 bg-white/55 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-mocha">
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
