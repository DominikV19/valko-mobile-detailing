'use client';

import { useState } from 'react';
import { contactSection } from '@/lib/content';
import { withBasePath } from '@/lib/site';

const fieldClass =
  'rounded-xl border border-ink-3 bg-ink/60 px-4 py-3 text-sm text-bone placeholder:text-muted outline-none transition focus:border-accent';

const labelClass = 'grid gap-1.5 text-xs font-medium uppercase tracking-wider text-muted';

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10);

  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function Contact() {
  const [phone, setPhone] = useState('');
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
                className={fieldClass}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                required
                className={fieldClass}
              />
              <label className={labelClass}>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  placeholder="(416) 555-0123"
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={14}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  className={`${fieldClass} normal-case tracking-normal`}
                />
              </label>
              <input
                type="text"
                name="vehicle"
                placeholder="Vehicle (year, make, model)"
                required
                className={fieldClass}
              />
              <label className={labelClass}>
                Preferred date
                <input
                  type="date"
                  name="preferred_date"
                  className={`${fieldClass} normal-case tracking-normal`}
                />
              </label>
              <label className={labelClass}>
                Preferred time
                <input
                  type="time"
                  name="preferred_time"
                  step="1800"
                  className={`${fieldClass} normal-case tracking-normal`}
                />
              </label>
              <select
                name="service"
                required
                defaultValue=""
                className={`${fieldClass} sm:col-span-2`}
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
                className={`${fieldClass} sm:col-span-2`}
              />
              <button
                type="submit"
                disabled={!isConfigured}
                className="btn-primary sm:col-span-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Send booking request
              </button>
              <p className="text-xs text-muted sm:col-span-2">
                By submitting this form, you agree to our{' '}
                <a href={withBasePath('/privacy')} className="text-accent hover:text-accent-glow">
                  Privacy Policy
                </a>
                .
              </p>
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
