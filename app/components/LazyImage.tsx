"use client";

import Image, { ImageProps } from 'next/image';
import { useState, useRef, useEffect, memo } from 'react';

interface LazyImageProps extends Omit<ImageProps, 'onLoad'> {
  rootMargin?: string;
  threshold?: number;
}

function LazyImageComponent({
  rootMargin = '200px',
  threshold = 0.1,
  className,
  ...props
}: LazyImageProps) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div ref={imgRef} className="relative">
      {/* Placeholder skeleton */}
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse ${className}`}
          style={{ aspectRatio: props.width && props.height ? `${props.width}/${props.height}` : 'auto' }}
        />
      )}
      
      {isInView && (
        <Image
          {...props}
          className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
    </div>
  );
}

export default memo(LazyImageComponent);
