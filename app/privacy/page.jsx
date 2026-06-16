import { contactSection, brand } from '@/lib/content';
import { withBasePath } from '@/lib/site';

export const metadata = {
  title: `Privacy Policy - ${brand.name}`,
  description:
    "Privacy policy for Valko's Mobile Detailing booking form and website.",
};

const updated = 'June 16, 2026';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ink text-bone">
      <section className="border-b border-ink-3/60 py-10">
        <div className="container-page">
          <a href={withBasePath('/')} className="text-sm font-medium text-muted hover:text-accent">
            ← Back to site
          </a>
          <h1 className="mt-8 display-heading text-4xl md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            This policy explains what information {brand.name} collects through this
            website and how it is handled.
          </p>
          <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-page max-w-4xl">
          <div className="space-y-10 text-bone/90">
            <section>
              <h2 className="font-display text-2xl uppercase tracking-tightish text-bone">
                Information We Collect
              </h2>
              <p className="mt-3 text-muted">
                We collect only the information you choose to submit through the
                booking request form. The form currently asks for your name, email
                address, phone number, vehicle details, preferred booking date,
                preferred booking time, selected service, and any extra message
                you include.
              </p>
              <p className="mt-3 text-muted">
                The form also sends a subject line for the booking request and uses
                a hidden anti-spam field. We do not run advertising pixels,
                newsletter signups, account creation, or extra analytics code on
                this website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl uppercase tracking-tightish text-bone">
                How We Use Your Information
              </h2>
              <p className="mt-3 text-muted">
                We use booking form information to respond to your request, provide
                pricing or scheduling details, ask follow-up questions about your
                vehicle or service needs, and keep basic records of customer
                conversations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl uppercase tracking-tightish text-bone">
                Formspree
              </h2>
              <p className="mt-3 text-muted">
                This website uses Formspree to process booking form submissions.
                Submitting the form sends your form details to Formspree at{' '}
                <a
                  href={contactSection.formEndpoint}
                  className="text-accent hover:text-accent-glow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactSection.formEndpoint}
                </a>
                . Formspree may process form submissions, spam-prevention signals,
                and related technical information under its own privacy practices.
              </p>
              <p className="mt-3 text-muted">
                Our use of Formspree is intended to be compatible with Formspree's
                Privacy Policy. You can read it at{' '}
                <a
                  href="https://formspree.io/legal/privacy-policy/"
                  className="text-accent hover:text-accent-glow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  formspree.io/legal/privacy-policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl uppercase tracking-tightish text-bone">
                Sharing
              </h2>
              <p className="mt-3 text-muted">
                We do not sell your personal information. We share form information
                only as needed to receive and manage booking requests through
                Formspree, respond to you, or comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl uppercase tracking-tightish text-bone">
                Retention
              </h2>
              <p className="mt-3 text-muted">
                We keep booking request information only as long as needed to handle
                the request, provide service, maintain customer records, or meet
                reasonable business and legal needs.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl uppercase tracking-tightish text-bone">
                Your Choices
              </h2>
              <p className="mt-3 text-muted">
                If you want to update or delete information you submitted through
                the booking form, contact us through Instagram at{' '}
                <a
                  href="https://www.instagram.com/valko_mobiledetailing/"
                  className="text-accent hover:text-accent-glow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @valko_mobiledetailing
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl uppercase tracking-tightish text-bone">
                Changes
              </h2>
              <p className="mt-3 text-muted">
                We may update this policy if the website, booking form, or services
                change. The updated date above will show when this page was last
                revised.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
