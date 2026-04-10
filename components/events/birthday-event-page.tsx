import Link from "next/link";
import { Gift, Heart, Package, PenSquare } from "lucide-react";
import { PricingInquiryForm } from "@/components/landing/pricing-inquiry-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { pricingPreview } from "@/data/site";

const contentItems = [
  "✨ coperta revistei cu sărbătorita",
  "✨ mesaje și gânduri de la prieteni",
  "✨ momente speciale din viața ei",
  "✨ fotografii cu prietenii și familia",
  "✨ cronologia prieteniei voastre",
  "✨ amintiri din vacanțe și experiențe împreună",
  "✨ hobby-uri și lucruri care o definesc",
  "✨ momente memorabile",
  "✨ pagini dedicate fotografiilor voastre preferate",
];

const specifications = [
  "Format A5",
  "24 de pagini",
  "Hârtie premium",
  "Copertă glossy",
  "Layout editorial, tip revistă reală",
];

export function BirthdayEventPage() {
  return (
    <main className="flex-1">
      <section className="px-6 pb-16 pt-12 lg:px-10 lg:pb-24 lg:pt-18">
        <div className="mx-auto max-w-[88rem]">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/55 bg-[linear-gradient(145deg,rgba(255,249,245,0.98),rgba(243,232,221,0.88),rgba(228,208,191,0.72))] shadow-[0_32px_110px_rgba(104,78,61,0.13)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.76),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(189,147,102,0.18),transparent_26%)]" />

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
                  Revista zi de naștere
                </p>
                <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.96] text-olive-deep sm:text-6xl lg:text-7xl">
                  Un cadou personal, într-un format care rămâne.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-olive-deep/72">
                  Revista de Zi de Naștere adună fotografii, amintiri și mesaje într-un
                  obiect elegant, tipărit, creat pentru o persoană specială.
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
                    O surpriză emoționantă pentru acum și un suvenir pentru peste ani.
                  </p>
                </div>
              </div>

              <div className="relative min-h-[430px] border-t border-white/40 lg:border-l lg:border-t-0 lg:min-h-[720px]">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(108,79,64,0.96),rgba(145,113,91,0.84),rgba(201,169,136,0.62))]" />
                <div className="absolute inset-8 rounded-[2.3rem] border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]" />
                <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
                  <span className="self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-ivory">
                    Preview editorial
                  </span>

                  <div className="ml-auto max-w-md rounded-[2rem] border border-white/18 bg-white/10 p-6 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ivory/70">
                      Pentru cineva drag
                    </p>
                    <p className="mt-4 font-display text-4xl leading-tight text-ivory">
                      Elegantă, emoțională și suficient de personală cât să nu semene cu nimic generic.
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
            <div className="rounded-[2.8rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,250,246,0.95),rgba(245,235,225,0.82),rgba(232,215,198,0.66))] p-8 shadow-[0_24px_75px_rgba(74,18,37,0.08)] lg:min-h-[26rem] lg:p-12">
              <h2 className="max-w-xl font-display text-4xl leading-tight text-olive-deep sm:text-5xl">
                Ce este?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-9 text-olive-deep/76">
                Revista de Zi de Naștere este o revistă A5 personalizată creată pentru
                a celebra o persoană specială și povestea ei.
              </p>
              <p className="mt-6 max-w-xl text-base leading-8 text-olive-deep/72">
                Este un cadou original care adună fotografii, amintiri și mesaje într-un
                format elegant, tipărit — exact ca o revistă reală.
              </p>
            </div>

            <div className="rounded-[2.8rem] border border-white/60 bg-[linear-gradient(145deg,rgba(114,28,54,0.96),rgba(152,76,100,0.84),rgba(207,174,144,0.64))] p-8 shadow-[0_24px_75px_rgba(74,18,37,0.1)] lg:min-h-[26rem] lg:p-12">
              <h2 className="max-w-xl font-display text-4xl leading-tight text-ivory sm:text-5xl">
                De ce funcționează atât de bine?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-9 text-ivory/82">
                În paginile ei prind viață momentele importante, prietenii și
                experiențele care au făcut această persoană cine este astăzi.
              </p>
              <p className="mt-8 max-w-xl text-base leading-8 text-ivory/78">
                Revista devine astfel mai mult decât un cadou: este o surpriză
                emoționantă pentru ziua de naștere și un suvenir pe care îl va putea
                păstra și răsfoi peste ani.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[88rem] rounded-[3rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,250,246,0.95),rgba(244,233,223,0.82),rgba(231,214,198,0.66))] p-8 shadow-[0_28px_90px_rgba(74,18,37,0.11)] lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-wine">
                Experiența
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-olive-deep sm:text-5xl">
                Arată ca o revistă reală, dar spune povestea ei.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[2.1rem] border border-white/70 bg-white/48 p-6 lg:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mocha">
                  Pentru ea
                </p>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Primește un cadou construit din amintiri, oameni dragi și momente care îi definesc viața.
                </p>
              </div>
              <div className="rounded-[2.1rem] border border-white/70 bg-white/48 p-6 lg:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mocha">
                  Pentru voi
                </p>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Reușiți să transformați fotografiile și mesajele voastre într-un obiect cu adevărat personal.
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
              Revista include 24 de pagini personalizate, construite din fotografii,
              amintiri și momente importante din viața sărbătoritei.
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
                  Fiecare pagină este personalizată cu fotografiile și povestea voastră,
                  astfel încât revista devine un cadou cu adevărat personal.
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
                  Fiecare pagină este construită din fotografiile, mesajele și amintirile voastre.
                </p>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Rezultatul nu arată generic, ci ca un cadou făcut exact pentru persoana pe care o sărbătoriți.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-[2.4rem] border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(247,238,227,0.7))] shadow-[0_20px_60px_rgba(74,18,37,0.09)]">
              <CardContent className="p-8 lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,236,222,0.72))] text-gold shadow-[0_10px_24px_rgba(176,138,82,0.16)]">
                  <Gift className="h-6 w-6" strokeWidth={1.85} />
                </div>
                <h2 className="mt-8 font-display text-4xl leading-tight text-olive-deep">
                  Cadou cu sens
                </h2>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Poate fi oferită ca surpriză principală de ziua ei sau integrată în decorul evenimentului.
                </p>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Este genul de cadou care emoționează în momentul în care este primit și rămâne valoros după.
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
        <div className="mx-auto max-w-[88rem] rounded-[3rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,250,246,0.95),rgba(244,233,223,0.82),rgba(231,214,198,0.66))] p-8 shadow-[0_28px_90px_rgba(74,18,37,0.11)] lg:p-12">
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
                De la o singură revistă oferită cadou până la exemplare pentru întreaga celebrare —
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
              Prețuri orientative pentru revista de zi de naștere
            </h2>
            <p className="mt-4 text-base leading-7 text-paper/72 sm:text-lg">
              Costul depinde de numărul de exemplare și de specificul revistei. Poți
              comanda orice volum — de la un exemplar până la reviste pentru întreaga celebrare.
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
