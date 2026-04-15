import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { events } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
          {events.map((event, index) => (
            <Card
              key={event.slug}
              className="group h-full overflow-hidden rounded-[2.15rem] border-wine/12 bg-[linear-gradient(180deg,rgba(255,250,252,0.98),rgba(247,224,232,0.86))] shadow-[0_18px_55px_rgba(91,35,56,0.12)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(91,35,56,0.18)]"
            >
              <CardContent className="flex h-full flex-col p-0">
                <div
                  className={`relative h-84 border-b border-olive/10 ${
                    index === 0
                      ? "bg-[linear-gradient(135deg,#f0b8c9,#fff8fb,#c43868)]"
                      : index === 1
                        ? "bg-[linear-gradient(135deg,#ebb0c4,#fff7fb,#b12c5c)]"
                        : index === 2
                          ? "bg-[linear-gradient(135deg,#efc2d1,#fbeef3,#8f173d)]"
                          : "bg-[linear-gradient(135deg,#f1c1d0,#fff8fb,#cf4d78)]"
                  }`}
                >
                  <div className="absolute inset-6 rounded-[1.55rem] border border-white/45 bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,248,249,0.12))] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]" />
                  <div className="relative h-full p-7" />
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
                    className="mt-auto w-fit rounded-full border-olive/16 bg-[rgba(255,255,255,0.68)] px-5 py-2.5 text-sm text-olive-deep shadow-[0_10px_24px_rgba(91,35,56,0.08)] hover:border-olive/28 hover:bg-[rgba(255,255,255,0.9)] hover:text-mocha"
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
