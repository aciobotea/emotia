import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    title: "Design-first execution",
    text: "The layouts are built with magazine rhythm, typography, and hierarchy in mind, not as simple photo collages.",
  },
  {
    title: "Personalization without looking homemade",
    text: "Everything is custom to the event, but the final result still feels refined, coherent, and professionally art-directed.",
  },
  {
    title: "Flexible for multiple event types",
    text: "The same editorial system adapts beautifully to romantic, playful, nostalgic, or high-energy celebrations.",
  },
  {
    title: "Strong guest experience",
    text: "The magazine doubles as decor, conversation piece, keepsake, and practical event guide depending on the format you choose.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="px-6 py-18 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Why choose us"
          title="Because custom can still feel editorial, premium, and cohesive."
          description="Our focus is not just customization. It is making customization look intentional, elevated, and worthy of print."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              className="rounded-[2rem] border border-white/80 bg-gradient-to-br from-white to-rose/35 p-7 shadow-[0_16px_50px_rgba(125,87,74,0.09)]"
            >
              <CardContent className="p-7">
                <h3 className="font-display text-3xl text-ink">{reason.title}</h3>
                <p className="mt-3 text-base leading-7 text-ink/70">{reason.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
