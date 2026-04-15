import Image from "next/image";
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

export function WeddingEventPage() {
  return (
    <main className="flex-1">
      <section className="px-6 pb-16 pt-12 lg:px-10 lg:pb-24 lg:pt-18">
        <div className="mx-auto max-w-[88rem]">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/55 bg-[linear-gradient(145deg,rgba(255,252,246,0.98),rgba(245,235,207,0.9),rgba(227,199,141,0.78))] shadow-[0_32px_110px_rgba(91,35,56,0.14)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.74),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(139,31,65,0.16),transparent_26%)]" />

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
                  Un mod elegant de a spune povestea voastră - o mărturie pentru
                  invitați și pentru voi, peste ani.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[linear-gradient(180deg,#c5ab86,#9f7f56)] px-7 text-white shadow-[0_12px_30px_rgba(126,88,24,0.24)] hover:bg-[linear-gradient(180deg,#cfb798,#af8b60)]"
                  >
                    <Link href="#pricing-inquiry">Creează revista ta</Link>
                  </Button>
                </div>

                <div className="mt-14 max-w-2xl rounded-[2rem] border border-white/60 bg-white/42 p-6 shadow-[0_16px_38px_rgba(91,35,56,0.08)] backdrop-blur-sm">
                  <p className="font-display text-[1.75rem] italic leading-tight text-wine sm:text-[1.95rem]">
                    O mărturie elegantă, creată pentru ziua voastră și păstrată pentru totdeauna.
                  </p>
                </div>
              </div>

              <div className="relative min-h-[430px] border-t border-white/40 lg:border-l lg:border-t-0 lg:min-h-[720px]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/wedding/wedding-cover.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(72,18,38,0.04),rgba(72,18,38,0.12))]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-[88rem]">
          <div className="overflow-hidden rounded-[3.2rem] border border-[#ead6aa] bg-[#ead6aa] shadow-[0_28px_90px_rgba(126,88,24,0.18)]">
            <div className="grid gap-px lg:grid-cols-2">
              <div className="bg-[linear-gradient(145deg,rgba(255,252,246,0.98),rgba(241,233,222,0.92),rgba(214,202,186,0.78))] px-8 py-10 sm:px-10 lg:px-14 lg:py-16">
                <span className="text-xs font-semibold uppercase tracking-[0.34em] text-mocha/72">
                  Revistă de nuntă
                </span>
                <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.04] text-olive-deep sm:text-5xl lg:text-[4.15rem]">
                  Mărturia care nu se uită.
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-9 text-olive-deep/78">
                  Un cadou pe care invitații îl păstrează. O poveste pe care o iau
                  acasă cu ei, dincolo de ziua nunții.
                </p>
                <div className="mt-10">
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#b0936c] bg-[linear-gradient(180deg,#fffdf4,#e7ddce)] px-7 text-olive-deep shadow-[0_12px_28px_rgba(126,88,24,0.16)] hover:border-[#9f7f56] hover:bg-[linear-gradient(180deg,#fffdf8,#d9c9af)]"
                  >
                    <Link href="#pricing-inquiry">Descoperă revista</Link>
                  </Button>
                </div>
              </div>

              <div className="relative min-h-[24rem] overflow-hidden lg:min-h-[38rem]">
                <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.3),transparent_28%),linear-gradient(180deg,rgba(95,60,14,0.04),rgba(95,60,14,0.12))]" />
                <Image
                  src="/wedding/wedding-photo-1.jpg"
                  alt="Revista nunții ținută în mâini, la masă."
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="relative min-h-[24rem] overflow-hidden lg:min-h-[30rem]">
                <Image
                  src="/wedding/wedding-photo-2.jpg"
                  alt="Revista nunții așezată pe masă, în decorul evenimentului."
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="bg-[linear-gradient(145deg,rgba(255,252,246,0.98),rgba(241,233,222,0.92),rgba(214,202,186,0.78))] px-8 py-10 text-left sm:px-10 lg:px-12 lg:py-14">
                <h2 className="max-w-lg font-display text-4xl leading-[1.08] text-olive-deep sm:text-5xl">
                  Mai mult decât un decor.
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-9 text-olive-deep/76">
                  Poate fi oferită ca mărturie sau așezată pe mese, ca parte din
                  experiența evenimentului. Este genul de detaliu pe care oamenii îl
                  răsfoiesc, îl păstrează și și-l amintesc.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-base font-semibold uppercase tracking-[0.42em] text-mocha/72 sm:text-lg">
            Reală, personală, memorabilă
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[28rem] overflow-hidden rounded-[2.8rem] border border-white/60 shadow-[0_24px_75px_rgba(91,35,56,0.11)]">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/wedding/wedding-editorial.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="rounded-[2.8rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,252,246,0.96),rgba(233,225,213,0.86),rgba(205,187,160,0.72))] p-8 shadow-[0_24px_75px_rgba(91,35,56,0.09)] lg:p-12">
              <h2 className="mt-4 max-w-lg font-display text-4xl leading-tight text-olive-deep sm:text-5xl">
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
              <div className="mt-12 grid gap-5 sm:grid-cols-2">
                <div className="relative min-h-[18rem] overflow-hidden rounded-[1.8rem]">
                  <Image
                    src="/wedding/wedding-photo-3.jpg"
                    alt="Invitată ținând revista nunții în mână."
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 24vw"
                  />
                </div>
                <div className="relative min-h-[18rem] overflow-hidden rounded-[1.8rem]">
                  <Image
                    src="/wedding/wedding-photo-4.jpg"
                    alt="Revista nunții așezată în farfurie, cu eticheta de mulțumire."
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 24vw"
                  />
                </div>
                <div className="relative min-h-[18rem] overflow-hidden rounded-[1.8rem]">
                  <Image
                    src="/wedding/wedding-photo-5.jpg"
                    alt="Cadru editorial din revista nunții, detaliu foto."
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 24vw"
                  />
                </div>
                <div className="relative min-h-[18rem] overflow-hidden rounded-[1.8rem]">
                  <Image
                    src="/wedding/wedding-photo-6.jpg"
                    alt="Detaliu din revista nunții, surprins în lumină caldă."
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 24vw"
                  />
                </div>
                <div className="relative min-h-[18rem] overflow-hidden rounded-[1.8rem] sm:col-span-2">
                  <Image
                    src="/wedding/wedding-photo-7.jpg"
                    alt="Încă un cadru din revista nunții, folosit ca accent vizual."
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[88rem] rounded-[3rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,252,246,0.96),rgba(233,225,213,0.86),rgba(205,187,160,0.72))] p-8 shadow-[0_28px_90px_rgba(91,35,56,0.12)] lg:p-12">
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

            <Card className="mt-6 rounded-[2.4rem] border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,239,214,0.78))] shadow-[0_20px_60px_rgba(91,35,56,0.1)]">
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
            <Card className="rounded-[2.4rem] border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,239,214,0.78))] shadow-[0_20px_60px_rgba(91,35,56,0.1)]">
              <CardContent className="p-8 lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(232,223,211,0.82))] text-gold shadow-[0_10px_24px_rgba(139,31,65,0.16)]">
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
                  rezultatul să fie unic, nu există două reviste la fel.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-[2.4rem] border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,239,214,0.78))] shadow-[0_20px_60px_rgba(91,35,56,0.1)]">
              <CardContent className="p-8 lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(232,223,211,0.82))] text-gold shadow-[0_10px_24px_rgba(139,31,65,0.16)]">
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
        <div className="mx-auto max-w-[88rem] rounded-[3rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,252,246,0.96),rgba(233,225,213,0.86),rgba(205,187,160,0.72))] p-8 shadow-[0_28px_90px_rgba(91,35,56,0.12)] lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(232,223,211,0.82))] text-gold shadow-[0_10px_24px_rgba(139,31,65,0.16)]">
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
                De la un exemplar personal până la reviste pentru toți invitații,
                fără limită de volum.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-[linear-gradient(180deg,#c5ab86,#9f7f56)] px-7 text-white shadow-[0_12px_30px_rgba(126,88,24,0.24)] hover:bg-[linear-gradient(180deg,#cfb798,#af8b60)]"
                >
                  <Link href="#pricing-inquiry">Creează revista ta</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#b0936c] bg-[linear-gradient(180deg,#fffdf4,#e6dbc8)] px-7 text-olive-deep shadow-[0_10px_24px_rgba(126,88,24,0.16)] hover:border-[#9f7f56] hover:bg-[linear-gradient(180deg,#fffdf8,#d8c4a6)]"
                >
                  <Link href="#pricing-inquiry">Cere o ofertă</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 pt-8 lg:px-10 lg:pb-28 lg:pt-10">
        <div className="mx-auto max-w-[88rem] rounded-[2.7rem] border border-wine/14 bg-[linear-gradient(180deg,#741833,#531123)] px-8 py-10 text-paper lg:px-12 lg:py-14">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl leading-none text-paper sm:text-5xl">
              Prețuri orientative pentru revista nunții
            </h2>
            <p className="mt-4 text-base leading-7 text-paper/72 sm:text-lg">
              Costul depinde de numărul de exemplare și de specificul revistei. Poți
              comanda orice volum, de la un exemplar până la reviste pentru întregul
              eveniment.
            </p>
          </div>

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.35em] text-paper/60">
            Prețuri orientative
          </p>

          <div className="-mx-8 mt-4 flex gap-4 overflow-x-auto px-8 pb-3 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
            {pricingPreview.map((tier) => (
              <Card
                key={tier.quantity}
                className="w-[13rem] shrink-0 rounded-[1.75rem] border border-white/10 bg-white/6 p-5 md:w-auto"
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
            className="mt-10 grid gap-8 rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(138,32,67,0.94),rgba(90,17,39,0.97))] p-6 lg:grid-cols-[0.78fr_1.22fr] lg:p-8"
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
