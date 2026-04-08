import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const conceptItems = [
  {
    title: "Looks like a real publication",
    text: "Cover lines, editorial pacing, feature spreads, and print styling are all built to feel familiar, elevated, and substantial.",
  },
  {
    title: "Customized for your event",
    text: "Every magazine is tailored to the people, story, palette, tone, and details of the celebration, not pulled from a generic template.",
  },
  {
    title: "Designed to be kept",
    text: "These are not disposable paper inserts. They are keepsakes guests actually want to read, save, photograph, and take home.",
  },
];

export function ConceptSection() {
  return (
    <section id="concept" className="px-6 py-18 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeading
          eyebrow="The concept"
          title="A custom event magazine with the polish of editorial design."
          description="We turn your event story into a publication-inspired keepsake that can hold interviews, schedules, memories, style notes, venue details, photo highlights, and thoughtful printed touches."
        />

        <div className="grid gap-5">
          {conceptItems.map((item, index) => (
            <Card
              key={item.title}
              className="rounded-[2rem] border border-white/80 bg-white/75 p-7 shadow-[0_12px_48px_rgba(111,66,88,0.08)]"
            >
              <CardContent className="p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-wine">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-3xl text-ink">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-ink/70">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
