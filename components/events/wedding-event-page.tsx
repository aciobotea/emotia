import Link from "next/link";
import { Heart, Package, PenSquare } from "lucide-react";
import { PricingInquiryForm } from "@/components/landing/pricing-inquiry-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { pricingPreview } from "@/data/site";

const contentItems = [
  "✨ povestea voastră – cum v-ați cunoscut și cum a început totul",
  "✨ cererea în căsătorie și momentele care v-au adus aici",
  "✨ familia și oamenii care v-au fost alături",
  "✨ echipa voastră – domnișoarele și cavalerii de onoare",
  "✨ invitații veniți de departe pentru voi",
  "✨ fotografii din viața voastră împreună",
  "✨ programul nunții și momentele importante ale serii",
  "✨ meniul pregătit pentru invitați",
  "✨ piesa voastră și amintiri speciale",
];

const specifications = [
  "Format A5",
  "24 pagini",
  "Hârtie premium",
  "Copertă glossy",
  "Design editorial, tip revistă reală",
];

const weddingImages = [
  {
    src: "/wedding/IMG_0512.HEIC",
    alt: "Cadru editorial de nuntă 1.",
  },
  {
    src: "/wedding/IMG_0516.HEIC",
    alt: "Cadru editorial de nuntă 2.",
  },
  {
    src: "/wedding/IMG_0520.HEIC",
    alt: "Cadru editorial de nuntă 3.",
  },
  {
    src: "/wedding/IMG_0522.HEIC",
    alt: "Cadru editorial de nuntă 4.",
  },
  {
    src: "/wedding/IMG_0524.HEIC",
    alt: "Cadru editorial de nuntă 5.",
  },
  {
    src: "/wedding/IMG_0526.HEIC",
    alt: "Cadru editorial de nuntă 6.",
  },
];

export function WeddingEventPage() {
  return (
    <main className="flex-1">
      <section className="px-6 pb-16 pt-12 lg:px-10 lg:pb-24 lg:pt-18">
        <div className="mx-auto max-w-[88rem]">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/55 bg-[linear-gradient(145deg,rgba(255,251,245,0.98),rgba(241,229,212,0.88),rgba(224,204,178,0.7))] shadow-[0_32px_110px_rgba(74,18,37,0.13)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.74),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(176,138,82,0.16),transparent_26%)]" />

            <div className="relative grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="p-8 sm:p-10 lg:p-14">
                <Button
                  asChild
                  variant="outline"
                  className="border-olive/14 bg-white/72 text-olive-deep hover:bg-white"
                >
                  <Link href="/">Înapoi la pagina principală</Link>
                </Button>

                <p className="mt-10 text-xs font-semibold uppercase tracking-[0.35em] text-wine">
                  Revista nunții
                </p>
                <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.96] text-olive-deep sm:text-6xl lg:text-7xl">
                  Revista nunții tale, într-un format care rămâne.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-olive-deep/72">
                  Un mod elegant de a spune povestea voastră — pentru invitați și
                  pentru voi, peste ani.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[linear-gradient(180deg,#f5e6d0,#e7cba4)] px-7 text-olive-deep shadow-[0_12px_30px_rgba(176,138,82,0.18)] hover:bg-[linear-gradient(180deg,#f8ebd8,#ead1ae)]"
                  >
                    <Link href="#pricing-inquiry">Creează revista ta</Link>
                  </Button>
                </div>

                <div className="mt-14 max-w-2xl rounded-[2rem] border border-white/60 bg-white/42 p-6 shadow-[0_16px_38px_rgba(74,18,37,0.07)] backdrop-blur-sm">
                  <p className="font-display text-[2.1rem] italic leading-tight text-gold">
                    Un obiect făcut pentru ziua voastră, dar păstrat mult după ea.
                  </p>
                </div>
              </div>

              <div className="relative min-h-[430px] border-t border-white/40 lg:border-l lg:border-t-0 lg:min-h-[720px]">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(92,20,43,0.96),rgba(137,47,76,0.84),rgba(176,138,82,0.72))]" />
                <video
                  className="absolute inset-0 h-full w-full object-cover opacity-52"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                >
                  <source
                    src="/wedding/copy_FDE8F59B-BCB2-4671-9333-D7E65BCA5606.mov"
                    type="video/quicktime"
                  />
                </video>
                <div className="absolute inset-8 rounded-[2.3rem] border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]" />
                <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
                  <span className="self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-ivory">
                    Preview vizual
                  </span>

                  <div className="ml-auto max-w-md rounded-[2rem] border border-white/18 bg-white/10 p-6 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ivory/70">
                      Pentru invitați și pentru voi
                    </p>
                    <p className="mt-4 font-display text-4xl leading-tight text-ivory">
                      Elegantă, personală și gândită să fie răsfoită cu emoție.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="relative min-h-[24rem] overflow-hidden rounded-[2.5rem] border border-white/60 shadow-[0_20px_60px_rgba(74,18,37,0.1)]">
              <img
                src={weddingImages[4].src}
                alt={weddingImages[4].alt}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative min-h-[24rem] overflow-hidden rounded-[2.5rem] border border-white/60 shadow-[0_20px_60px_rgba(74,18,37,0.1)]">
              <img
                src={weddingImages[5].src}
                alt={weddingImages[5].alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2.8rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,251,245,0.94),rgba(244,234,220,0.8),rgba(228,210,187,0.62))] p-8 shadow-[0_24px_75px_rgba(74,18,37,0.08)] lg:min-h-[38rem] lg:p-12">
              <div className="flex h-full flex-col justify-center">
                <h2 className="max-w-xl font-display text-4xl leading-tight text-olive-deep sm:text-5xl">
                  Mărturia care nu se uită.
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-9 text-olive-deep/76">
                  Un cadou pe care invitații îl păstrează. O poveste pe care o iau
                  acasă cu ei, dincolo de ziua nunții.
                </p>
                <div className="mt-8">
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#dec2a0] bg-[linear-gradient(180deg,#fff8ef,#f2dec0)] px-7 text-olive-deep shadow-[0_10px_24px_rgba(176,138,82,0.12)] hover:border-[#dcb887] hover:bg-[linear-gradient(180deg,#fffaf3,#f4e3c7)]"
                  >
                    <Link href="#pricing-inquiry">Descoperă revista</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative min-h-[28rem] overflow-hidden rounded-[2.8rem] border border-white/60 shadow-[0_24px_75px_rgba(74,18,37,0.1)] lg:min-h-[38rem]">
              <img
                src={weddingImages[0].src}
                alt={weddingImages[0].alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="relative min-h-[30rem] overflow-hidden rounded-[2.8rem] border border-white/60 shadow-[0_24px_75px_rgba(74,18,37,0.1)]">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source
                  src="/wedding/copy_1F4CAA26-DF1D-4EF3-83A5-6520C217D7C4.mov"
                  type="video/quicktime"
                />
              </video>
            </div>

            <div className="rounded-[2.8rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,251,245,0.95),rgba(244,233,218,0.82),rgba(228,210,187,0.64))] p-8 text-center shadow-[0_24px_75px_rgba(74,18,37,0.08)] lg:min-h-[30rem] lg:p-12">
              <div className="flex h-full flex-col items-center justify-center">
                <h2 className="max-w-xl font-display text-4xl leading-tight text-olive-deep sm:text-5xl">
                  Mai mult decât un decor.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-9 text-olive-deep/76">
                  Poate fi oferită ca mărturie sau așezată pe mese, ca parte din
                  experiența evenimentului. Este genul de detaliu pe care oamenii îl
                  răsfoiesc, îl păstrează și și-l amintesc.
                </p>
                <p className="mt-10 max-w-lg font-display text-3xl leading-tight text-wine sm:text-[2.35rem]">
                  Se așază pe masă. Se ia acasă. Se păstrează.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[2.8rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,251,245,0.95),rgba(244,233,218,0.82),rgba(228,210,187,0.64))] p-8 shadow-[0_24px_75px_rgba(74,18,37,0.08)] lg:p-12">
              <h2 className="max-w-lg font-display text-4xl leading-tight text-olive-deep sm:text-5xl">
                O mărturie pe care o iei cu tine.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-9 text-olive-deep/76">
                Nu rămâne doar pe masă. Invitații o iau acasă, o răsfoiesc și o
                păstrează ca amintire din ziua voastră.
              </p>
              <p className="mt-10 text-sm uppercase tracking-[0.28em] text-mocha/72">
                reală, personală, memorabilă
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative min-h-[23rem] overflow-hidden rounded-[2.3rem] border border-white/60 shadow-[0_20px_60px_rgba(74,18,37,0.1)]">
                <img
                  src={weddingImages[1].src}
                  alt={weddingImages[1].alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative min-h-[23rem] overflow-hidden rounded-[2.3rem] border border-white/60 shadow-[0_20px_60px_rgba(74,18,37,0.1)]">
                <img
                  src={weddingImages[2].src}
                  alt={weddingImages[2].alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[28rem] overflow-hidden rounded-[2.8rem] border border-white/60 shadow-[0_24px_75px_rgba(74,18,37,0.1)]">
              <img
                src={weddingImages[3].src}
                alt={weddingImages[3].alt}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="rounded-[2.8rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,251,245,0.95),rgba(244,233,218,0.82),rgba(228,210,187,0.64))] p-8 shadow-[0_24px_75px_rgba(74,18,37,0.08)] lg:p-12">
              <h2 className="max-w-lg font-display text-4xl leading-tight text-olive-deep sm:text-5xl">
                O amintire care rămâne.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-9 text-olive-deep/76">
                Pentru invitați este o experiență frumoasă în ziua nunții. Pentru
                voi, rămâne un obiect pe care îl deschideți din nou peste ani.
              </p>
              <p className="mt-8 max-w-lg text-lg leading-9 text-olive-deep/76">
                Revista păstrează fotografiile, povestea și atmosfera voastră într-un
                format real, elegant și personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[88rem] rounded-[3rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,251,245,0.95),rgba(240,228,211,0.82),rgba(223,205,180,0.68))] p-8 shadow-[0_28px_90px_rgba(74,18,37,0.11)] lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-wine">
                Experiența
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-olive-deep sm:text-5xl">
                Pentru invitați este o experiență. Pentru voi, rămâne o amintire.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[2.1rem] border border-white/70 bg-white/48 p-6 lg:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mocha">
                  Pentru invitați
                </p>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Descoperă povestea voastră, momentele și oamenii din jurul vostru
                  într-un format care se simte atent construit.
                </p>
              </div>
              <div className="rounded-[2.1rem] border border-white/70 bg-white/48 p-6 lg:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mocha">
                  Pentru voi
                </p>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Rămâne un suvenir pe care îl veți deschide din nou, peste ani.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-10 lg:py-14">
        <div className="mx-auto grid max-w-[88rem] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="max-w-4xl font-display text-[2.55rem] leading-tight text-wine sm:text-[3rem] lg:text-[3.4rem]">
              Revista include aproximativ 24 de pagini personalizate, create din
              fotografiile și povestea voastră.
            </p>

            <Card className="mt-6 rounded-[2.4rem] border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(247,238,227,0.7))] shadow-[0_20px_60px_rgba(74,18,37,0.09)]">
              <CardContent className="p-8 lg:p-10">
                <h2 className="font-display text-[2.8rem] font-semibold leading-tight text-olive-deep">
                  Ce conține?
                </h2>

                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  În paginile ei se regăsesc:
                </p>

                <div className="mt-8 grid gap-3">
                  {contentItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.5rem] border border-white/70 bg-white/55 px-5 py-4 text-base text-olive-deep/76"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-6 max-w-2xl text-base leading-8 text-olive-deep/70">
                  Fiecare pagină este personalizată cu fotografiile și povestea
                  voastră, astfel încât revista devine un mic univers al nunții
                  voastre.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="rounded-[2.4rem] border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(247,238,227,0.7))] shadow-[0_20px_60px_rgba(74,18,37,0.09)]">
              <CardContent className="p-8 lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,236,222,0.72))] text-gold shadow-[0_10px_24px_rgba(176,138,82,0.16)]">
                  <Heart className="h-6 w-6" strokeWidth={1.85} />
                </div>
                <h2 className="mt-8 font-display text-4xl leading-tight text-olive-deep">
                  Personalizare
                </h2>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Fiecare revistă este construită integral din conținutul vostru.
                </p>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Fotografiile, textele și structura sunt adaptate astfel încât
                  rezultatul să fie unic — nu există două reviste la fel.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-[2.4rem] border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(247,238,227,0.7))] shadow-[0_20px_60px_rgba(74,18,37,0.09)]">
              <CardContent className="p-8 lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,236,222,0.72))] text-gold shadow-[0_10px_24px_rgba(176,138,82,0.16)]">
                  <PenSquare className="h-6 w-6" strokeWidth={1.85} />
                </div>
                <h2 className="mt-8 font-display text-4xl leading-tight text-olive-deep">
                  Specificații
                </h2>
                <div className="mt-8 grid gap-3">
                  {specifications.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.5rem] border border-white/70 bg-white/55 px-5 py-4 text-base text-olive-deep/76"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[88rem] rounded-[3rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,251,245,0.95),rgba(240,228,211,0.82),rgba(223,205,180,0.68))] p-8 shadow-[0_28px_90px_rgba(74,18,37,0.11)] lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,236,222,0.72))] text-gold shadow-[0_10px_24px_rgba(176,138,82,0.16)]">
                <Package className="h-6 w-6" strokeWidth={1.85} />
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-wine">
                Cantitate
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-olive-deep sm:text-5xl">
                Poți comanda exact câte exemplare ai nevoie.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-9 text-olive-deep/76">
              <p>
                De la un exemplar personal până la reviste pentru toți invitații —
                fără limită de volum.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-[linear-gradient(180deg,#f5e6d0,#e7cba4)] px-7 text-olive-deep shadow-[0_12px_30px_rgba(176,138,82,0.18)] hover:bg-[linear-gradient(180deg,#f8ebd8,#ead1ae)]"
                >
                  <Link href="#pricing-inquiry">Creează revista ta</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#e4c79f] bg-[linear-gradient(180deg,#fff8ef,#f2dec0)] px-7 text-olive-deep shadow-[0_10px_24px_rgba(176,138,82,0.12)] hover:border-[#dcb887] hover:bg-[linear-gradient(180deg,#fffaf3,#f4e3c7)]"
                >
                  <Link href="#pricing-inquiry">Cere o ofertă</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 pt-8 lg:px-10 lg:pb-28 lg:pt-10">
        <div className="mx-auto max-w-[88rem] rounded-[2.7rem] border border-wine/10 bg-[linear-gradient(180deg,#6d1e36,#4a1225)] px-8 py-10 text-paper shadow-[0_22px_80px_rgba(74,18,37,0.24)] lg:px-12 lg:py-14">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl leading-none text-paper sm:text-5xl">
              Prețuri orientative pentru revista nunții
            </h2>
            <p className="mt-4 text-base leading-7 text-paper/72 sm:text-lg">
              Costul depinde de numărul de exemplare și de specificul revistei. Poți
              comanda orice volum — de la un exemplar până la reviste pentru întregul
              eveniment.
            </p>
          </div>

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.35em] text-paper/60">
            Prețuri orientative
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-4">
            {pricingPreview.map((tier) => (
              <Card
                key={tier.quantity}
                className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5"
              >
                <CardContent className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-paper/65">
                    {tier.quantity}
                  </p>
                  <p className="mt-4 font-display text-4xl text-paper">{tier.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            id="pricing-inquiry"
            className="mt-10 grid gap-8 rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(122,31,58,0.94),rgba(73,18,35,0.96))] p-6 shadow-[0_18px_50px_rgba(74,18,37,0.18)] lg:grid-cols-[0.78fr_1.22fr] lg:p-8"
          >
            <div className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-paper/58">
                Cerere de ofertă
              </p>
              <h3 className="mt-3 font-display text-4xl leading-none text-paper">
                Spune-ne ce ai în minte și revenim cu o ofertă personalizată.
              </h3>
              <p className="mt-4 text-base leading-8 text-paper/72">
                Completezi câteva detalii esențiale, iar noi îți răspundem cu o
                recomandare potrivită pentru evenimentul, tirajul și direcția ta.
              </p>
            </div>

            <PricingInquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
