import { contactSection } from '@/lib/content';

export default function Contact() {
  const formEndpoint =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
    contactSection.formEndpoint;
  const isConfigured = !formEndpoint.includes('YOUR_FORM_ID');

  return (
    <section id="contact" className="relative py-20 md:py-28 scroll-mt-24 border-t border-ink-3/60">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-ink-3 bg-gradient-to-br from-ink-2 via-ink-2 to-ink p-6 md:p-12">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/25 blur-3xl" />
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
            <div className="text-left">
              <span className="pill">Book</span>
              <h2 className="mt-4 display-heading text-4xl md:text-6xl text-bone">
                {contactSection.headline}
              </h2>
              <p className="mt-4 max-w-xl text-muted">
                {contactSection.body}
              </p>

              <div className="mt-8">
                <a
                  href={contactSection.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  {contactSection.primaryCta.label}
                  <span aria-hidden>→</span>
                </a>
              </div>
              <p className="mt-4 text-sm text-muted">
                {contactSection.formNote}
              </p>
            </div>

            <form
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
              aria-label="Booking request form"
              action={formEndpoint}
              method="POST"
            >
              <input type="hidden" name="_subject" value="New Valko booking request" />
              <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hidden" />
              <input
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
                className="rounded-xl border border-ink-3 bg-ink/60 px-4 py-3 text-sm text-bone placeholder:text-muted outline-none transition focus:border-accent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                required
                className="rounded-xl border border-ink-3 bg-ink/60 px-4 py-3 text-sm text-bone placeholder:text-muted outline-none transition focus:border-accent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                autoComplete="tel"
                className="rounded-xl border border-ink-3 bg-ink/60 px-4 py-3 text-sm text-bone placeholder:text-muted outline-none transition focus:border-accent"
              />
              <input
                type="text"
                name="vehicle"
                placeholder="Vehicle (year, make, model)"
                required
                className="rounded-xl border border-ink-3 bg-ink/60 px-4 py-3 text-sm text-bone placeholder:text-muted outline-none transition focus:border-accent"
              />
              <select
                name="service"
                required
                defaultValue=""
                className="rounded-xl border border-ink-3 bg-ink/60 px-4 py-3 text-sm text-bone outline-none transition focus:border-accent sm:col-span-2"
              >
                <option value="" disabled>Select a service...</option>
                <option>Exterior Wash</option>
                <option>Interior Detail</option>
                <option>Full Detail</option>
                <option>Premium Detail</option>
                <option>Pet Hair & Stain Removal</option>
                <option>Wax & Exterior Protection</option>
              </select>
              <textarea
                name="message"
                placeholder="Anything we should know? (pet hair, stains, deep clean…)"
                rows={4}
                className="rounded-xl border border-ink-3 bg-ink/60 px-4 py-3 text-sm text-bone placeholder:text-muted outline-none transition focus:border-accent sm:col-span-2"
              />
              <button
                type="submit"
                disabled={!isConfigured}
                className="btn-primary sm:col-span-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Send booking request
              </button>
              {!isConfigured && (
                <p className="text-xs text-muted sm:col-span-2">
                  Add NEXT_PUBLIC_FORMSPREE_ENDPOINT with the Formspree form URL before publishing.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
