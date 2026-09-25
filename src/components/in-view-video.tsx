'use client';

import { useEffect, useRef } from 'react';

// Muted looping clip that only starts downloading and playing once it nears the viewport,
// and pauses again when it scrolls away, so it doesn't weigh on the initial page load.
const InViewVideo = ({
    webm,
    mp4,
    poster,
    label,
    className = ''
}: {
    webm: string;
    mp4: string;
    poster: string;
    label: string;
    className?: string;
}) => {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = ref.current;
        if (!video) return;
        video.muted = true;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (!video.querySelector('source')) {
                        video.append(
                            Object.assign(document.createElement('source'), { src: webm, type: 'video/webm' }),
                            Object.assign(document.createElement('source'), { src: mp4, type: 'video/mp4' })
                        );
                        video.load();
                    }
                    video.play().catch(() => undefined);
                } else {
                    video.pause();
                }
            },
            { rootMargin: '200px 0px' }
        );
        observer.observe(video);

        return () => observer.disconnect();
    }, [webm, mp4]);

    return (
        <video
            ref={ref}
            muted
            loop
            playsInline
            preload='none'
            poster={poster}
            aria-label={label}
            className={className}
        />
    );
};

export default InViewVideo;
