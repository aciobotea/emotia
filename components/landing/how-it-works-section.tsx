import { ArrowUpRight, Check, FileText, Images, Package } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Alegi tipul de revistă",
    description:
      "Nuntă, aniversare, zi de naștere sau bachelorette, alegi ce ți se potrivește.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Ne trimiți detaliile",
    description:
      "Primești un formular simplu unde încarci pozele și informațiile despre povestea ta.",
    icon: Images,
  },
  {
    number: "03",
    title: "Creăm revista ta",
    description:
      "Construim fiecare pagină astfel încât să spună povestea ta într-un mod elegant.",
    icon: ArrowUpRight,
  },
  {
    number: "04",
    title: "Primești varianta de preview",
    description:
      "Verifici revista și ne spui dacă vrei modificări.",
    icon: Check,
  },
  {
    number: "05",
    title: "Print și livrare",
    description:
      "După aprobare, revista este tipărită premium și livrată direct la tine.",
    icon: Package,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-6 py-18 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[88rem]">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-wine">
            Cum funcționează?
          </p>
          <h2 className="mt-3 font-display text-4xl leading-none text-ink sm:text-5xl">
            Un proces simplu, gândit să fie fără efort pentru tine.
          </h2>
          <p className="mt-5 text-base leading-8 text-olive-deep/72 sm:text-lg">
            Tu ne dai povestea, noi ne ocupăm de restul, de la concept până la livrare.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto pb-4">
          <div className="flex min-w-max gap-5 xl:grid xl:min-w-0 xl:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={step.number}
                  className="group relative w-[18.5rem] shrink-0 xl:w-auto"
                >
                  {!isLast ? (
                    <div className="absolute left-[calc(100%-1.25rem)] top-12 hidden h-px w-10 bg-[linear-gradient(90deg,rgba(123,31,59,0.68),rgba(123,31,59,0.22))] xl:block" />
                  ) : null}

                  <div
                    className={
                      isLast
                        ? "relative h-full overflow-hidden rounded-[2.2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(123,31,59,0.98),rgba(92,18,41,0.96))] p-6 shadow-[0_24px_65px_rgba(91,35,56,0.24)]"
                        : "relative h-full overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(123,31,59,0.98),rgba(92,18,41,0.96))] p-6 shadow-[0_18px_46px_rgba(91,35,56,0.2)]"
                    }
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_28%)]" />

                    <div className="relative">
                      <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.08))] text-white shadow-[0_10px_25px_rgba(56,10,26,0.22)]">
                          <Icon className="h-5 w-5" strokeWidth={1.85} />
                        </div>
                        <span className="rounded-full border border-white/14 bg-white/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-paper/78">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="mt-10 font-display text-[2rem] leading-tight text-paper">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-[15px] leading-8 text-paper/76">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
