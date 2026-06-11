import BeforeAfterSlider from './BeforeAfterSlider';
import { beforeAfter } from '@/lib/content';

export default function BeforeAfter() {
  return (
    <section
      id="before-after"
      className="relative py-20 md:py-28 scroll-mt-24 border-t border-ink-3/60"
    >
      <div className="container-page">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="pill">Before / After</span>
          <h2 className="mt-4 display-heading text-4xl md:text-5xl text-bone">
            Swipe to see{' '}
            <span className="text-accent">the difference.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted">{beforeAfter.intro}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {beforeAfter.pairs.map((pair) => (
            <figure key={pair.id} className="flex flex-col gap-4">
              <BeforeAfterSlider
                before={pair.before}
                after={pair.after}
                width={pair.width}
                height={pair.height}
                alt={pair.label}
              />
              <figcaption>
                <h3 className="font-display uppercase tracking-tightish text-lg text-bone">
                  {pair.label}
                </h3>
                <p className="mt-1 text-sm text-muted">{pair.blurb}</p>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
