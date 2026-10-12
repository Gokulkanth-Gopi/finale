"use client";

import { useEffect, useRef } from 'react';

export default function AnimeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const columns = 15;
    const rows = 15;
    const total = columns * rows;

    containerRef.current.innerHTML = '';
    containerRef.current.style.display = 'grid';
    containerRef.current.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    containerRef.current.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    containerRef.current.style.gap = '20px';
    containerRef.current.style.width = 'fit-content';
    containerRef.current.style.opacity = '0.3';

    for (let i = 0; i < total; i++) {
      const dot = document.createElement('div');
      dot.classList.add('anime-dot');
      dot.style.width = '4px';
      dot.style.height = '4px';
      dot.style.backgroundColor = 'currentColor';
      dot.style.borderRadius = '50%';
      dot.style.animationDelay = `${(i % columns) * 0.08 + Math.floor(i / columns) * 0.12}s`;
      containerRef.current.appendChild(dot);
    }
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
      <div ref={containerRef} className="text-[#3fbfb8] transition-colors" />
    </div>
  );
}
