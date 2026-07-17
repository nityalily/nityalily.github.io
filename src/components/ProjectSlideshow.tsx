"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectMedia = {
  type: "image" | "video";
  src: string;
};

export default function ProjectSlideshow({ media }: { media: ProjectMedia[] }) {
  const [index, setIndex] = useState(0);

  if (media.length === 0) return null;

  const current = media[index];

  const go = (delta: number) => {
    setIndex((i) => (i + delta + media.length) % media.length);
  };

  return (
    <div className="mt-3 w-full max-w-xs">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-surface-bar">
        {current.type === "video" ? (
          <video
            key={current.src}
            src={current.src}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={current.src}
            alt=""
            fill
            sizes="320px"
            className="object-cover"
          />
        )}
        {media.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="absolute left-1.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-opacity hover:opacity-80"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next slide"
              className="absolute right-1.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-opacity hover:opacity-80"
            >
              <ChevronRight size={14} />
            </button>
          </>
        )}
      </div>
      {media.length > 1 && (
        <div className="mt-2 flex justify-center gap-1.5">
          {media.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === index ? "bg-accent" : "bg-border"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
