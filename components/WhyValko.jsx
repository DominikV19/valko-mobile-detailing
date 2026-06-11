import { whyValko } from '@/lib/content';

const ICONS = {
  'Student-Owned': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'Premium Products': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M9 2h6l-1 4h-4l-1-4z" strokeLinejoin="round" />
      <path d="M8 6h8l1 14H7L8 6z" strokeLinejoin="round" />
    </svg>
  ),
  'Affordable + Quality': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 12.5l2 2 4-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'We Come To You': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M12 22s7-7 7-13a7 7 0 10-14 0c0 6 7 13 7 13z" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  'Satisfaction Focused': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M12 21s-7-4.35-7-10a4 4 0 017-2.65A4 4 0 0119 11c0 5.65-7 10-7 10z" strokeLinejoin="round" />
    </svg>
  ),
};

export default function WhyValko() {
  return (
    <section id="why" className="relative py-20 md:py-28 scroll-mt-24">
      <div className="container-page">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="pill">Why Valko's</span>
          <h2 className="mt-4 display-heading text-4xl md:text-5xl text-bone">
            Local hustle.
            <span className="text-accent"> Pro results.</span>
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {whyValko.map((item) => (
            <li
              key={item.title}
              className="card flex flex-col items-start gap-3 sm:[&:nth-child(5)]:col-span-2 md:[&:nth-child(5)]:col-span-1"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                {ICONS[item.title] ?? (
                  <span className="font-display text-lg">★</span>
                )}
              </span>
              <h3 className="font-display uppercase tracking-tightish text-lg text-bone">
                {item.title}
              </h3>
              <p className="text-sm text-muted">{item.blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
