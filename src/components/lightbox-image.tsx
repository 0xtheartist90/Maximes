'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const LightboxImage = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <>
            <img
                src={src}
                alt={alt}
                loading='lazy'
                className={`cursor-zoom-in ${className}`}
                onClick={() => setOpen(true)}
            />
            {open &&
                createPortal(
                    <div
                        role='dialog'
                        aria-modal='true'
                        aria-label={alt}
                        className='fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black'
                        onClick={() => setOpen(false)}>
                        <img src={src} alt={alt} className='h-full w-full object-contain' />
                        <button
                            aria-label='Close'
                            onClick={() => setOpen(false)}
                            className='absolute top-4 right-6 text-4xl leading-none font-light text-white/70 transition-colors hover:text-white'>
                            ×
                        </button>
                    </div>,
                    document.body
                )}
        </>
    );
};

export default LightboxImage;
