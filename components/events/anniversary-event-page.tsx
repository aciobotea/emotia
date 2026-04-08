import Link from "next/link";
import { Heart, PenSquare, Sparkles } from "lucide-react";
import { PricingInquiryForm } from "@/components/landing/pricing-inquiry-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contentItems = [
  "❤️ coperta revistei cu povestea voastră",
  "❤️ momentul în care a început relația",
  "❤️ locul unde v-ați cunoscut",
  "❤️ cronologia relației voastre",
  "❤️ lucrurile care vă definesc ca persoane",
  "❤️ pasiunile voastre",
  "❤️ primele întâlniri și momente speciale",
  "❤️ mesaje și gânduri pentru persoana iubită",
  "❤️ fotografii din momentele voastre preferate",
  "❤️ amintiri din călătorii și experiențe împreună",
  "❤️ lucrurile pe care le iubiți unul la celălalt",
  "❤️ pagini dedicate fotografiilor voastre preferate",
];

const specifications = [
  "Format A5",
  "Aproximativ 24 de pagini",
  "Hârtie premium",
  "Copertă glossy",
  "Layout editorial, tip revistă reală",
];

const anniversaryPricing = [
  { quantity: "1 bucată", price: "129 lei" },
  { quantity: "2 bucăți", price: "209 lei" },
];

export function AnniversaryEventPage() {
  return (
    <main className="flex-1">
      <section className="px-6 pb-16 pt-12 lg:px-10 lg:pb-24 lg:pt-18">
        <div className="mx-auto max-w-[88rem]">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/55 bg-[linear-gradient(145deg,rgba(255,248,247,0.98),rgba(243,231,225,0.88),rgba(226,208,199,0.72))] shadow-[0_32px_110px_rgba(104,74,69,0.13)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.76),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(180,132,118,0.18),transparent_26%)]" />

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
                  Revista aniversării
                </p>
                <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.96] text-olive-deep sm:text-6xl lg:text-7xl">
                  Povestea voastră de iubire, într-un format care rămâne.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-olive-deep/72">
                  Un cadou romantic care adună fotografii, amintiri și momente speciale
                  într-un obiect elegant, tipărit, exact ca o revistă reală.
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

                <div className="mt-14 max-w-2xl rounded-[2rem] border border-white/60 bg-white/42 p-6 shadow-[0_16px_38px_rgba(96,74,54,0.07)] backdrop-blur-sm">
                  <p className="font-display text-[2.1rem] italic leading-tight text-gold">
                    Un gest surprinzător și emoționant pentru persoana iubită.
                  </p>
                </div>
              </div>

              <div className="relative min-h-[430px] border-t border-white/40 lg:border-l lg:border-t-0 lg:min-h-[720px]">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(107,73,68,0.96),rgba(141,102,94,0.84),rgba(198,160,145,0.62))]" />
                <div className="absolute inset-8 rounded-[2.3rem] border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]" />
                <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
                  <span className="self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-ivory">
                    Preview editorial
                  </span>

                  <div className="ml-auto max-w-md rounded-[2rem] border border-white/18 bg-white/10 p-6 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ivory/70">
                      Pentru voi doi
                    </p>
                    <p className="mt-4 font-display text-4xl leading-tight text-ivory">
                      Romantică, personală și construită din lucrurile care contează cu adevărat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2.8rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,249,248,0.95),rgba(245,235,229,0.82),rgba(231,215,208,0.66))] p-8 shadow-[0_24px_75px_rgba(96,74,54,0.08)] lg:min-h-[26rem] lg:p-12">
              <h2 className="max-w-xl font-display text-4xl leading-tight text-olive-deep sm:text-5xl">
                Ce este?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-9 text-olive-deep/76">
                Revista Aniversară de Cuplu este o revistă A5 personalizată creată
                pentru a celebra povestea voastră de iubire.
              </p>
              <p className="mt-6 max-w-xl text-base leading-8 text-olive-deep/72">
                În paginile ei prind viață începuturile voastre, locurile importante,
                momentele care v-au apropiat și lucrurile care vă definesc ca și cuplu.
              </p>
            </div>

            <div className="rounded-[2.8rem] border border-white/60 bg-[linear-gradient(145deg,rgba(112,79,74,0.96),rgba(145,106,98,0.84),rgba(200,163,149,0.64))] p-8 shadow-[0_24px_75px_rgba(96,74,54,0.1)] lg:min-h-[26rem] lg:p-12">
              <h2 className="max-w-xl font-display text-4xl leading-tight text-ivory sm:text-5xl">
                De ce funcționează atât de bine?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-9 text-ivory/82">
                Poate fi oferită cu ocazia aniversării relației, logodnei sau căsătoriei,
                devenind un gest surprinzător și emoționant pentru persoana iubită.
              </p>
              <p className="mt-8 max-w-xl text-base leading-8 text-ivory/78">
                Tipărită pe hârtie premium, cu copertă glossy și layout editorial,
                revista arată și se simte ca o adevărată revistă din librărie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[88rem] rounded-[3rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,249,248,0.95),rgba(244,233,228,0.82),rgba(231,215,208,0.66))] p-8 shadow-[0_28px_90px_rgba(96,74,54,0.11)] lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-wine">
                Experiența
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-olive-deep sm:text-5xl">
                Arată ca o revistă reală, dar păstrează povestea voastră.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[2.1rem] border border-white/70 bg-white/48 p-6 lg:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mocha">
                  Pentru persoana iubită
                </p>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Primește un cadou romantic care vorbește despre voi, nu doar un obiect frumos.
                </p>
              </div>
              <div className="rounded-[2.1rem] border border-white/70 bg-white/48 p-6 lg:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mocha">
                  Pentru relația voastră
                </p>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Păstrează începuturile, călătoriile, momentele și lucrurile care vă definesc în doi.
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
              Revista include aproximativ 24 de pagini personalizate, construite din
              fotografiile și amintirile voastre.
            </p>

            <Card className="mt-6 rounded-[2.4rem] border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(247,238,227,0.7))] shadow-[0_20px_60px_rgba(96,74,54,0.09)]">
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
                  Fiecare pagină este personalizată cu fotografiile și povestea voastră,
                  astfel încât revista devine un cadou profund personal.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="rounded-[2.4rem] border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(247,238,227,0.7))] shadow-[0_20px_60px_rgba(96,74,54,0.09)]">
              <CardContent className="p-8 lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,236,222,0.72))] text-gold shadow-[0_10px_24px_rgba(176,138,82,0.16)]">
                  <Heart className="h-6 w-6" strokeWidth={1.85} />
                </div>
                <h2 className="mt-8 font-display text-4xl leading-tight text-olive-deep">
                  Personalizare
                </h2>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Fiecare revistă este construită din fotografiile, locurile, amintirile și mesajele voastre.
                </p>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Totul este adaptat relației voastre, astfel încât rezultatul să nu semene cu nimic generic.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-[2.4rem] border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(247,238,227,0.7))] shadow-[0_20px_60px_rgba(96,74,54,0.09)]">
              <CardContent className="p-8 lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,236,222,0.72))] text-gold shadow-[0_10px_24px_rgba(176,138,82,0.16)]">
                  <Sparkles className="h-6 w-6" strokeWidth={1.85} />
                </div>
                <h2 className="mt-8 font-display text-4xl leading-tight text-olive-deep">
                  Cadou romantic
                </h2>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Poate fi oferită la aniversarea relației, logodnă sau aniversarea căsătoriei.
                </p>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Este genul de gest care surprinde, emoționează și rămâne valoros în timp.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-[2.4rem] border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(247,238,227,0.7))] shadow-[0_20px_60px_rgba(96,74,54,0.09)]">
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

      <section className="px-6 pb-20 pt-8 lg:px-10 lg:pb-28 lg:pt-10">
        <div className="mx-auto max-w-[88rem] rounded-[2.7rem] border border-wine/10 bg-[linear-gradient(180deg,#5a4136,#463229)] px-8 py-10 text-paper shadow-[0_22px_80px_rgba(78,56,45,0.24)] lg:px-12 lg:py-14">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl leading-none text-paper sm:text-5xl">
              Prețuri orientative pentru revista aniversară
            </h2>
            <p className="mt-4 text-base leading-7 text-paper/72 sm:text-lg">
              Poți comanda un exemplar pentru persoana iubită sau două, ca să păstrați amândoi această amintire specială.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {anniversaryPricing.map((tier) => (
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
            className="mt-10 grid gap-8 rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(108,80,67,0.94),rgba(84,61,53,0.96))] p-6 shadow-[0_18px_50px_rgba(78,56,45,0.18)] lg:grid-cols-[0.78fr_1.22fr] lg:p-8"
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
