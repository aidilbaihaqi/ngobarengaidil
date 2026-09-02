"use client";
import React from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export type ParallaxProduct = {
  title: string;
  link: string;
  thumbnail: string;
};

export const HeroParallax = ({
  products,
  title,
  description,
}: {
  products: ParallaxProduct[];
  title?: React.ReactNode;
  description?: React.ReactNode;
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    // Height comes from the deck itself, not from the viewport. A `min-h` in vh
    // stretched this section on tall screens while the rows stayed a fixed pixel
    // height, leaving a dead band under the last row that grew with the window.
    // The bottom padding only has to hold the deck's final translateY (+500px).
    <div
      ref={ref}
      className="pt-24 md:pt-40 pb-[660px] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="relative z-20">
        <Header title={title} description={description} />
      </div>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative z-0"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 md:space-x-20 mb-6 md:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-6 md:mb-20 space-x-6 md:space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 md:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = ({
  title,
  description,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
}) => {
  return (
    // The deck sweeps up behind this text, so it cannot rely on the page
    // background for contrast: dark type can land on a dark screenshot and light
    // type on a pale one. The glow is carried by the type itself rather than by
    // a scrim over the section, which would cover the grid background and read
    // as a grey band across the top of the section.
    <div className="max-w-7xl relative mx-auto pt-20 md:pt-32 pb-12 md:pb-20 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-gray-800 dark:text-white [text-shadow:0_2px_16px_rgb(255_255_255/0.9)] dark:[text-shadow:0_2px_16px_rgb(10_10_10/0.9)]">
        {title ?? (
          <>
            Things I&apos;ve <br /> designed &amp; shipped
          </>
        )}
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-gray-600 dark:text-neutral-300 [text-shadow:0_1px_10px_rgb(255_255_255/0.9)] dark:[text-shadow:0_1px_10px_rgb(10_10_10/0.9)]">
        {description ??
          "A selection of full-stack, AI, and automation projects — built with modern frameworks for startups, institutions, and communities. Scroll to explore."}
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: ParallaxProduct;
  translate: MotionValue<number>;
}) => {
  const isExternal = product.link.startsWith("http");
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-64 w-[22rem] md:h-96 md:w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block group-hover/product:shadow-2xl"
        aria-label={product.title}
      >
        <Image
          src={product.thumbnail}
          fill
          sizes="(max-width: 768px) 22rem, 30rem"
          className="object-cover object-left-top absolute inset-0"
          alt={product.title}
          loading="lazy"
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition-opacity duration-300"></div>
      <h2 className="absolute bottom-4 left-4 right-4 opacity-0 group-hover/product:opacity-100 text-white text-sm md:text-base font-medium transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};
