'use client';

import { useCallback, useEffect, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationType?: 'mainAnim1' | 'mainAnim2';
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', animationType = 'mainAnim1' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const elementRef = useCallback((node: HTMLElement | null) => {
    if (node && !hasAnimated) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
            observer.disconnect();
          }
        },
        {
          threshold,
          rootMargin,
        }
      );
      
      observer.observe(node);
      
      return () => observer.disconnect();
    }
  }, [threshold, rootMargin, hasAnimated]);

  const animationClass = isVisible 
    ? animationType === 'mainAnim1' 
      ? 'animate-on-scroll-1' 
      : 'animate-on-scroll-2'
    : '';

  return {
    elementRef,
    isVisible,
    animationClass,
  };
};
