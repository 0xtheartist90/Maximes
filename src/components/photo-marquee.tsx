'use client';

import { useEffect, useRef, useState } from 'react';

import LightboxImage from '@/components/lightbox-image';

type Photo = { src: string; alt: string };

// Endless strip of photos at a shared height, each at its natural width.
// Two identical copies slide by half the track, so the loop is seamless. Duration scales with the
// number of photos so every strip moves at roughly the same pace.
const PhotoMarquee = ({ photos }: { photos: Photo[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    // Photos further along the strip sit off-screen sideways, so native lazy loading would only fetch
    // them as they slide in. Once the strip is about a screen away, load the whole set up front.
    const [near, setNear] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setNear(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '100% 0px' }
        );
        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className='overflow-hidden'>
            <div className='photo-marquee flex w-max' style={{ animationDuration: `${photos.length * 8}s` }}>
                {[0, 1].map((copy) => (
                    <div key={copy} className='flex shrink-0 gap-3 pr-3 md:gap-4 md:pr-4' aria-hidden={copy === 1}>
                        {photos.map((photo) => (
                            <div key={photo.src} className='h-[60vh] max-h-[680px] min-h-[360px] shrink-0'>
                                <LightboxImage
                                    src={photo.src}
                                    alt={copy === 1 ? '' : photo.alt}
                                    // Portraits render about 40vh wide; slightly under-reporting on phones keeps
                                    // high-density screens on the small variant.
                                    sizes='(max-width: 767px) 30vh, 45vh'
                                    loading={near ? 'eager' : 'lazy'}
                                    className='h-full w-auto max-w-[85vw] object-cover md:max-w-none'
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoMarquee;
