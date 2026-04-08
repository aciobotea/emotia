import Image from "next/image";
import type { EventItem } from "@/data/site";

type EventGalleryProps = {
  event: EventItem;
};

export function EventGallery({ event }: EventGalleryProps) {
  return (
    <section className="px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-wine">
            Visual direction
          </p>
          <h2 className="mt-3 font-display text-5xl text-ink">
            Photo-inspired magazine mockups
          </h2>
          <p className="mt-4 text-base leading-7 text-ink/72">
            These visuals show the kind of editorial styling, page composition,
            and print atmosphere each event magazine can carry.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {event.gallery.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 shadow-[0_18px_55px_rgba(95,68,61,0.1)]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
