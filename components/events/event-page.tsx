import Link from "next/link";
import type { EventItem } from "@/data/site";
import { EventGallery } from "@/components/events/event-gallery";
import { PricingGrid } from "@/components/events/pricing-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type EventPageProps = {
  event: EventItem;
};

export function EventPage({ event }: EventPageProps) {
  return (
    <main className="flex-1">
      <section className="px-6 pb-14 pt-12 lg:px-10 lg:pb-20 lg:pt-18">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
          <div>
            <Button
              asChild
              variant="outline"
              className="bg-white/80 text-ink/75 hover:border-wine/30 hover:text-ink"
            >
              <Link href="/">Back to landing page</Link>
            </Button>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.36em] text-wine">
              {event.shortName}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-6xl leading-[0.94] text-ink sm:text-7xl">
              {event.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
              {event.intro}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink/62">
              {event.audience}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {event.heroStats.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="border-wine/14 bg-white/72 px-4 py-2 text-sm text-ink/76"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <Card className="rounded-[2.4rem] border-white/80 bg-white/82 shadow-[0_20px_70px_rgba(107,75,66,0.11)]">
            <CardContent className="p-8">
              <div className="grid gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-wine">
                    Included
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-ink/72">
                    {event.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <Separator orientation="vertical" className="hidden sm:block" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-wine">
                    Best suited for
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-ink/72">
                    {event.idealFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-10 lg:py-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-4">
          {event.timeline.map((step, index) => (
            <Card
              key={step}
              className="rounded-[2rem] border border-white/80 bg-gradient-to-br from-white to-sand/45 p-6 shadow-[0_12px_45px_rgba(114,83,73,0.08)]"
            >
              <CardContent className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-wine">
                  Step {index + 1}
                </p>
                <p className="mt-4 text-base leading-7 text-ink/74">{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <EventGallery event={event} />
      <PricingGrid event={event} />

      <section className="px-6 pb-20 pt-4 lg:px-10 lg:pb-28">
        <Card className="mx-auto max-w-7xl rounded-[2.4rem] border-white/80 bg-white/82 shadow-[0_18px_55px_rgba(98,70,61,0.08)]">
          <CardContent className="flex flex-col items-start justify-between gap-6 p-8 lg:flex-row lg:items-center lg:p-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-wine">
                Next step
              </p>
              <h2 className="mt-3 font-display text-4xl text-ink">
                Ready to build your {event.shortName.toLowerCase()} issue?
              </h2>
              <p className="mt-4 text-base leading-7 text-ink/70">
                This page is structured to show the concept, visuals, and pricing
                clearly. If you want, the next step can be adding a contact form,
                WhatsApp CTA, or inquiry flow.
              </p>
            </div>

            <Button asChild>
              <Link href="/#reviews">Back to reviews</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
