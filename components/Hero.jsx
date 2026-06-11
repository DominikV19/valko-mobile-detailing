import Image from 'next/image';
import { hero } from '@/lib/content';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-24 md:pt-32 pb-20 md:pb-32 min-h-[88vh] flex items-center"
    >
      {/* Background image — right-side car with soft wavy left fade */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-ink" />

        {/* Cobalt glow on the left, sits BEHIND the image so the fade meshes with it */}
        <div className="absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-[120px]" />
        <div className="absolute left-20 bottom-10 h-72 w-72 rounded-full bg-accent-glow/20 blur-[100px]" />

        {/* Hero image — single elliptical mask, centered far right and tall, so it
            curves (not vertical-cuts) and bleeds smoothly into the dark. Image only
            occupies the right ~62% of the viewport so the left third stays clean for type. */}
        <div
          className="absolute inset-y-0 right-0 w-full md:w-[62%]"
          style={{
            maskImage:
              'radial-gradient(ellipse 95% 130% at 100% 50%, rgba(0,0,0,1) 18%, rgba(0,0,0,0.92) 42%, rgba(0,0,0,0.55) 68%, rgba(0,0,0,0.18) 88%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 95% 130% at 100% 50%, rgba(0,0,0,1) 18%, rgba(0,0,0,0.92) 42%, rgba(0,0,0,0.55) 68%, rgba(0,0,0,0.18) 88%, rgba(0,0,0,0) 100%)',
          }}
        >
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 62vw"
            className="object-cover object-right opacity-40 md:opacity-90"
          />
        </div>
        {/* Extra darken on small screens where the image covers the whole width */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-r from-ink via-ink/75 to-ink/30" />

        {/* Top fade so the nav stays legible over the bright image */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/85 to-transparent" />
        {/* Bottom-edge fade into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-page relative">
        <div className="max-w-3xl">
          <span className="pill">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {hero.kicker}
          </span>

          <h1 className="mt-6 display-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-bone">
            {hero.headlineLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
            <span className="block text-accent">{hero.headlineAccent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg md:text-xl text-muted">
            {hero.subline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {hero.primaryCta.label}
              <span aria-hidden>→</span>
            </a>
            <a href={hero.secondaryCta.href} className="btn-ghost">
              {hero.secondaryCta.label}
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 text-bone">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">From</dt>
              <dd className="mt-1 font-display text-3xl text-bone">$50</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">Service area</dt>
              <dd className="mt-1 font-display text-3xl text-bone">GTA</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">We come</dt>
              <dd className="mt-1 font-display text-3xl uppercase text-accent">To You</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
