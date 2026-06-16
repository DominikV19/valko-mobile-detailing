'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { brand, contact } from '@/lib/content';
import { withBasePath } from '@/lib/site';

const LINKS = [
  { href: withBasePath('/#services'), label: 'Services' },
  { href: withBasePath('/#before-after'), label: 'Before / After' },
  { href: withBasePath('/#gallery'), label: 'Gallery' },
  { href: withBasePath('/#faq'), label: 'FAQ' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? 'border-b border-ink-3/80 bg-ink/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a href={withBasePath('/#top')} className="flex items-center gap-3 group">
          <span className="relative h-10 w-10 overflow-hidden rounded-lg border border-ink-3 bg-ink-2">
            <Image
              src={withBasePath(brand.logo)}
              alt=""
              fill
              sizes="40px"
              className="object-cover"
            />
          </span>
          <span className="font-display text-lg uppercase tracking-tightish text-bone">
            {brand.shortName}
            <span className="ml-1 text-accent">/</span>
            <span className="ml-1 text-muted text-sm">Detailing</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-muted transition hover:text-bone"
            >
              {l.label}
            </a>
          ))}
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 btn-primary px-4 py-2 text-sm"
          >
            Book now
          </a>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-3 bg-ink-2 text-bone"
        >
          <span className="block h-0.5 w-5 bg-current shadow-[0_5px_0_currentColor,0_-5px_0_currentColor]" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-3 bg-ink/95 backdrop-blur-md">
          <div className="container-page flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-bone hover:bg-ink-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 btn-primary"
              onClick={() => setOpen(false)}
            >
              Book on Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
