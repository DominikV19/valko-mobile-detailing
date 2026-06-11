'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { withBasePath } from '@/lib/site';

export default function BeforeAfterSlider({
  before,
  after,
  width,
  height,
  alt = 'Before and after comparison',
  initial = 50,
}) {
  const wrapRef = useRef(null);
  const [pct, setPct] = useState(initial);
  const [dragging, setDragging] = useState(false);

  const setFromClientX = useCallback((clientX) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const next = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPct(next);
  }, []);

  const onPointerDown = (e) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setDragging(true);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e) => {
    if (!dragging) return;
    setFromClientX(e.clientX);
  };

  const stop = () => setDragging(false);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPct((p) => Math.max(0, p - 2));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPct((p) => Math.min(100, p + 2));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setPct(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setPct(100);
    }
  };

  // Cleanup if pointer ends outside element
  useEffect(() => {
    if (!dragging) return;
    window.addEventListener('pointerup', stop);
    window.addEventListener('pointercancel', stop);
    return () => {
      window.removeEventListener('pointerup', stop);
      window.removeEventListener('pointercancel', stop);
    };
  }, [dragging]);

  return (
    <div
      ref={wrapRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stop}
      className="group relative w-full overflow-hidden rounded-2xl border border-ink-3 bg-ink-2 select-none touch-none cursor-ew-resize"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {/* AFTER (full size, beneath) */}
      <Image
        src={withBasePath(after)}
        alt={`${alt} — after`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover pointer-events-none"
        draggable={false}
        priority={false}
      />
      <span className="absolute right-3 top-3 z-10 pill bg-ink/70 backdrop-blur">
        After
      </span>

      {/* BEFORE (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        aria-hidden="true"
      >
        <Image
          src={withBasePath(before)}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          draggable={false}
        />
        <span className="absolute left-3 top-3 pill bg-ink/70 backdrop-blur">
          Before
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-20"
        style={{ left: `${pct}%`, transform: 'translateX(-50%)' }}
        aria-hidden="true"
      >
        <div className="h-full w-px bg-accent shadow-[0_0_24px_rgba(59,122,224,0.7)]" />
      </div>
      <button
        type="button"
        role="slider"
        aria-label={`${alt} comparison slider`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pct)}
        onKeyDown={onKeyDown}
        className="absolute z-30 top-1/2 -translate-y-1/2 -translate-x-1/2 h-11 w-11 rounded-full bg-accent text-bone shadow-[0_8px_30px_-6px_rgba(20,80,190,0.7)] grid place-items-center cursor-ew-resize focus:outline-none focus-visible:ring-2 focus-visible:ring-bone"
        style={{ left: `${pct}%` }}
        onPointerDown={onPointerDown}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
          <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
