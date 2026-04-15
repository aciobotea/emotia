import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { events } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const eventCoverImages: Record<(typeof events)[number]["slug"], string> = {
  weddings: "/homepage/wedding-magazine-cover.png",
  anniversaries: "/homepage/anniversary-magazine-cover-v2.png",
  birthdays: "/homepage/birthday-magazine-cover-v2.png",
  bachelorette: "/homepage/bachelorette-magazine-cover-v2.png",
};

const eventCoverPositions: Record<(typeof events)[number]["slug"], string> = {
  weddings: "object-center",
  anniversaries: "object-[center_22%]",
  birthdays: "object-[center_18%]",
  bachelorette: "object-[center_18%]",
};

export function EventsShowcaseSection() {
  return (
    <section id="events" className="px-6 py-14 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[88rem]">
        <SectionHeading
          eyebrow="Colectii"
          title="Patru moduri de a păstra același lucru: emoția momentului."
          description="Fiecare categorie este creată cu o estetică și o poveste proprie, adaptată evenimentului tău."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {events.map((event) => (
            <Card
              key={event.slug}
              className="group h-full overflow-hidden rounded-[2.15rem] bg-[linear-gradient(180deg,rgba(255,250,252,0.98),rgba(247,224,232,0.78))] shadow-[0_16px_42px_rgba(91,35,56,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(91,35,56,0.13)]"
            >
              <CardContent className="flex h-full flex-col p-0">
                <div className="relative aspect-[4/5] overflow-hidden bg-paper">
                  <Image
                    src={eventCoverImages[event.slug]}
                    alt={`Coperta pentru ${event.name}`}
                    fill
                    className={`${eventCoverPositions[event.slug]} object-cover transition duration-300 group-hover:scale-[1.025]`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="max-w-xl">
                    <h3 className="max-w-[11rem] text-balance font-display text-[2rem] leading-tight text-olive-deep">
                      {event.name}
                    </h3>
                    <p className="mt-5 text-[15px] leading-8 text-olive-deep/72">
                      {event.tagline}
                    </p>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="mt-auto w-fit rounded-full border-0 bg-white/70 px-5 py-2.5 text-sm text-olive-deep shadow-[0_8px_20px_rgba(91,35,56,0.07)] hover:bg-white hover:text-mocha"
                  >
                    <Link href={`/events/${event.slug}`}>Află mai multe</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
