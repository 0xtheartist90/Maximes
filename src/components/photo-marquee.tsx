import LightboxImage from '@/components/lightbox-image';

type Photo = { src: string; alt: string };

// Endless strip of photos at a shared height, each at its natural width.
// Two identical copies slide by half the track, so the loop is seamless. Duration scales with the
// number of photos so every strip moves at roughly the same pace.
const PhotoMarquee = ({ photos }: { photos: Photo[] }) => (
    <div className='overflow-hidden'>
        <div className='photo-marquee flex w-max' style={{ animationDuration: `${photos.length * 8}s` }}>
            {[0, 1].map((copy) => (
                <div key={copy} className='flex shrink-0 gap-3 pr-3 md:gap-4 md:pr-4' aria-hidden={copy === 1}>
                    {photos.map((photo) => (
                        <div key={photo.src} className='h-[60vh] max-h-[680px] min-h-[360px] shrink-0'>
                            <LightboxImage
                                src={photo.src}
                                alt={copy === 1 ? '' : photo.alt}
                                className='h-full w-auto max-w-[85vw] object-cover md:max-w-none'
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
);

export default PhotoMarquee;
