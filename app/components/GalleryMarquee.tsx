"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import type { GalleryPhoto } from "@/content/types";

const STRIP_HEIGHT = 224;

function stripWidth(photo: GalleryPhoto) {
  return Math.round((photo.width / photo.height) * STRIP_HEIGHT);
}

type GalleryMarqueeProps = {
  title: string;
  subtitle: string;
  photos: GalleryPhoto[];
};

export default function GalleryMarquee({
  title,
  subtitle,
  photos,
}: GalleryMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();

  if (photos.length === 0) {
    return null;
  }

  const loop = [...photos, ...photos];
  const durationSec = Math.max(40, photos.length * 4);

  return (
    <section
      className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-white py-20 sm:py-28 overflow-hidden"
      aria-label={title}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 mb-12">
        <p className="text-sm uppercase tracking-[0.32em] font-semibold text-slate-500 mb-4 text-center">
          Galleria
        </p>
        <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 text-center leading-[1.05] mb-4">
          {title}
        </h2>
        <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {prefersReducedMotion ? (
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {photos.map((photo) => (
              <figure
                key={photo.id}
                className="relative overflow-hidden rounded-2xl bg-slate-100 shrink-0"
                style={{ width: stripWidth(photo), height: STRIP_HEIGHT }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 45vw, 280px"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      ) : (
        <div className="gallery-marquee-mask">
          <div
            className="gallery-marquee-track flex w-max gap-4 px-4"
            style={{ animationDuration: `${durationSec}s` }}
          >
            {loop.map((photo, index) => (
              <figure
                key={`${photo.id}-${index}`}
                className="relative overflow-hidden rounded-2xl bg-slate-100 shrink-0"
                style={{ width: stripWidth(photo), height: STRIP_HEIGHT }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="280px"
                  className="object-cover"
                  priority={index < 4}
                />
              </figure>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
