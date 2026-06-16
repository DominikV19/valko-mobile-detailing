import { brand, contact, footer } from '@/lib/content';
import { withBasePath } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-ink-3/60 bg-ink py-12">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display uppercase tracking-tightish text-lg text-bone">
              {brand.name}
            </p>
            <p className="mt-2 text-sm text-muted">{brand.tagline}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted">Service</p>
              <ul className="mt-3 space-y-2 text-bone">
                <li><a href="#services" className="hover:text-accent">Services</a></li>
                <li><a href="#before-after" className="hover:text-accent">Before / After</a></li>
                <li><a href="#gallery" className="hover:text-accent">Gallery</a></li>
                <li><a href="#faq" className="hover:text-accent">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted">Area</p>
              <ul className="mt-3 space-y-2 text-bone">
                {contact.serviceAreaCities.slice(0, 5).map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted">Contact</p>
              <ul className="mt-3 space-y-2 text-bone">
                <li>
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="hover:text-accent"
                  >
                    {contact.instagramHandle}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink-3/60 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {footer.year} {brand.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a href={withBasePath('/privacy')} className="hover:text-accent">
              Privacy Policy
            </a>
            <p>{footer.credit}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
