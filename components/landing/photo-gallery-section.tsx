import { ImageIcon, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const gallerySlots = [
  {
    label: "Cadru 01",
    note: "Copertă sau fotografie statement",
    className:
      "md:col-span-2 md:row-span-2 min-h-[24rem] bg-[linear-gradient(145deg,rgba(118,88,69,0.94),rgba(176,138,82,0.74),rgba(245,232,214,0.62))]",
  },
  {
    label: "Cadru 02",
    note: "Detalii, texturi, close-up",
    className:
      "min-h-[15rem] bg-[linear-gradient(160deg,rgba(255,252,246,0.96),rgba(232,213,187,0.92),rgba(185,155,117,0.7))]",
  },
  {
    label: "Cadru 03",
    note: "Moment emoțional",
    className:
      "min-h-[15rem] bg-[linear-gradient(160deg,rgba(241,225,207,0.96),rgba(210,183,158,0.84),rgba(116,88,73,0.78))]",
  },
  {
    label: "Cadru 04",
    note: "Pagină interioară sau spread",
    className:
      "min-h-[18rem] md:col-span-2 bg-[linear-gradient(145deg,rgba(255,249,241,0.98),rgba(230,213,194,0.92),rgba(187,158,128,0.7))]",
  },
];

export function PhotoGallerySection() {
  return (
    <section id="gallery" className="px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[88rem]">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="Galerie foto"
              title="O secțiune pregătită pentru imaginile care trebuie să vândă atmosfera."
              description="Am lăsat aici un spațiu editorial în care poți încărca ulterior pozele tale. Layout-ul este gândit să arate premium atât cu fotografii de detaliu, cât și cu cadre mari, emoționale."
            />

            <div className="mt-8 rounded-[2rem] border border-white/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(247,237,225,0.66))] p-6 shadow-[0_18px_45px_rgba(74,18,37,0.08)]">
              <div className="flex items-center gap-3 text-mocha">
                <Sparkles className="h-5 w-5" strokeWidth={1.8} />
                <p className="text-sm font-semibold uppercase tracking-[0.24em]">
                  Pregătită de înlocuire
                </p>
              </div>
              <p className="mt-4 text-[15px] leading-8 text-olive-deep/74">
                Poți înlocui fiecare slot cu imagini reale din produs, detalii de copertă sau cadre din reviste finalizate. Structura rămâne stabilă și după ce adaugi conținutul.
              </p>
            </div>
          </div>

          <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
            {gallerySlots.map((slot) => (
              <div
                key={slot.label}
                className={`group relative overflow-hidden rounded-[2.2rem] border border-white/55 shadow-[0_24px_60px_rgba(74,18,37,0.11)] ${slot.className}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_30%),linear-gradient(180deg,transparent,rgba(74,18,37,0.18))]" />
                <div className="absolute inset-5 rounded-[1.7rem] border border-white/45 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.24)]" />

                <div className="relative flex h-full flex-col justify-between p-6 lg:p-7">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/45 bg-white/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/92">
                      {slot.label}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-[1rem] border border-white/40 bg-white/16 text-white">
                      <ImageIcon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                  </div>

                  <div className="max-w-xs">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/72">
                      Înlocuiește cu fotografia ta
                    </p>
                    <p className="mt-3 font-display text-3xl leading-tight text-white">
                      {slot.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
