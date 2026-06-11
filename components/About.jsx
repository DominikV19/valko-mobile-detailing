import Image from 'next/image';
import { about, contact } from '@/lib/content';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 scroll-mt-24 border-t border-ink-3/60 overflow-hidden isolate"
    >
      {/* Subtle Toronto/GTA map backdrop, centered on Toronto, softly faded into the page */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-ink" />
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              'radial-gradient(ellipse 80% 95% at 50% 50%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 95% at 50% 50%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)',
          }}
        >
          <Image
            src="/media/toronto-map.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-90 brightness-150 mix-blend-lighten"
            priority={false}
          />
        </div>
        {/* Cobalt "you are here" pulse over downtown Toronto */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-accent shadow-[0_0_40px_12px_rgba(20,80,190,0.8)]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-full border border-accent/50 animate-pulse" />
      </div>

      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-10 items-start">
          <div>
            <span className="pill">About</span>
            <h2 className="mt-4 display-heading text-4xl md:text-5xl text-bone">
              Built for the{' '}
              <span className="text-accent">GTA.</span>
            </h2>
          </div>

          <div className="space-y-6">
            <blockquote className="border-l-2 border-accent pl-5 text-2xl md:text-3xl font-display uppercase tracking-tightish text-bone leading-tight">
              &ldquo;{about.quote}&rdquo;
            </blockquote>
            <p className="text-base md:text-lg text-muted">{about.body}</p>

            <div>
              <p className="text-xs uppercase tracking-wider text-muted">Service area</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {contact.serviceAreaCities.map((city) => (
                  <li
                    key={city}
                    className="rounded-full border border-ink-3 bg-ink-2/80 backdrop-blur px-3 py-1.5 text-sm text-bone"
                  >
                    {city}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted">
                Don&apos;t see your city? DM us — we may still come to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
