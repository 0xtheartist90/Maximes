'use client';

import { useEffect, useRef } from 'react';

// Same loader parameters; the wide theme on desktop, OpenTable's own standard (compact) theme on phones.
const loaderSrc = (theme: 'wide' | 'standard') =>
    `https://www.opentable.ca/widget/reservation/loader?rid=1306744&type=standard&theme=${theme}&color=8&dark=true&iframe=false&domain=ca&lang=en-CA&newtab=false&ot_source=Restaurant%20website&font=arial&ot_logo=standard&primary_color=000000&primary_font_color=ede8cc&button_color=7b1f21&button_font_color=ffffff&cfe=true`;

const OpenTableWidget = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (!document.getElementById('ot-widget-overrides')) {
            const style = document.createElement('style');
            style.id = 'ot-widget-overrides';
            style.textContent = [
                '.ot-dtp-picker .ot-title{display:none!important}',
                // Desktop only: drop the widget's dark panel and the leftover white form strip.
                // The mobile standard theme needs its own backgrounds, so it stays untouched.
                '@media (min-width:768px){',
                '.ot-dtp-picker{background:transparent!important;padding:0!important}',
                '.ot-dtp-picker .ot-dtp-picker-form{width:fit-content!important}',
                '}',
                // The wide theme lays its fields out side by side at a fixed width;
                // stack them full-width on phones so nothing runs off screen.
                '@media (max-width:767px){',
                '[id^=ot-widget-container],#ot-reservation-widget{width:100%!important;max-width:100%!important}',
                '.ot-dtp-picker{width:100%!important;max-width:100%!important;min-width:0!important}',
                '.ot-dtp-picker .ot-dtp-picker-form{width:100%!important}',
                '.ot-dtp-picker .ot-dtp-picker-selector,.ot-dtp-picker .ot-dtp-picker-button{display:block!important;width:100%!important;max-width:100%!important;margin:0 0 8px 0!important}',
                '}'
            ].join('');
            document.head.appendChild(style);
        }
        // The loader inserts a widget container every time it executes, which under
        // StrictMode/Fast Refresh can stack duplicates. Keep only the first container.
        const dedupe = () => {
            const containers = el.querySelectorAll('[id^="ot-widget-container"]');
            for (let i = 1; i < containers.length; i++) containers[i].remove();
        };
        const observer = new MutationObserver(dedupe);
        observer.observe(el, { childList: true, subtree: true });
        dedupe();
        if (!el.querySelector('[id^="ot-widget-container"], script')) {
            const theme = window.matchMedia('(max-width: 767px)').matches ? 'standard' : 'wide';
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = loaderSrc(theme);
            script.async = true;
            el.appendChild(script);
        }

        return () => {
            observer.disconnect();
            el.replaceChildren();
        };
    }, []);

    return <div ref={ref} className='flex w-full max-w-3xl justify-center md:justify-start' />;
};

export default OpenTableWidget;
