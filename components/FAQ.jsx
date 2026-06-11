'use client';

import { useState } from 'react';
import { faq } from '@/lib/content';

function Item({ q, a, open, onClick }) {
  return (
    <div className="border-b border-ink-3 last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
      >
        <span className="font-display uppercase tracking-tightish text-lg md:text-xl text-bone">
          {q}
        </span>
        <span
          className={`mt-1 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-ink-3 bg-ink-2 text-accent transition ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-12 text-base text-muted">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-20 md:py-28 scroll-mt-24 border-t border-ink-3/60">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.6fr] gap-10 items-start">
          <div>
            <span className="pill">FAQ</span>
            <h2 className="mt-4 display-heading text-4xl md:text-5xl text-bone">
              Common{' '}
              <span className="text-accent">questions.</span>
            </h2>
            <p className="mt-4 text-muted">
              Anything not covered here? Just DM us — we reply fast.
            </p>
          </div>

          <div className="card !p-2 sm:!p-4 md:!p-6">
            {faq.map((item, i) => (
              <Item
                key={item.q}
                q={item.q}
                a={item.a}
                open={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
