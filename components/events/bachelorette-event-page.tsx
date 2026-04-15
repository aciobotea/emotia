import Link from "next/link";
import { Heart, MapPinned, Package, PenSquare } from "lucide-react";
import { PricingInquiryForm } from "@/components/landing/pricing-inquiry-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { pricingPreview } from "@/data/site";

const storyItems = [
  "Povestea miresei",
  "Cum s-au cunoscut mirii",
  "Fotografii și amintiri",
  "Fun facts despre mireasă",
];

const weekendGuideItems = [
  "Destinație & hotel",
  "Programul activităților",
  "Timeline-ul weekendului",
];

const squadItems = [
  "Meet the bridesmaids",
  "Pagini dedicate prietenelor miresei",
];

const gamesItems = [
  "Quiz-uri despre mireasă",
  "Bachelorette bingo",
  "Drink or dare",
  "Bachelorette challenge",
];

const memoriesItems = [
  "Mesaje pentru mireasă",
  "Pagini unde fiecare poate scrie amintiri din weekend",
];

const specifications = [
  "Format A5",
  "36 de pagini",
  "Hârtie premium",
  "Copertă glossy",
  "Layout editorial, tip revistă reală",
];

export function BacheloretteEventPage() {
  return (
    <main className="flex-1">
      <section className="px-6 pb-16 pt-12 lg:px-10 lg:pb-24 lg:pt-18">
        <div className="mx-auto max-w-[88rem]">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/55 bg-[linear-gradient(145deg,rgba(255,249,251,0.98),rgba(245,228,234,0.9),rgba(234,204,216,0.78))] shadow-[0_32px_110px_rgba(91,35,56,0.14)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.76),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(197,84,119,0.18),transparent_26%)]" />

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
                  Revista bachelorette
                </p>
                <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.96] text-olive-deep sm:text-6xl lg:text-7xl">
                  Revista weekendului vostru, într-un format fun și premium.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-olive-deep/72">
                  Un mod original de a aduna povestea miresei, amintirile voastre și
                  tot ce face weekendul bachelorette special.
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
                  <p className="font-display text-[2.1rem] italic leading-tight text-gold">
                    Un mix de ghid, cadou și suvenir pentru un weekend pe care nu îl uiți.
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
                  <source src="/bachelorette/bachelorette-cover.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(112,24,52,0.44),rgba(151,58,89,0.22),rgba(208,170,152,0.14))]" />
                <div className="absolute inset-8 rounded-[2.3rem] border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]" />
                <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
                  <span className="self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-ivory">
                    Preview editorial
                  </span>

                  <div className="ml-auto max-w-md rounded-[2rem] border border-white/18 bg-white/10 p-6 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ivory/70">
                      Pentru mireasă și pentru fete
                    </p>
                    <p className="mt-4 font-display text-4xl leading-tight text-ivory">
                      Personală, jucăușă și suficient de bine construită cât să rămână.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-[88rem] overflow-hidden rounded-[3rem] border border-white/60 bg-[#ead6aa] shadow-[0_24px_75px_rgba(91,35,56,0.09)]">
          <div className="grid gap-px lg:grid-cols-2">
            <div className="bg-[linear-gradient(145deg,rgba(255,249,251,0.96),rgba(246,229,235,0.84),rgba(235,206,217,0.72))] p-8 lg:min-h-[26rem] lg:p-12">
              <h2 className="max-w-xl font-display text-4xl leading-tight text-olive-deep sm:text-5xl">
                Ce este?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-9 text-olive-deep/76">
                Revista Bachelorette este o revistă A5 personalizată creată pentru
                weekendul fetelor. Adună povestea miresei, amintirile voastre și toate
                momentele care fac acest weekend special.
              </p>
            </div>

            <div className="bg-[linear-gradient(145deg,rgba(112,24,52,0.96),rgba(151,58,89,0.84),rgba(220,146,171,0.68))] p-8 lg:min-h-[26rem] lg:p-12">
              <h2 className="max-w-xl font-display text-4xl leading-tight text-ivory sm:text-5xl">
                De ce funcționează atât de bine?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-9 text-ivory/82">
                Devine atât ghidul weekendului, cu programul și activitățile pregătite
                pentru mireasă, cât și un suvenir unic pe care îl veți răsfoi mult timp după.
              </p>
              <p className="mt-8 max-w-xl text-base leading-8 text-ivory/78">
                Poate fi pregătită ca surpriză pentru mireasă sau pentru întregul grup de fete.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[88rem] rounded-[3rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,252,246,0.96),rgba(233,225,213,0.86),rgba(205,187,160,0.72))] p-8 shadow-[0_28px_90px_rgba(91,35,56,0.12)] lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-wine">
                Experiența
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-olive-deep sm:text-5xl">
                Arată ca o revistă reală, dar spune povestea voastră.
              </h2>
            </div>

            <div className="grid gap-8 border-t border-white/55 pt-8 md:grid-cols-2">
              <div className="md:pr-6 md:border-r md:border-white/45">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mocha">
                  Pentru grup
                </p>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Ține toate fetele în același flow al weekendului, cu program,
                  activități, inside jokes și pagini care dau energie întregii experiențe.
                </p>
              </div>
              <div className="md:pl-2">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mocha">
                  Pentru mireasă
                </p>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Rămâne un suvenir personal, construit din fotografii, mesaje și
                  amintirile fetelor ei.
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
              Revista include 36 de pagini personalizate, create din fotografiile și
              povestea voastră.
            </p>

            <Card className="mt-6 rounded-[2.4rem] border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,239,214,0.78))] shadow-[0_20px_60px_rgba(91,35,56,0.1)]">
              <CardContent className="p-8 lg:p-10">
                <h2 className="font-display text-[2.8rem] font-semibold leading-tight text-olive-deep">
                  Ce conține?
                </h2>

                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="font-display text-3xl text-olive-deep">Povestea miresei</h3>
                    <div className="mt-4 grid gap-3">
                      {storyItems.map((item) => (
                        <div
                          key={item}
                          className="border-b border-white/55 py-4 text-base text-olive-deep/76 last:border-b-0"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-base leading-8 text-olive-deep/70">
                      Aceste pagini introduc povestea și creează contextul weekendului.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl text-olive-deep">Ghidul weekendului</h3>
                    <p className="mt-3 text-base leading-8 text-olive-deep/72">
                      Revista funcționează și ca un mic ghid al weekendului bachelorette.
                    </p>
                    <div className="mt-4 grid gap-3">
                      {weekendGuideItems.map((item) => (
                        <div
                          key={item}
                          className="border-b border-white/55 py-4 text-base text-olive-deep/76 last:border-b-0"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-base leading-8 text-olive-deep/70">
                      Astfel, toate fetele știu exact ce urmează în fiecare moment al weekendului.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl text-olive-deep">Bride squad</h3>
                    <div className="mt-4 grid gap-3">
                      {squadItems.map((item) => (
                        <div
                          key={item}
                          className="border-b border-white/55 py-4 text-base text-olive-deep/76 last:border-b-0"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl text-olive-deep">
                      Jocuri & activități pentru weekend
                    </h3>
                    <p className="mt-3 text-base leading-8 text-olive-deep/72">
                      Revista include și pagini interactive care transformă weekendul într-o experiență memorabilă.
                    </p>
                    <div className="mt-4 grid gap-3">
                      {gamesItems.map((item) => (
                        <div
                          key={item}
                          className="border-b border-white/55 py-4 text-base text-olive-deep/76 last:border-b-0"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-base leading-8 text-olive-deep/70">
                      Aceste pagini sunt perfecte pentru momentele de distracție din weekend.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl text-olive-deep">Mesaje & amintiri</h3>
                    <div className="mt-4 grid gap-3">
                      {memoriesItems.map((item) => (
                        <div
                          key={item}
                          className="border-b border-white/55 py-4 text-base text-olive-deep/76 last:border-b-0"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-base leading-8 text-olive-deep/70">
                      Acestea transformă revista într-un suvenir pe care mireasa îl va păstra mult timp.
                    </p>
                  </div>
                </div>
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
                  Revista este construită integral din conținutul vostru: fotografii,
                  texte, program, jocuri și detalii despre mireasă.
                </p>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Rezultatul rămâne personal și coerent, fără să pară improvizat sau generic.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-[2.4rem] border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,239,214,0.78))] shadow-[0_20px_60px_rgba(91,35,56,0.1)]">
              <CardContent className="p-8 lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(232,223,211,0.82))] text-gold shadow-[0_10px_24px_rgba(139,31,65,0.16)]">
                  <MapPinned className="h-6 w-6" strokeWidth={1.85} />
                </div>
                <h2 className="mt-8 font-display text-4xl leading-tight text-olive-deep">
                  Cum se folosește
                </h2>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Poate fi oferită la începutul weekendului, ca welcome piece pentru grup,
                  sau pregătită ca surpriză pentru mireasă.
                </p>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Funcționează atât ca ghid practic, cât și ca amintire fun și premium.
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
                      className="border-b border-white/55 py-4 text-base text-olive-deep/76 last:border-b-0"
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
                De la o singură revistă pentru mireasă până la exemplare pentru întregul grup —?
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
              Prețuri orientative pentru revista bachelorette
            </h2>
            <p className="mt-4 text-base leading-7 text-paper/72 sm:text-lg">
              Costul depinde de numărul de exemplare și de specificul revistei. Poți
              comanda orice volum —? de la un exemplar până la reviste pentru întregul grup.
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
