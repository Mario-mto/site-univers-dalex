import { useEffect, useRef, useState } from "react";

export function useCarousel<T>(items: T[]) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = carouselRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  useEffect(() => {
    updateScrollState();
    const el = carouselRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState);
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  // Reset scroll when filter changes
  useEffect(() => {
    carouselRef.current?.scrollTo({ left: 0, behavior: "smooth" });
    updateScrollState();
  }, [items]);

  return {
    carouselRef,
    canScrollLeft,
    canScrollRight,
  };
}
