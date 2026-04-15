import { notFound } from "next/navigation";
import { WeddingEventPage } from "@/components/events/wedding-event-page";
import { AnniversaryEventPage } from "@/components/events/anniversary-event-page";
import { BirthdayEventPage } from "@/components/events/birthday-event-page";
import { BacheloretteEventPage } from "@/components/events/bachelorette-event-page";

type EventSlug = "weddings" | "anniversaries" | "birthdays" | "bachelorette";

const validSlugs: EventSlug[] = [
  "weddings",
  "anniversaries",
  "birthdays",
  "bachelorette",
];

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export default async function EventSlugPage(props: PageProps<"/events/[slug]">) {
  const { slug } = await props.params;

  switch (slug) {
    case "weddings":
      return <WeddingEventPage />;
    case "anniversaries":
      return <AnniversaryEventPage />;
    case "birthdays":
      return <BirthdayEventPage />;
    case "bachelorette":
      return <BacheloretteEventPage />;
    default:
      notFound();
  }
}
