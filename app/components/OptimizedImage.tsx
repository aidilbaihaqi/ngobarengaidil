"use client";

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { Skeleton } from './ui/skeleton';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  skeletonClassName?: string;
}

export default function OptimizedImage({ 
  skeletonClassName, 
  className,
  ...props 
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <Skeleton className={skeletonClassName || className?.toString() || "w-full h-full"} />
      )}
      <Image
        {...props}
        className={className}
        onLoad={() => setIsLoading(false)}
        loading={props.priority ? undefined : "lazy"}
      />
    </div>
  );
}
