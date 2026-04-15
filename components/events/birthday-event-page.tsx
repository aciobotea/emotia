import Image from "next/image";
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
          <div className="relative overflow-hidden rounded-[3rem] border border-white/55 bg-[linear-gradient(145deg,rgba(255,252,246,0.98),rgba(245,235,207,0.9),rgba(227,199,141,0.78))] shadow-[0_32px_110px_rgba(91,35,56,0.14)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.76),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(183,154,115,0.14),transparent_26%)]" />

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
                    className="bg-[linear-gradient(180deg,#c5ab86,#9f7f56)] px-7 text-white shadow-[0_12px_30px_rgba(126,88,24,0.24)] hover:bg-[linear-gradient(180deg,#cfb798,#af8b60)]"
                  >
                    <Link href="#pricing-inquiry">Creează revista ta</Link>
                  </Button>
                </div>

                <div className="mt-14 max-w-2xl rounded-[2rem] border border-white/60 bg-white/42 p-6 shadow-[0_16px_38px_rgba(91,35,56,0.08)] backdrop-blur-sm">
                  <p className="font-display text-[2.1rem] italic leading-tight text-gold">
                    O surpriză emoționantă pentru acum și un suvenir pentru peste ani.
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
                  <source src="/birthday/birthday-cover.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(72,18,38,0.04),rgba(72,18,38,0.12))]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-[88rem] overflow-hidden rounded-[3rem] border border-white/60 bg-[#ead6aa] shadow-[0_24px_75px_rgba(91,35,56,0.09)]">
          <div className="grid gap-px lg:grid-cols-2">
            <div className="bg-[linear-gradient(145deg,rgba(255,252,246,0.96),rgba(233,225,213,0.86),rgba(205,187,160,0.72))] p-8 lg:min-h-[26rem] lg:p-12">
              <h2 className="max-w-xl font-display text-4xl leading-tight text-olive-deep sm:text-5xl">
                Ce este?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-9 text-olive-deep/76">
                Revista de Zi de Naștere este o revistă A5 personalizată creată pentru
                a celebra o persoană specială și povestea ei.
              </p>
              <p className="mt-6 max-w-xl text-base leading-8 text-olive-deep/72">
                Este un cadou original care adună fotografii, amintiri și mesaje într-un
                format elegant, tipărit, exact ca o revistă reală.
              </p>
            </div>

            <div className="bg-[linear-gradient(145deg,rgba(108,24,50,0.96),rgba(146,55,85,0.84),rgba(214,175,99,0.56))] p-8 lg:min-h-[26rem] lg:p-12">
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

      <section className="px-6 py-8 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.38em] text-mocha/72">
            Emoție, culoare, amintiri
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[3/4] min-h-[27rem] overflow-hidden rounded-[2.2rem]">
              <Image
                src="/birthday/birthday-photo-1.jpg"
                alt="Detaliu editorial din revista de zi de naștere."
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 31vw"
              />
            </div>

            <div className="relative aspect-[3/4] min-h-[27rem] overflow-hidden rounded-[2.2rem]">
                <Image
                  src="/birthday/birthday-photo-5.jpg"
                  alt="Revista de zi de naștere surprinsă în lumină naturală."
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 31vw"
                />
              </div>
              <div className="relative aspect-[3/4] min-h-[27rem] overflow-hidden rounded-[2.2rem] sm:col-span-2 lg:col-span-1">
                <Image
                  src="/birthday/birthday-photo-3.jpg"
                  alt="Cadru cu revista de zi de naștere și fotografiile din interior."
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 31vw"
                />
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
                Arată ca o revistă reală, dar spune povestea ei.
              </h2>
            </div>

            <div className="grid gap-8 border-t border-white/55 pt-8 md:grid-cols-2">
              <div className="md:pr-6 md:border-r md:border-white/45">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mocha">
                  Pentru ea
                </p>
                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  Primește un cadou construit din amintiri, oameni dragi și momente care îi definesc viața.
                </p>
              </div>
              <div className="md:pl-2">
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

            <Card className="mt-8 rounded-[2rem] bg-white/54 shadow-none">
              <CardContent className="p-6 lg:p-8">
                <h2 className="font-display text-[2.25rem] font-semibold leading-tight text-olive-deep sm:text-[2.55rem]">
                  Ce conține?
                </h2>

                <p className="mt-4 text-base leading-8 text-olive-deep/74">
                  În paginile ei se regăsesc:
                </p>

                <div className="mt-8 grid gap-3">
                  {contentItems.map((item) => (
                    <div
                      key={item}
                      className="py-2.5 text-[15px] leading-7 text-olive-deep/76"
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
            <Card className="rounded-[2rem] bg-white/44 shadow-none">
              <CardContent className="p-6 lg:p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/62 text-gold shadow-none">
                  <Heart className="h-6 w-6" strokeWidth={1.85} />
                </div>
                <h2 className="mt-5 font-display text-3xl leading-tight text-olive-deep">
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

            <Card className="rounded-[2rem] bg-white/44 shadow-none">
              <CardContent className="p-6 lg:p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/62 text-gold shadow-none">
                  <Gift className="h-6 w-6" strokeWidth={1.85} />
                </div>
                <h2 className="mt-5 font-display text-3xl leading-tight text-olive-deep">
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

            <Card className="rounded-[2rem] bg-white/44 shadow-none">
              <CardContent className="p-6 lg:p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/62 text-gold shadow-none">
                  <PenSquare className="h-6 w-6" strokeWidth={1.85} />
                </div>
                <h2 className="mt-5 font-display text-3xl leading-tight text-olive-deep">
                  Specificații
                </h2>
                <div className="mt-8 grid gap-3">
                  {specifications.map((item) => (
                    <div
                      key={item}
                      className="py-2.5 text-[15px] leading-7 text-olive-deep/76"
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

      <section className="px-6 py-6 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 xl:gap-10">
            <div className="relative aspect-[3/4] min-h-[20rem] overflow-hidden rounded-[2rem] xl:min-h-[22rem]">
              <Image
                src="/birthday/birthday-photo-4.jpg"
                alt="Pagină din revista de zi de naștere cu layout editorial."
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 18vw"
              />
            </div>
            <div className="relative aspect-[3/4] min-h-[20rem] overflow-hidden rounded-[2rem] xl:min-h-[22rem]">
              <Image
                src="/birthday/birthday-photo-8.jpg"
                alt="Detaliu foto din revista de zi de naștere."
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 18vw"
              />
            </div>
            <div className="relative aspect-[3/4] min-h-[20rem] overflow-hidden rounded-[2rem] xl:min-h-[22rem]">
              <Image
                src="/birthday/birthday-photo-6.jpg"
                alt="Alt cadru cu revista de zi de naștere și paginile ei."
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 18vw"
              />
            </div>
            <div className="relative aspect-[3/4] min-h-[20rem] overflow-hidden rounded-[2rem] xl:min-h-[22rem]">
              <Image
                src="/birthday/birthday-photo-7.jpg"
                alt="Revista de zi de naștere fotografiată editorial."
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 18vw"
              />
            </div>
            <div className="relative aspect-[3/4] min-h-[20rem] overflow-hidden rounded-[2rem] xl:min-h-[22rem]">
              <Image
                src="/birthday/birthday-photo-9.jpg"
                alt="Detaliu editorial din revista de zi de naÈ™tere."
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 18vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[88rem] rounded-[3rem] border border-white/60 bg-[linear-gradient(145deg,rgba(255,252,246,0.96),rgba(233,225,213,0.86),rgba(205,187,160,0.72))] p-8 shadow-[0_28px_90px_rgba(91,35,56,0.12)] lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/62 text-gold shadow-none">
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
                De la o singură revistă oferită cadou până la exemplare pentru întreaga celebrare,
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
              Prețuri orientative pentru revista de zi de naștere
            </h2>
            <p className="mt-4 text-base leading-7 text-paper/72 sm:text-lg">
              Costul depinde de numărul de exemplare și de specificul revistei. Poți
              comanda orice volum, de la un exemplar până la reviste pentru întreaga celebrare.
            </p>
          </div>

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.35em] text-paper/60">
            Prețuri orientative
          </p>

          <div className="-mx-8 mt-4 grid auto-cols-[8.5rem] grid-flow-col gap-3 overflow-x-auto px-8 pb-3 [scrollbar-width:none] md:mx-0 md:grid-flow-row md:grid-cols-4 md:gap-4 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
            {pricingPreview.map((tier) => (
              <Card
                key={tier.quantity}
                className="rounded-[1.4rem] border border-white/10 bg-white/6 p-3 md:rounded-[1.75rem] md:p-5"
              >
                <CardContent className="p-3 md:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/65 md:text-xs md:tracking-[0.28em]">
                    {tier.quantity}
                  </p>
                  <p className="mt-2 font-display text-2xl text-paper md:mt-4 md:text-4xl">{tier.price}</p>
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
