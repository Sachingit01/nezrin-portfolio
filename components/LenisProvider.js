'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { useAnimationFrame } from 'framer-motion';

export default function LenisProvider({ children }) {
  const lenis = useRef(null);

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smooth: true,
    });

    function onScroll(e) {
      // Optional: Add custom scroll effects
    }

    lenis.current.on('scroll', onScroll);

    return () => {
      lenis.current?.destroy();
    };
  }, []);

  useAnimationFrame((time) => {
    lenis.current?.raf(time);
  });

  return children;
}
