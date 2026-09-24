import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Hubballi } from 'next/font/google';

import SmoothScroll from '@/components/smooth-scroll';

import '@/app/globals.css';

const hubballi = Hubballi({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-hubballi'
});

const title = "Maxime's Steakhouse Toronto | Prime Steak, Seafood & Cocktails";
const description =
    'Prime dry-aged steaks, seafood towers and theatrical cocktails in King West, Toronto, with a DJ spinning nightly. Open daily until 2 AM. Reserve your table tonight.';

export const metadata: Metadata = {
    title,
    description,
    icons: {
        icon: '/icon.png',
        apple: '/icon.png'
    },
    openGraph: {
        title,
        description,
        images: ['/images/bar-wide.jpg'],
        type: 'website',
        locale: 'en_CA'
    }
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html lang='en'>
            <body className={`${hubballi.variable} maximes-body overscroll-none antialiased`}>
                <SmoothScroll />
                {children}
            </body>
        </html>
    );
};

export default Layout;
