'use client';

import { useEffect, useRef } from 'react';

// Looping hero reel. Phones get a vertical 9:16 cut taken from the full-resolution source,
// larger screens the landscape cut.
const HeroVideo = ({ className = '' }: { className?: string }) => {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = ref.current;
        if (!video) return;
        // React doesn't reflect `muted` as an attribute, and browsers only autoplay muted video.
        video.muted = true;
        if (!video.querySelector('source')) {
            const cut = window.matchMedia('(max-width: 767px)').matches ? 'mobile' : 'desktop';
            video.poster = `/video/hero-${cut}-poster.jpg`;
            video.append(
                Object.assign(document.createElement('source'), { src: `/video/hero-${cut}.webm`, type: 'video/webm' }),
                Object.assign(document.createElement('source'), { src: `/video/hero-${cut}.mp4`, type: 'video/mp4' })
            );
            video.load();
        }
        const play = () => video.play().catch(() => undefined);
        play();
        // Browsers hold autoplay in background tabs; start the reel once the page is actually seen.
        const onVisible = () => {
            if (document.visibilityState === 'visible' && video.paused) play();
        };
        document.addEventListener('visibilitychange', onVisible);

        return () => document.removeEventListener('visibilitychange', onVisible);
    }, []);

    return <video ref={ref} autoPlay muted loop playsInline preload='auto' className={className} />;
};

export default HeroVideo;
