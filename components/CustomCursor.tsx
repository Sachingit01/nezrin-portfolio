// components/CustomCursor.tsx
"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const addMouseListeners = () => {
      const move = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      const show = () => setIsVisible(true);
      const hide = () => setIsVisible(false);

      document.addEventListener("mousemove", move);
      document.addEventListener("mouseenter", show);
      document.addEventListener("mouseleave", hide);

      return () => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseenter", show);
        document.removeEventListener("mouseleave", hide);
      };
    };

    return addMouseListeners();
  }, []);

  return (
    <>
      <div
        className={`pointer-events-none fixed z-[9999] h-4 w-4 rounded-full mix-blend-difference bg-[#11398d] transition-transform duration-150 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      />
      <div
        className={`pointer-events-none fixed z-[9998] h-8 w-8 rounded-full border-1 border-[#a49443] transition-transform duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          isVisible ? "opacity-50" : "opacity-0"
        } ${isVisible ? "animate-ping" : ""}`}
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      />
    </>
  );
}

