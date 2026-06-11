import Image from 'next/image';
import { gallery } from '@/lib/content';

function GalleryTile({ item }) {
  const wide = item.span === 'wide';
  // On mobile the wide tile spans the full row (2 cols) so its content is visible.
  const wrapClass = `group relative overflow-hidden rounded-2xl border border-ink-3 bg-ink-2 ${
    wide ? 'col-span-2 sm:col-span-2 sm:row-span-2' : ''
  }`;
  const sizes = wide
    ? '(max-width: 768px) 100vw, 66vw'
    : '(max-width: 768px) 50vw, 33vw';

  if (item.kind === 'image') {
    return (
      <figure className={wrapClass}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={sizes}
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </figure>
    );
  }

  // video — autoplay, muted, looped, no controls/badges
  return (
    <figure className={wrapClass}>
      <video
        src={item.src}
        poster={item.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={item.alt}
        className="absolute inset-0 h-full w-full bg-black object-cover"
      />
    </figure>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 md:py-28 scroll-mt-24 border-t border-ink-3/60">
      <div className="container-page">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="pill">Gallery</span>
          <h2 className="mt-4 display-heading text-4xl md:text-5xl text-bone">
            From the{' '}
            <span className="text-accent">driveway.</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Real cars, real jobs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[240px] md:auto-rows-[280px] gap-3">
          {gallery.map((item, i) => (
            <GalleryTile key={item.src + i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
