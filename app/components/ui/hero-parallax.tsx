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
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="min-h-[220vh] md:min-h-[300vh] pt-24 md:pt-40 pb-[540px] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header title={title} description={description} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
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
    <div className="max-w-7xl relative mx-auto pt-20 md:pt-32 pb-12 md:pb-20 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-ink">
        {title ?? (
          <>
            Things I&apos;ve <br /> designed &amp; shipped
          </>
        )}
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-ink-soft">
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
