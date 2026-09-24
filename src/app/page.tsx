import type { ReactNode } from 'react';

import LightboxImage from '@/components/lightbox-image';
import MenuTabs from '@/components/menu-tabs';
import OpenTableWidget from '@/components/opentable-widget';
import Reveal from '@/components/reveal';

const PHONE_HREF = 'tel:+16474847476';
const PHONE_LABEL = '647 484 7476';

const HIGHLIGHTS = [
    'Prime steaks aged 28 days minimum',
    'Seafood towers & Ossetra caviar',
    'Theatrical cocktails',
    'DJ spinning nightly from 8:30 PM',
    'Open daily until 2 AM',
    'Sunday brunch 11 AM to 3:30 PM',
    'Happy hour Sunday to Thursday 5 to 7 PM',
    '77 Portland St · King West'
];

// All food shots are 2:3 portraits, so a uniform 2:3 grid shows every plate uncropped.
const FOOD = [
    { src: '/images/steak-lobster.jpg', alt: 'Sliced prime steak with grilled half lobster and lemon at Maxime’s Toronto' },
    { src: '/images/tomahawk.jpg', alt: 'Carved tomahawk steak on a wooden board with house bread' },
    { src: '/images/seafood-tower-table.jpg', alt: 'Seafood tower with oysters, shrimp and lobster beside a steak' },
    { src: '/images/oysters-table.jpg', alt: 'Guests sharing oysters and seafood at Maxime’s steakhouse' },
    { src: '/images/dover-sole.jpg', alt: 'Whole fish in herb butter with lemon at Maxime’s' },
    { src: '/images/tuna-tartare.jpg', alt: 'Tuna tartare with puffed wild rice and shaved truffle' },
    { src: '/images/table-flambe.jpg', alt: 'Cocktail and flaming dish on a candlelit table at Maxime’s' },
    { src: '/images/baked-alaska.jpg', alt: 'Bananas Foster Baked Alaska being flambéed' }
];

const COCKTAILS = [
    { src: '/images/martini-pour.jpg', alt: 'Martini being strained into a chilled glass at the bar' },
    { src: '/images/espresso-martini.jpg', alt: 'Espresso martini with crema on the marble bar' },
    { src: '/images/prestige-caesars.jpg', alt: 'Le Prestige Caesars topped with lobster, shrimp and oysters' },
    { src: '/images/cocktail-red.jpg', alt: 'Red foam-topped cocktail being poured in the dark' }
];

// Portraits fill one 2:3 cell; landscapes span two columns at 4:3, so every row keeps the same height.
const ROOM: { src: string; alt: string; wide?: boolean }[] = [
    { src: '/images/bar-wide.jpg', alt: 'The gold-lit arched bar and dining room at Maxime’s King West', wide: true },
    { src: '/images/dining-room.jpg', alt: 'Full dining room with leather banquettes facing the bar' },
    { src: '/images/curtain-table.jpg', alt: 'Candlelit table for two beneath red velvet curtains' },
    { src: '/images/banquette.jpg', alt: 'Velvet banquettes and art deco pillars in the dining room' },
    { src: '/images/candlelit-booths.jpg', alt: 'Candlelit booths in the lounge' },
    { src: '/images/bar-crowd.jpg', alt: 'Guests gathering at the bar on a busy night' },
    { src: '/images/caesar-bar.jpg', alt: 'Bartender garnishing Caesars at the bar' },
    { src: '/images/bar-seats.jpg', alt: 'Two guests with cocktails at the backlit bar' },
    { src: '/images/bar-couple.jpg', alt: 'Couple at the bar in front of the champagne wall' },
    { src: '/images/patio.jpg', alt: 'Garden patio with fringed umbrellas and greenery' },
    { src: '/images/patio-dining.jpg', alt: 'Guests dining on the leafy patio at Maxime’s' }
];

// Minimal line icons in a thin-stroke style.
const ExperienceIcon = ({ kind }: { kind: string }) => {
    const common = {
        width: 30,
        height: 30,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.2,
        strokeLinecap: 'round' as const,
        strokeLinejoin: 'round' as const,
        'aria-hidden': true
    };
    switch (kind) {
        case 'steak': // steak cut with bone
            return (
                <svg {...common}>
                    <path d='M4.5 12.5C3.8 8.4 7 4.5 11.6 4.5c4.3 0 7.9 2.9 7.9 6.6 0 2.4-1.5 3.9-3.4 5.1-2 1.3-3 3.3-5.6 3.3-3.2 0-5.4-3-6-7Z' />
                    <circle cx='13.5' cy='10.5' r='2' />
                    <path d='M8 14c1.2.7 2.6.9 4 .6' />
                </svg>
            );
        case 'seafood': // oyster shell
            return (
                <svg {...common}>
                    <path d='M3.5 14.5C5 8 9 5 12 5s7 3 8.5 9.5c-2.5 3-5.3 4.5-8.5 4.5s-6-1.5-8.5-4.5Z' />
                    <path d='M12 5v14' />
                    <path d='M12 19 7.5 7.5' />
                    <path d='m12 19 4.5-11.5' />
                </svg>
            );
        case 'cocktails': // martini glass
            return (
                <svg {...common}>
                    <path d='M4 5h16l-8 8.5L4 5Z' />
                    <path d='M12 13.5V20' />
                    <path d='M8.5 20h7' />
                    <circle cx='14.5' cy='8' r='1' />
                </svg>
            );
        default: // sound: vinyl record
            return (
                <svg {...common}>
                    <circle cx='12' cy='12' r='8.5' />
                    <circle cx='12' cy='12' r='2.5' />
                    <path d='M12 6a6 6 0 0 1 6 6' />
                </svg>
            );
    }
};

const EXPERIENCE = [
    {
        icon: 'steak',
        title: 'The Steak',
        text: 'Canadian and USDA Prime, American and Australian wagyu and Japanese A5, aged a minimum of 28 days and finished with our house-made steak spice.'
    },
    {
        icon: 'seafood',
        title: 'The Seafood',
        text: 'Oysters by the dozen, Ossetra caviar, grilled lobster and Maxime’s Smoking Hot Tower with snow crab, jumbo shrimp and half lobster.'
    },
    {
        icon: 'cocktails',
        title: 'The Cocktails',
        text: 'Theatrical drinks with playful touches, alongside timeless martinis and a champagne list made for celebrating.'
    },
    {
        icon: 'sound',
        title: 'The Night',
        text: 'Lush velvet interiors, deep and soulful sounds and a DJ spinning every night from 8:30 PM. Serving until 2 AM.'
    }
];

const CallButton = ({ label = 'CALL TO RESERVE', className = '' }: { label?: string; className?: string }) => (
    <a
        href={PHONE_HREF}
        className={`inline-block border border-[#b5986d] bg-[#b5986d] px-8 py-4 text-sm tracking-[0.2em] text-black transition-colors duration-300 hover:bg-transparent hover:text-[#b5986d] ${className}`}>
        {label}
    </a>
);

const SectionLabel = ({ children }: { children: string }) => (
    <div className='text-xs tracking-[0.3em] text-[#b5986d] uppercase'>{children}</div>
);

const SectionTitle = ({ children }: { children: ReactNode }) => (
    <h2 className='font-display max-w-3xl text-4xl leading-tight md:text-6xl'>{children}</h2>
);

const Photo = ({ src, alt }: { src: string; alt: string }) => (
    <div className='h-full w-full overflow-hidden'>
        <LightboxImage
            src={src}
            alt={alt}
            className='h-full w-full object-cover transition-transform duration-700 hover:scale-105'
        />
    </div>
);

const Page = () => {
    return (
        <main>
            {/* ── Navigation ─────────────────────────────── */}
            <nav className='fixed top-0 z-50 flex w-full items-center justify-between bg-black/70 px-6 py-4 backdrop-blur-md md:px-12'>
                <img src='/images/maximes-logo-gold.png' alt='Maxime’s' className='h-7 w-auto md:h-9' />
                <a
                    href={PHONE_HREF}
                    className='border border-[#b5986d] px-5 py-2.5 text-xs tracking-[0.2em] text-[#b5986d] transition-colors duration-300 hover:bg-[#b5986d] hover:text-black'>
                    CALL TO RESERVE
                </a>
            </nav>

            {/* ── Hero ───────────────────────────────────── */}
            <section className='relative'>
                <div className='relative flex min-h-svh items-end overflow-hidden'>
                    <picture>
                        <source media='(max-width: 767px)' srcSet='/images/seafood-tower-table.jpg' />
                        <img
                            src='/images/bar-wide.jpg'
                            alt='The gold-lit bar and dining room at Maxime’s Steakhouse Toronto'
                            fetchPriority='high'
                            className='hero-zoom absolute inset-0 h-full w-full object-cover'
                        />
                    </picture>
                    <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30' />
                    <div className='absolute inset-0 hidden bg-gradient-to-r from-black/70 via-black/20 to-transparent md:block' />
                    <div className='relative z-10 w-full px-6 pt-28 pb-10 md:px-12 md:pt-32 md:pb-44'>
                        <div className='text-xs tracking-[0.35em] text-[#b5986d] uppercase md:text-sm'>
                            King West · Toronto
                        </div>
                        <h1 className='font-display mt-4 max-w-3xl text-5xl leading-[1.05] md:text-7xl'>
                            Steak, Seafood
                            <br />& Cocktails
                        </h1>
                        <p className='mt-5 text-[11px] tracking-[0.15em] text-[#ede8cc]/85 uppercase md:text-base md:tracking-[0.25em]'>
                            DJ nightly from 8:30 PM · Open until 2 AM
                        </p>
                    </div>
                </div>
                {/* Below the image on phones; pulled up over it on larger screens. */}
                <div className='relative z-10 px-6 pt-6 pb-2 md:-mt-36 md:px-12 md:pt-0 md:pb-16'>
                    <OpenTableWidget />
                </div>
            </section>

            {/* ── Highlights marquee ─────────────────────── */}
            <section className='overflow-hidden border-y border-[#b5986d]/20 bg-black py-6'>
                <div className='marquee-track flex w-max'>
                    {[0, 1].map((copy) => (
                        <div key={copy} className='flex' aria-hidden={copy === 1}>
                            {HIGHLIGHTS.map((item) => (
                                <div
                                    key={item}
                                    className='font-display flex shrink-0 items-center gap-8 pr-8 text-xl whitespace-nowrap md:text-2xl'>
                                    <span>{item}</span>
                                    <span className='text-xs text-[#b5986d]'>◆</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── The food ───────────────────────────────── */}
            <section id='food' className='px-6 py-20 md:px-12 md:py-28'>
                <div className='grid gap-10 md:grid-cols-[240px_1fr] md:gap-16'>
                    <div className='md:sticky md:top-28 md:self-start'>
                        <SectionLabel>/THE FOOD</SectionLabel>
                        <p className='mt-4 hidden text-sm leading-relaxed text-[#ede8cc]/70 md:block'>
                            Timeless steakhouse dishes enhanced with playful, unique touches, served late into the night.
                        </p>
                    </div>
                    <div>
                        <Reveal>
                            <SectionTitle>Prime cuts, fresh seafood and a table worth lingering over</SectionTitle>
                        </Reveal>
                        <div className='mt-12 grid grid-cols-2 gap-4 md:grid-cols-4'>
                            {FOOD.map((photo, i) => (
                                <Reveal key={photo.src} delay={(i % 4) * 100} className='aspect-[2/3]'>
                                    <Photo {...photo} />
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── The menu ───────────────────────────────── */}
            <section id='menu' className='border-t border-[#b5986d]/20 px-6 py-20 md:px-12 md:py-28'>
                <div className='grid gap-10 md:grid-cols-[240px_1fr] md:gap-16'>
                    <div className='md:sticky md:top-28 md:self-start'>
                        <SectionLabel>/THE MENU</SectionLabel>
                        <p className='mt-4 hidden text-sm leading-relaxed text-[#ede8cc]/70 md:block'>
                            Dinner daily from 5 PM, Sunday brunch and happy hour Sunday to Thursday. Prices in CAD.
                        </p>
                    </div>
                    <div>
                        <Reveal>
                            <SectionTitle>From the raw bar to the tomahawk</SectionTitle>
                        </Reveal>
                        <Reveal className='mt-10'>
                            <div className='deco-frame grid gap-6 p-8 md:grid-cols-[1fr_220px] md:items-center md:p-10'>
                                <div>
                                    <div className='flex flex-wrap items-baseline justify-between gap-4'>
                                        <h3 className='font-display text-3xl md:text-4xl'>Maxime’s Smoking Hot Tower</h3>
                                        <span className='text-lg text-[#b5986d]'>225</span>
                                    </div>
                                    <p className='mt-4 max-w-2xl leading-relaxed text-[#ede8cc]/65'>
                                        A dozen oysters, jumbo shrimp cocktail, tuna ceviche, snow crab claws, half lobster
                                        and sizzling shrimp with an array of accompaniments. Add caviar and blinis, 125.
                                    </p>
                                </div>
                                <div className='hidden aspect-[2/3] overflow-hidden md:block'>
                                    <LightboxImage
                                        src='/images/seafood-tower-table.jpg'
                                        alt='Maxime’s seafood tower on the table'
                                        className='h-full w-full object-cover'
                                    />
                                </div>
                            </div>
                        </Reveal>
                        <Reveal className='mt-12'>
                            <MenuTabs />
                        </Reveal>
                        <Reveal className='mt-12'>
                            <CallButton />
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ── The experience ─────────────────────────── */}
            <section className='border-t border-[#b5986d]/20 px-6 py-20 md:px-12 md:py-28'>
                <div className='grid gap-10 md:grid-cols-[240px_1fr] md:gap-16'>
                    <div className='md:sticky md:top-28 md:self-start'>
                        <SectionLabel>/THE EXPERIENCE</SectionLabel>
                        <p className='mt-4 hidden text-sm leading-relaxed text-[#ede8cc]/70 md:block'>
                            Her name means &lsquo;greatest&rsquo;, and every part of the evening is built to live up to it.
                        </p>
                    </div>
                    <div>
                        <div className='divide-y divide-[#b5986d]/20'>
                            {EXPERIENCE.map((item, i) => (
                                <Reveal key={item.title} delay={i * 80}>
                                    <div className='grid gap-3 py-8 md:grid-cols-[280px_1fr] md:gap-10'>
                                        <div className='flex items-center gap-4'>
                                            <span className='text-[#b5986d]'>
                                                <ExperienceIcon kind={item.icon} />
                                            </span>
                                            <h3 className='font-display text-3xl md:text-4xl'>{item.title}</h3>
                                        </div>
                                        <p className='max-w-xl leading-relaxed text-[#ede8cc]/70'>{item.text}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                        <div className='mt-10 grid grid-cols-2 gap-4 md:grid-cols-4'>
                            {COCKTAILS.map((photo, i) => (
                                <Reveal key={photo.src} delay={i * 100} className='aspect-[2/3]'>
                                    <Photo {...photo} />
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── The room ───────────────────────────────── */}
            <section className='border-t border-[#b5986d]/20 px-6 py-20 md:px-12 md:py-28'>
                <div className='grid gap-10 md:grid-cols-[240px_1fr] md:gap-16'>
                    <div className='md:sticky md:top-28 md:self-start'>
                        <SectionLabel>/THE ROOM</SectionLabel>
                        <p className='mt-4 hidden text-sm leading-relaxed text-[#ede8cc]/70 md:block'>
                            A gold-lit bar, velvet banquettes, candlelit booths and a leafy patio in the heart of King West.
                        </p>
                    </div>
                    <div>
                        <Reveal>
                            <SectionTitle>Opulent by design, alive until late</SectionTitle>
                        </Reveal>
                        <div className='mt-12 grid grid-cols-2 gap-4 md:grid-cols-4'>
                            {ROOM.map((photo, i) => (
                                <Reveal
                                    key={photo.src}
                                    delay={(i % 4) * 80}
                                    className={photo.wide ? 'col-span-2 aspect-[4/3]' : 'aspect-[2/3]'}>
                                    <Photo src={photo.src} alt={photo.alt} />
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Private events ─────────────────────────── */}
            <section id='events' className='border-t border-[#b5986d]/20 px-6 py-20 md:px-12 md:py-28'>
                <div className='grid gap-10 md:grid-cols-[240px_1fr] md:gap-16'>
                    <div className='md:sticky md:top-28 md:self-start'>
                        <SectionLabel>/PRIVATE EVENTS</SectionLabel>
                        <p className='mt-4 hidden text-sm leading-relaxed text-[#ede8cc]/70 md:block'>
                            Birthdays, celebrations and corporate evenings, with digital pillars and a projector you can
                            make your own.
                        </p>
                    </div>
                    <div>
                        <Reveal>
                            <SectionTitle>Make the room yours for the night</SectionTitle>
                        </Reveal>
                        <Reveal className='mt-10'>
                            <div className='aspect-[3/2] overflow-hidden'>
                                <LightboxImage
                                    src='/images/private-room.jpg'
                                    alt='Private event space with digital pillars, velvet curtains and long tables'
                                    className='h-full w-full object-cover transition-transform duration-700 hover:scale-105'
                                />
                            </div>
                        </Reveal>
                        <Reveal className='mt-10'>
                            <div className='grid gap-8 md:grid-cols-3'>
                                {[
                                    { value: '100', label: 'Cocktail reception' },
                                    { value: '64', label: 'Seated dinner' },
                                    { value: '12', label: 'Private dining room' }
                                ].map((stat) => (
                                    <div key={stat.label} className='border-t border-[#b5986d]/40 pt-5'>
                                        <div className='font-display text-5xl text-[#b5986d] md:text-6xl'>{stat.value}</div>
                                        <div className='mt-2 text-xs tracking-[0.2em] text-[#ede8cc]/60 uppercase'>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                        <Reveal className='mt-10'>
                            <p className='max-w-2xl leading-relaxed text-[#ede8cc]/70'>
                                A velvet, gold-lit event space of 2,345 sq ft with group dining menus served family style.
                                Call us to plan your evening, or send an inquiry and our events team will be in touch.
                            </p>
                            <div className='mt-8 flex flex-wrap items-center gap-6'>
                                <CallButton label='CALL TO PLAN YOUR EVENT' />
                                <a
                                    href='https://maximestoronto.com/private-events/'
                                    className='text-sm tracking-[0.15em] text-[#ede8cc]/70 uppercase underline underline-offset-8 transition-colors hover:text-[#ede8cc]'>
                                    Send an inquiry
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ── Reserve ────────────────────────────────── */}
            <section id='reserve' className='relative overflow-hidden border-t border-[#b5986d]/20'>
                <img
                    src='/images/curtain-table.jpg'
                    alt=''
                    loading='lazy'
                    className='absolute inset-0 h-full w-full object-cover opacity-30'
                />
                <div className='relative z-10 px-6 py-24 text-center md:px-12 md:py-36'>
                    <Reveal>
                        <SectionLabel>/RESERVE</SectionLabel>
                        <h2 className='font-display mx-auto mt-6 max-w-3xl text-5xl leading-tight md:text-7xl'>
                            Your table in King West is waiting
                        </h2>
                        <p className='mx-auto mt-6 max-w-xl leading-relaxed text-[#ede8cc]/80'>
                            Open daily from 5 PM until 2 AM. Call us and we will set your table.
                        </p>
                        <div className='mt-10 flex justify-center'>
                            <CallButton label={`CALL ${PHONE_LABEL}`} />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── Footer ─────────────────────────────────── */}
            <footer className='border-t border-[#b5986d]/20 px-6 pt-16 pb-8 text-center md:px-12 md:pt-20 md:text-left'>
                <div className='grid grid-cols-2 gap-10 md:grid-cols-[1.4fr_1.2fr_1fr_1fr] md:gap-8'>
                    <div className='col-span-2 md:col-span-1'>
                        <h3 className='font-deco text-4xl text-[#b5986d] uppercase md:text-5xl'>Maxime’s</h3>
                        <p className='mt-2 text-xs tracking-[0.35em] text-[#ede8cc]/70 uppercase'>
                            Steak · Seafood · Cocktails
                        </p>
                        <p className='mx-auto mt-6 max-w-xs text-sm leading-relaxed text-[#ede8cc]/50 italic md:mx-0'>
                            Smart casual dress code is strictly enforced. No hats, hoodies, track pants or sunglasses.
                        </p>
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <div className='mb-4 text-xs tracking-[0.25em] text-[#b5986d] uppercase'>Hours</div>
                        <ul className='mx-auto w-fit space-y-2 text-left text-sm leading-relaxed text-[#ede8cc]/75 md:mx-0'>
                            <li className='flex gap-3'>
                                <span className='w-28 shrink-0 text-[#ede8cc]/45'>Daily</span>
                                <span className='whitespace-nowrap'>5 PM to 2 AM</span>
                            </li>
                            <li className='flex gap-3'>
                                <span className='w-28 shrink-0 text-[#ede8cc]/45'>Sunday brunch</span>
                                <span className='whitespace-nowrap'>11 AM to 3:30 PM</span>
                            </li>
                            <li className='flex gap-3'>
                                <span className='w-28 shrink-0 text-[#ede8cc]/45'>Happy hour</span>
                                <span className='whitespace-nowrap'>Sun to Thu, 5 to 7 PM</span>
                            </li>
                            <li className='flex gap-3'>
                                <span className='w-28 shrink-0 text-[#ede8cc]/45'>DJ</span>
                                <span className='whitespace-nowrap'>Nightly from 8:30 PM</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='mb-4 text-xs tracking-[0.25em] text-[#b5986d] uppercase'>Location</div>
                        <p className='text-sm leading-relaxed text-[#ede8cc]/75'>
                            77 Portland St.
                            <br />
                            Toronto, ON M5V 2M9
                        </p>
                        <a
                            href='https://maps.app.goo.gl/CKNvpvrpiDrt5b296'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mt-3 inline-block text-sm text-[#ede8cc]/75 underline underline-offset-4 transition-colors hover:text-[#ede8cc]'>
                            Get directions
                        </a>
                    </div>
                    <div>
                        <div className='mb-4 text-xs tracking-[0.25em] text-[#b5986d] uppercase'>Contact</div>
                        <ul className='space-y-2 text-sm leading-relaxed'>
                            <li>
                                <a href={PHONE_HREF} className='text-[#ede8cc]/75 transition-colors hover:text-[#ede8cc]'>
                                    {PHONE_LABEL}
                                </a>
                            </li>
                            <li>
                                <a
                                    href='mailto:info@maximestoronto.com'
                                    className='text-xs whitespace-nowrap text-[#ede8cc]/75 transition-colors hover:text-[#ede8cc] md:text-sm'>
                                    info@maximestoronto.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.instagram.com/maximestoronto/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='Follow Maxime’s on Instagram'
                                    className='mt-1 inline-block text-[#ede8cc]/60 transition-colors hover:text-[#ede8cc]'>
                                    <svg
                                        width='20'
                                        height='20'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='1.7'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        aria-hidden='true'>
                                        <rect x='2' y='2' width='20' height='20' rx='5' />
                                        <circle cx='12' cy='12' r='4.5' />
                                        <circle cx='17.2' cy='6.8' r='0.8' fill='currentColor' stroke='none' />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mt-14 flex flex-col gap-2 border-t border-[#b5986d]/20 pt-6 text-xs text-[#ede8cc]/40 md:flex-row md:items-center md:justify-between'>
                    <span>© {new Date().getFullYear()} Maxime’s Toronto</span>
                    <span>77 Portland St., Toronto, ON M5V 2M9</span>
                </div>
            </footer>
        </main>
    );
};

export default Page;
