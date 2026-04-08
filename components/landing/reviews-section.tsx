"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { reviews } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleReviews = Array.from({ length: 3 }, (_, offset) => {
    return reviews[(activeIndex + offset) % reviews.length];
  });

  function showPrevious() {
    setActiveIndex((current) => (current === 0 ? reviews.length - 1 : current - 1));
  }

  function showNext() {
    setActiveIndex((current) => (current === reviews.length - 1 ? 0 : current + 1));
  }

  return (
    <section id="reviews" className="px-6 py-18 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[88rem]">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Recenzii"
            title="Ce spun cei care au ales să transforme un cadou într-o amintire."
            description="Câteva reacții reale, despre cum se simte produsul atunci când ajunge în mâinile celor pentru care a fost creat."
            align="center"
          />
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          <div className="mb-6 flex items-center justify-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={showPrevious}
              className="h-12 w-12 border-white/70 bg-white/72 text-olive-deep shadow-[0_10px_24px_rgba(96,74,54,0.08)] hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={showNext}
              className="h-12 w-12 border-white/70 bg-white/72 text-olive-deep shadow-[0_10px_24px_rgba(96,74,54,0.08)] hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="overflow-hidden">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visibleReviews.map((review, index) => (
                <Card
                  key={`${review.name}-${activeIndex}-${index}`}
                  className="overflow-hidden rounded-[2.1rem] border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(247,238,227,0.7))] shadow-[0_24px_65px_rgba(96,74,54,0.1)]"
                >
                  <CardContent className="flex h-full flex-col p-8">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,236,222,0.72))] text-gold shadow-[0_10px_24px_rgba(176,138,82,0.14)]">
                        <Quote className="h-5 w-5" strokeWidth={1.9} />
                      </div>
                      <p className="text-sm text-olive-deep/56">
                        {((activeIndex + index) % reviews.length) + 1} / {reviews.length}
                      </p>
                    </div>

                    <p className="mt-6 text-lg leading-8 text-olive-deep/78">
                      „{review.quote}”
                    </p>

                    <div className="mt-auto border-t border-olive/10 pt-6">
                      <p className="text-lg font-semibold text-ink">{review.name}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-wine">
                        {review.event}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {reviews.map((review, index) => (
              <button
                key={`${review.name}-${index}`}
                type="button"
                aria-label={`Vezi recenziile începând cu poziția ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={
                  index === activeIndex
                    ? "h-2.5 w-8 rounded-full bg-gold transition"
                    : "h-2.5 w-2.5 rounded-full bg-mocha/22 transition hover:bg-mocha/36"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
