"use client";

import Image, { ImageProps } from 'next/image';
import { useState, memo } from 'react';
import { Skeleton } from './ui/skeleton';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  skeletonClassName?: string;
  lowQualityPlaceholder?: boolean;
}

function OptimizedImageComponent({ 
  skeletonClassName, 
  className,
  lowQualityPlaceholder = true,
  quality = 75,
  ...props 
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate blur placeholder for local images
  const shouldUseBlur = lowQualityPlaceholder && 
    typeof props.src === 'string' && 
    !props.src.startsWith('http');

  return (
    <div className="relative">
      {isLoading && !hasError && (
        <Skeleton 
          className={`absolute inset-0 ${skeletonClassName || className?.toString() || "w-full h-full"}`} 
        />
      )}
      <Image
        {...props}
        quality={quality}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        loading={props.priority ? undefined : "lazy"}
        placeholder={shouldUseBlur ? "blur" : "empty"}
        blurDataURL={shouldUseBlur ? "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AzrS9Gu7q8ht4oJHlkYKqqpJJPwAVb3Hs+/0+3W4uLOWOJjgMy4BNKVJZmZbBuTkzP/Z" : undefined}
      />
      {hasError && (
        <div className={`flex items-center justify-center bg-gray-200 dark:bg-gray-800 ${className}`}>
          <span className="text-gray-400 text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(OptimizedImageComponent);
