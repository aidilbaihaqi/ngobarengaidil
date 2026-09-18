import Image from "next/image";

/**
 * The trust strip: institutions and companies this work has shipped for, on a
 * slow CSS marquee. Logos rest in grayscale and take their colour back on
 * hover, so the band reads as texture until someone leans in.
 */
const organizations = [
  { name: "Badan Pusat Statistik", logo: "/image-optimized/logo-bps.webp" },
  { name: "UMRAH", logo: "/image-optimized/logo-umrah.webp" },
  { name: "Arus Digital Sinergi", logo: "/image-optimized/logo-ads.webp" },
  { name: "Investree", logo: "/image-optimized/logo-investree.svg" },
  { name: "DBS Foundation", logo: "/image-optimized/logo-dbs.webp" },
  { name: "Rakamin Academy", logo: "/image-optimized/logo-rakamin.webp" },
  { name: "UmbiTeams", logo: "/image-optimized/logo-umbiteams.webp" },
  { name: "Tunas Idea", logo: "/image-optimized/logo-tunas.svg" },
  { name: "Risalah Maritim", logo: "/image-optimized/logo-risalahmaritim.svg" },
];

export default function LogoMarquee() {
  return (
    <div className="marquee-paused relative overflow-hidden">
      {/* Edge fades so the band appears from and dissolves into the page. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />

      <div className="animate-marquee flex w-max items-center">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex items-center"
          >
            {organizations.map((org) => (
              <li
                key={`${copy}-${org.name}`}
                className="mx-5 flex items-center gap-2.5 sm:mx-8"
              >
                <Image
                  src={org.logo}
                  alt={copy === 0 ? `${org.name} logo` : ""}
                  width={28}
                  height={28}
                  loading="lazy"
                  className="size-7 shrink-0 rounded-full object-contain grayscale transition-all duration-300 hover:grayscale-0"
                />
                <span className="whitespace-nowrap text-sm text-gray-500 transition-colors duration-300 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200">
                  {org.name}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
