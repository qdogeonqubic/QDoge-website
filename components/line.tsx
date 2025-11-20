"use client";

import Autoplay from "embla-carousel-autoplay";
import { LineIcon } from "@/components/icons/line-icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function Line() {
  const items = Array.from({ length: 7 }, (_, i) => i);

  // Duplicate items for seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="line">
      <Carousel
        opts={{
          loop: true,
          align: "start",
          dragFree: true,
          skipSnaps: false,
          duration: 8000, // 8 seconds per item for much slower scrolling
        }}
        plugins={[
          Autoplay({
            delay: 100, // Small delay between scrolls for slower overall speed
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
        className="line__row"
      >
        <CarouselContent className="ml-0 [&>div]:flex">
          {duplicatedItems.map((item, index) => (
            <CarouselItem
              key={`line-item-${index}`}
              className="basis-auto pl-0"
            >
              <div
                className="flex items-center shrink-0"
                style={{ paddingRight: "clamp(1rem, 1.45833vw, 1rem)" }}
              >
                <div className="line__item icon">
                  <LineIcon />
                </div>
                <div className="line__item text">
                  <h3>danger</h3>
                  <span>AUTHORIZED PERSONNEL ONLY</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

