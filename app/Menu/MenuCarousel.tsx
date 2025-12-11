"use client";

import MenuCard from "./MenuCard";
import { useCarousel } from "@/app/hooks/useCarousel";

interface Props {
  items: {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
  }[];
}

export default function MenuCarousel({ items }: Props) {
  const { carouselRef, canScrollLeft, canScrollRight } = useCarousel(items);

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* FADE EDGES */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-stone-900/80 to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-stone-900/80 to-transparent z-20" />

      {/* CAROUSEL */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide gap-8 snap-x snap-mandatory scroll-smooth px-2 py-4"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-[320px] sm:min-w-[360px] lg:min-w-[380px] snap-center"
          >
            <MenuCard {...item} />
          </div>
        ))}
      </div>

      {/* BUTTON LEFT */}
      {canScrollLeft && (
        <button
          onClick={() => {
            carouselRef.current?.scrollBy({ left: -400, behavior: "smooth" });
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-lg 
          text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl z-30 transition-colors"
          aria-label="Faire défiler le menu vers la gauche"
        >
          <span aria-hidden="true">←</span>
        </button>
      )}

      {/* BUTTON RIGHT */}
      {canScrollRight && (
        <button
          onClick={() => {
            carouselRef.current?.scrollBy({ left: 400, behavior: "smooth" });
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-lg 
          text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl z-30 transition-colors"
          aria-label="Faire défiler le menu vers la droite"
        >
          <span aria-hidden="true">→</span>
        </button>
      )}
    </div>
  );
}
