import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnniversaryEventPage } from "@/components/events/anniversary-event-page";
import { BacheloretteEventPage } from "@/components/events/bachelorette-event-page";
import { BirthdayEventPage } from "@/components/events/birthday-event-page";
import { EventPage } from "@/components/events/event-page";
import { WeddingEventPage } from "@/components/events/wedding-event-page";
import { SiteHeader } from "@/components/shared/site-header";
import { events, getEventBySlug } from "@/data/site";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata(
  props: PageProps<"/events/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found | Emotia Magazines",
    };
  }

  return {
    title: `${event.name} | Emotia Magazines`,
    description: event.intro,
  };
}

export default async function EventDetailsPage(
  props: PageProps<"/events/[slug]">,
) {
  const { slug } = await props.params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      {event.slug === "weddings" ? (
        <WeddingEventPage />
      ) : event.slug === "bachelorette" ? (
        <BacheloretteEventPage />
      ) : event.slug === "birthdays" ? (
        <BirthdayEventPage />
      ) : event.slug === "anniversaries" ? (
        <AnniversaryEventPage />
      ) : (
        <EventPage event={event} />
      )}
    </>
  );
}
