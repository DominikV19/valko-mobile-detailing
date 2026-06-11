import { processSteps } from '@/lib/content';

export default function Process() {
  return (
    <section id="process" className="relative py-20 md:py-28 scroll-mt-24 border-t border-ink-3/60">
      <div className="container-page">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="pill">How it works</span>
          <h2 className="mt-4 display-heading text-4xl md:text-5xl text-bone">
            Booking is{' '}
            <span className="text-accent">stupid easy.</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Four short steps from message to mirror finish.
          </p>
        </div>

        <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          {processSteps.map((s) => (
            <li
              key={s.step}
              className="relative card flex flex-col items-start gap-3"
            >
              <span className="font-display text-3xl text-accent leading-none">
                {s.step}
              </span>
              <h3 className="font-display uppercase tracking-tightish text-xl text-bone">
                {s.title}
              </h3>
              <p className="text-sm text-muted">{s.blurb}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
