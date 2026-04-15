import Image from "next/image";

const galleryImages = [
  {
    src: "/homepage2/IMG_0493.jpg",
    alt: "Revista personalizata fotografiata in decor editorial.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/homepage2/IMG_0512.jpg",
    alt: "Detaliu de revista personalizata.",
    className: "",
  },
  {
    src: "/homepage2/IMG_0526.jpg",
    alt: "Revista personalizata asezata pe masa.",
    className: "",
  },
  {
    src: "/homepage2/IMG_0538.jpg",
    alt: "Coperta de revista personalizata.",
    className: "",
  },
  {
    src: "/homepage2/IMG_0545.jpg",
    alt: "Revista personalizata cu detalii de layout.",
    className: "",
  },
  {
    src: "/homepage2/IMG_0601.jpg",
    alt: "Cadru editorial cu revista personalizata.",
    className: "md:col-span-2",
  },
];

export function PhotoGallerySection() {
  return (
    <section id="gallery" className="px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[88rem] auto-rows-[18rem] gap-5 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[20rem]">
        {galleryImages.map((image) => (
          <div
            key={image.src}
            className={`relative overflow-hidden rounded-[2.2rem] shadow-[0_24px_60px_rgba(91,35,56,0.12)] ${image.className}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
