"use client";

import { useState } from "react";
import { ImageOff } from "lucide-react";
import { srcSet, unsplashUrl, type Photo as PhotoT } from "@/app/seminar/lib/photos";

type Props = {
  photo: PhotoT;
  className?: string;
  sizes?: string;
  kenburns?: boolean;
  credit?: boolean;
  priority?: boolean;
};

/**
 * <img> biasa (bukan next/image) supaya foto dimuat langsung dari CDN Unsplash
 * tanpa perlu image optimizer — jalan di dev, Vercel, static export, maupun laptop offline-ish.
 * Kalau CDN gagal, tampil kartu fallback biru, bukan ikon rusak.
 */
export default function Photo({ photo, className = "", sizes = "50vw", kenburns = false, credit = true, priority = false }: Props) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden bg-seminar-light ${className}`}>
      {!failed ? (
        <img
          src={unsplashUrl(photo.hash, 1600)}
          srcSet={srcSet(photo.hash)}
          sizes={sizes}
          alt={photo.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"} ${kenburns ? "kenburns" : ""}`}
        />
      ) : (
        <div className={`flex h-full w-full flex-col items-center justify-center gap-3 ${credit ? "bg-gradient-to-br from-seminar-light to-white text-seminar" : "bg-gradient-to-br from-seminar to-seminar-dark text-white/70"}`}>
          {credit && <ImageOff className="h-10 w-10" />}
          {credit && <p className="px-6 text-center text-sm font-semibold">{photo.alt}</p>}
        </div>
      )}
      {credit && !failed && (
        <a
          href={`https://unsplash.com/@${photo.handle}?utm_source=seminar&utm_medium=referral`}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-2 right-3 rounded-full bg-black/35 px-2 py-0.5 text-[10px] text-white/80 backdrop-blur-sm hover:bg-black/60"
        >
          {photo.by} · Unsplash
        </a>
      )}
    </div>
  );
}

/** Foto lokal (public/...) dengan fallback — dipakai untuk potret pembicara. */
export function LocalPhoto({ src, alt, className = "", fallback }: { src: string; alt: string; className?: string; fallback: React.ReactNode }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden ${className}`}>
      {failed ? fallback : <img src={src} alt={alt} onError={() => setFailed(true)} className="h-full w-full object-cover" />}
    </div>
  );
}
