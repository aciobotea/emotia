import type { EventItem } from "@/data/site";
import { Card, CardContent } from "@/components/ui/card";

type PricingGridProps = {
  event: EventItem;
};

export function PricingGrid({ event }: PricingGridProps) {
  return (
    <section className="px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-wine/10 bg-[#20181f] p-8 text-paper shadow-[0_24px_90px_rgba(35,20,31,0.24)] lg:p-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-paper/60">
            Pricing for {event.shortName.toLowerCase()}
          </p>
          <h2 className="mt-3 font-display text-5xl text-paper">
            Quantity-based pricing
          </h2>
          <p className="mt-4 text-base leading-7 text-paper/72">
            Pricing changes according to the number of copies you order. This
            makes the format work equally well for intimate gifting and larger
            guest-facing runs.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {event.pricing.map((tier) => (
            <Card
              key={tier.quantity}
              className="rounded-[1.9rem] border border-white/10 bg-white/6 p-6"
            >
              <CardContent className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-paper/58">
                  {tier.quantity}
                </p>
                <p className="mt-4 font-display text-4xl text-paper">{tier.price}</p>
                <p className="mt-3 text-sm leading-6 text-paper/68">{tier.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
