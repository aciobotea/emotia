import { pricingPreview } from "@/data/site";
import { Card, CardContent } from "@/components/ui/card";
import { PricingInquiryForm } from "@/components/landing/pricing-inquiry-form";

export function PricingPreviewSection() {
  return (
    <section id="pricing" className="px-6 py-18 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[linear-gradient(180deg,#741833,#531123)] px-8 py-10 text-paper shadow-[0_20px_58px_rgba(91,35,56,0.14)] lg:px-12 lg:py-14">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl leading-none text-paper sm:text-5xl">
            Prețuri adaptate fiecărei comenzi.
          </h2>
          <p className="mt-4 text-base leading-7 text-paper/72 sm:text-lg">
            Costul depinde de numărul de exemplare și de specificul revistei.
            Poți comanda orice volum, de la un exemplar până la reviste pentru
            întregul eveniment.
          </p>
        </div>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.35em] text-paper/60">
          PREȚURI ORIENTATIVE
        </p>

        <div className="-mx-8 mt-4 flex gap-4 overflow-x-auto px-8 pb-3 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
          {pricingPreview.map((tier) => (
            <Card
              key={tier.quantity}
              className="w-[13rem] shrink-0 rounded-[1.75rem] bg-white/7 p-5 shadow-none md:w-auto"
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
          className="mt-10 grid gap-8 rounded-[2.2rem] bg-[linear-gradient(180deg,rgba(123,31,59,0.88),rgba(92,18,41,0.94))] p-6 shadow-[0_14px_36px_rgba(48,10,24,0.16)] lg:grid-cols-[0.78fr_1.22fr] lg:p-8"
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
  );
}
