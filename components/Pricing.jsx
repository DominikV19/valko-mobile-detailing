import { services, addOns, pricingDisclaimer, contact } from '@/lib/content';

export default function Pricing() {
  return (
    <section id="services" className="relative py-20 md:py-28 scroll-mt-24 border-t border-ink-3/60">
      <div className="container-page">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="pill">Services & Pricing</span>
          <h2 className="mt-4 display-heading text-4xl md:text-5xl text-bone">
            Straightforward menu.{' '}
            <span className="text-accent">No upsell.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-8 items-start">
          {/* Tier cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((svc) => (
              <li
                key={svc.name}
                className={`card relative ${
                  svc.featured ? 'border-accent/70 bg-ink-2' : ''
                }`}
              >
                {svc.featured && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-bone">
                    Most popular
                  </span>
                )}
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display uppercase tracking-tightish text-xl text-bone">
                    {svc.name}
                  </h3>
                  <div className="text-right">
                    <span className="block text-xs uppercase tracking-wider text-muted">
                      From
                    </span>
                    <span className="font-display text-3xl text-accent">
                      ${svc.startingPrice}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted">{svc.blurb}</p>
                <ul className="mt-4 space-y-1.5">
                  {svc.includes.map((inc) => (
                    <li
                      key={inc}
                      className="flex items-start gap-2 text-sm text-bone/90"
                    >
                      <span className="mt-1 inline-block h-1 w-3 flex-none bg-accent" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* Add-ons + CTA sidebar */}
          <aside className="flex flex-col gap-4">
            <div className="card">
              <h3 className="font-display uppercase tracking-tightish text-lg text-bone">
                Add-ons
              </h3>
              <ul className="mt-3 space-y-3">
                {addOns.map((a) => (
                  <li key={a.name}>
                    <p className="text-sm font-medium text-bone">{a.name}</p>
                    <p className="text-sm text-muted">{a.blurb}</p>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center"
            >
              Get a quote on Instagram
            </a>
          </aside>
        </div>

        <p className="mt-10 max-w-3xl text-sm text-muted">
          <span className="font-medium text-bone">Heads up:</span>{' '}
          {pricingDisclaimer}
        </p>
      </div>
    </section>
  );
}
