import Image from 'next/image';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import { brand, contact } from '@/lib/content';
import { withBasePath } from '@/lib/site';

export const metadata = {
  title: "Thank You for Booking | Valko's Mobile Detailing",
  description:
    "Thanks for sending a booking request to Valko's Mobile Detailing. We will get back to you shortly.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <main className="relative isolate min-h-screen overflow-hidden bg-ink pt-24 md:pt-32">
        <div className="absolute inset-0 -z-10">
          <Image
            src={withBasePath('/media/gallery/f150-exterior-three-quarter.jpg')}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(59,122,224,0.22),transparent_34%),linear-gradient(180deg,rgba(11,13,16,0.72),#0B0D10_78%)]" />
        </div>

        <section className="container-page flex min-h-[calc(100vh-8rem)] items-center py-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="thank-you-mark mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-accent/40 bg-ink-2/80 shadow-[0_0_80px_-24px_rgba(59,122,224,0.95)] backdrop-blur">
              <span className="text-5xl text-accent" aria-hidden>
                ✓
              </span>
            </div>

            <p className="mt-8 pill mx-auto w-fit">Request sent</p>
            <h1 className="mt-5 display-heading text-5xl text-bone sm:text-6xl md:text-7xl">
              Thank you for booking
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">
              We will get back to you shortly to confirm the details and lock in
              your appointment.
            </p>

            <div className="thank-you-sheen relative mx-auto mt-10 max-w-xl overflow-hidden rounded-2xl border border-ink-3 bg-ink-2/70 p-5 text-left backdrop-blur">
              <div className="flex items-center gap-4">
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-ink-3 bg-ink">
                  <Image
                    src={withBasePath(brand.logo)}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="font-display text-xl uppercase text-bone">
                    {brand.name}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Keep an eye on your inbox or phone for a reply.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={withBasePath('/')} className="btn-primary">
                Back to home
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                View Dominic's Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
