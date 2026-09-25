import type { ReactNode } from 'react';

import HeroVideo from '@/components/hero-video';
import InViewVideo from '@/components/in-view-video';
import LightboxImage from '@/components/lightbox-image';
import MenuTabs from '@/components/menu-tabs';
import OpenTableWidget from '@/components/opentable-widget';
import PhotoMarquee from '@/components/photo-marquee';
import ResponsiveImg from '@/components/responsive-img';
import Reveal from '@/components/reveal';

const PHONE_HREF = 'tel:+16474847476';
const PHONE_LABEL = '+1 647 484 7476';

// All plates are 2:3 portraits; the first is shown large across two columns and two rows.
const PLATES = [
    {
        src: '/images/steak-lobster.jpg',
        alt: 'Sliced prime steak with grilled half lobster and lemon at Maxime’s Toronto'
    },
    { src: '/images/tomahawk.jpg', alt: 'Carved tomahawk steak on a wooden board with house bread' },
    { src: '/images/oysters-table.jpg', alt: 'Guests sharing oysters and seafood at Maxime’s steakhouse' },
    { src: '/images/tuna-tartare.jpg', alt: 'Tuna tartare with puffed wild rice and shaved truffle' },
    { src: '/images/dover-sole.jpg', alt: 'Whole fish in herb butter with lemon at Maxime’s' },
    { src: '/images/beef-carpaccio.jpg', alt: 'Thinly sliced beef with herbs and parmesan on a dark wood table' },
    { src: '/images/baked-alaska.jpg', alt: 'Bananas Foster Baked Alaska being flambéed' },
    { src: '/images/octopus.jpg', alt: 'Grilled octopus with greens and lemon on a white plate' },
    { src: '/images/seafood-tower-table.jpg', alt: 'Seafood tower with oysters, shrimp and lobster beside a steak' }
];

const GALLERY: { src: string; alt: string }[] = [
    { src: '/images/bar-wide.jpg', alt: 'The gold-lit arched bar and dining room at Maxime’s King West' },
    { src: '/images/dining-room.jpg', alt: 'Full dining room with leather banquettes facing the bar' },
    { src: '/images/curtain-table.jpg', alt: 'Candlelit table for two beneath red velvet curtains' },
    { src: '/images/martini-pour.jpg', alt: 'Martini being strained into a chilled glass at the bar' },
    { src: '/images/banquette.jpg', alt: 'Velvet banquettes and art deco pillars in the dining room' },
    { src: '/images/prestige-caesars.jpg', alt: 'Le Prestige Caesars topped with lobster, shrimp and oysters' },
    { src: '/images/bar-crowd.jpg', alt: 'Guests gathering at the bar on a busy night' },
    { src: '/images/espresso-martini.jpg', alt: 'Espresso martini with crema on the marble bar' },
    { src: '/images/bar-seats.jpg', alt: 'Two guests with cocktails at the backlit bar' },
    { src: '/images/caesar-bar.jpg', alt: 'Bartender garnishing Caesars at the bar' },
    { src: '/images/bar-couple.jpg', alt: 'Couple at the bar in front of the champagne wall' },
    { src: '/images/cocktail-red.jpg', alt: 'Red foam-topped cocktail being poured in the dark' },
    { src: '/images/patio.jpg', alt: 'Garden patio with fringed umbrellas and greenery' },
    { src: '/images/patio-dining.jpg', alt: 'Guests dining on the leafy patio at Maxime’s' }
];

const Title = ({
    children,
    gold = false,
    className = ''
}: {
    children: ReactNode;
    gold?: boolean;
    className?: string;
}) => (
    <h2
        className={`font-display text-5xl leading-tight md:text-[64px] ${gold ? 'text-[#b5986d]' : 'text-[#ede8cc]'} ${className}`}>
        {children}
    </h2>
);

const CallButton = ({ label = 'Call to Reserve', className = '' }: { label?: string; className?: string }) => (
    <a href={PHONE_HREF} className={`btn-gold px-8 py-3.5 text-base tracking-[0.12em] ${className}`}>
        {label}
    </a>
);

const Page = () => {
    return (
        <main>
            {/* ── Navigation: monogram (centred on desktop), gold button right ── */}
            <nav className='fixed top-0 z-50 flex h-16 w-full items-stretch justify-between bg-black'>
                <a
                    href='#top'
                    className='flex items-center pl-5 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:pl-0'>
                    <img src='/images/brand/monogram.png' alt='Maxime’s' className='h-11 w-auto' />
                </a>
                <div className='ml-auto flex items-center pr-5 md:pr-8'>
                    <a href={PHONE_HREF} className='btn-gold px-4 py-2 text-xs tracking-[0.22em] md:px-5 md:text-sm'>
                        Call to Reserve
                    </a>
                </div>
            </nav>

            {/* ── Hero: reel with the wordmark. The reservation widget sits over the bottom of the video on
                 larger screens and drops below it on phones so it never covers the reel. ── */}
            <section id='top' className='relative mt-16 bg-black'>
                <div className='relative flex h-[calc(100svh-64px)] min-h-[480px] items-center justify-center overflow-hidden px-8'>
                    <HeroVideo className='absolute inset-0 h-full w-full object-cover' />
                    {/* Soft vignette so the gold wordmark reads, deepening at the bottom behind the widget */}
                    <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(0_0_0/0.55)_0%,rgb(0_0_0/0.25)_55%,rgb(0_0_0/0.35)_100%)]' />
                    <div className='absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent' />
                    <div className='relative'>
                        <h1 className='hero-logo w-[min(78vw,620px)]'>
                            <img
                                src='/images/maximes-logo-gold.webp'
                                alt='Maxime’s Steakhouse Toronto: steak, seafood and cocktails in King West'
                                className='w-full drop-shadow-[0_2px_18px_rgb(0_0_0/0.75)]'
                            />
                        </h1>
                    </div>
                </div>
                <div className='relative px-5 py-6 md:absolute md:inset-x-0 md:bottom-0 md:pt-0 md:pb-10'>
                    <OpenTableWidget />
                </div>
            </section>

            {/* ── Intro: copy on solid black beside the steak and lobster photo ── */}
            <section className='grid bg-black md:min-h-[640px] md:grid-cols-2'>
                <div className='relative aspect-[4/3] md:order-2 md:aspect-auto'>
                    <ResponsiveImg
                        src='/images/steak-pour.jpg'
                        sizes='(max-width: 767px) 100vw, 50vw'
                        alt='Sauce poured over sliced steak and grilled lobster with red wine and sides at Maxime’s'
                        loading='lazy'
                        className='absolute inset-0 h-full w-full object-cover object-[48%_center]'
                    />
                </div>
                <div className='flex items-center px-6 py-16 md:px-12 md:py-24 lg:px-20'>
                    <Reveal className='max-w-lg'>
                        <div className='text-sm tracking-[0.25em] text-[#b5986d] uppercase'>King West · Toronto</div>
                        <Title className='mt-4'>Steak, Seafood &amp; Cocktails</Title>
                        <p className='mt-6 text-lg leading-relaxed text-[#ede8cc]/85 md:text-xl'>
                            Prime dry-aged steaks, fresh seafood towers and theatrical cocktails, with a DJ spinning
                            every night.
                        </p>
                        <div className='mt-8 border-t border-[#b5986d]/40 pt-5'>
                            <div className='font-display text-2xl text-[#e0bd6e]'>Open daily 5pm to 2am</div>
                            <div className='mt-1 text-sm tracking-[0.15em] text-[#ede8cc]/70 uppercase'>
                                77 Portland St.
                            </div>
                        </div>
                        <CallButton className='mt-9' />
                    </Reveal>
                </div>
            </section>

            {/* ── Signature plates: endless marquee ── */}
            <section id='food' className='bg-black pt-16 pb-6 md:pt-20 md:pb-8'>
                <Reveal className='px-6 text-center'>
                    <Title>Signature Plates</Title>
                    <p className='mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[#ede8cc]/75'>
                        From 28-day aged prime cuts to towers of fresh seafood.
                    </p>
                </Reveal>
                <div className='mt-10'>
                    <PhotoMarquee photos={PLATES} />
                </div>
            </section>

            {/* ── Our Menu: hand-held menu banner, then the menu itself ── */}
            <section id='menu' className='bg-black'>
                <Reveal className='px-6 pt-16 text-center md:pt-20'>
                    <Title>Our Menu</Title>
                    <div className='mx-auto mt-6 flex max-w-xs items-center gap-4' aria-hidden='true'>
                        <span className='h-px flex-1 bg-gradient-to-r from-transparent to-[#b5986d]/80' />
                        <span className='h-2 w-2 rotate-45 border border-[#b5986d]' />
                        <span className='h-px flex-1 bg-gradient-to-l from-transparent to-[#b5986d]/80' />
                    </div>
                </Reveal>

                <div className='px-6 pt-12 pb-16 md:px-12 md:pt-16 md:pb-24'>
                    <div className='mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[0.9fr_1fr] md:gap-20'>
                        <Reveal>
                            {/* Photo with a thin gold frame offset behind it, as in Private Dining */}
                            <div className='relative mx-auto mr-4 mb-4 max-w-md md:mr-6 md:mb-6'>
                                <div className='absolute inset-0 translate-x-4 translate-y-4 border border-[#b5986d]/50 md:translate-x-6 md:translate-y-6' />
                                <div className='relative aspect-[4/5] overflow-hidden'>
                                    <LightboxImage
                                        src='/images/seafood-tower-table.jpg'
                                        sizes='(max-width: 767px) 90vw, 450px'
                                        alt='Maxime’s Smoking Hot Tower with oysters, shrimp and lobster'
                                        className='h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]'
                                    />
                                </div>
                            </div>
                        </Reveal>
                        <Reveal delay={150}>
                            <div className='text-sm tracking-[0.25em] text-[#b5986d] uppercase'>Seafood Tower</div>
                            <Title className='mt-4'>Maxime’s Smoking Hot Tower</Title>
                            <p className='mt-6 text-lg leading-relaxed text-[#ede8cc]/80'>
                                A dozen oysters, jumbo shrimp cocktail, tuna ceviche, snow crab claws, half lobster and
                                sizzling shrimp, served with an array of accompaniments.
                            </p>
                            <div className='mt-8 flex items-end gap-8 border-t border-[#b5986d]/50 pt-5'>
                                <div>
                                    <div className='font-display text-5xl text-[#e0bd6e]'>225</div>
                                    <div className='mt-1 text-xs tracking-[0.2em] text-[#ede8cc]/70 uppercase'>
                                        To share
                                    </div>
                                </div>
                                <div>
                                    <div className='font-display text-3xl text-[#e0bd6e]'>+125</div>
                                    <div className='mt-1 text-xs tracking-[0.2em] text-[#ede8cc]/70 uppercase'>
                                        Caviar &amp; blinis
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal className='mt-20'>
                        <MenuTabs />
                    </Reveal>

                    {/* Spicy Vodka Rigatoni: mirrors the tower feature, with the dish as a looping clip */}
                    <div className='mx-auto mt-24 grid max-w-6xl items-center gap-14 md:grid-cols-[1fr_0.9fr] md:gap-20'>
                        <Reveal className='md:order-2'>
                            <div className='relative mx-auto mr-4 mb-4 max-w-md md:mr-6 md:mb-6'>
                                <div className='absolute inset-0 translate-x-4 translate-y-4 border border-[#b5986d]/50 md:translate-x-6 md:translate-y-6' />
                                <div className='relative aspect-[4/5] overflow-hidden bg-black'>
                                    <InViewVideo
                                        webm='/video/rigatoni.webm'
                                        mp4='/video/rigatoni.mp4'
                                        poster='/video/rigatoni-poster.jpg'
                                        label='Spicy vodka rigatoni being tossed, flambéed and finished with parmigiano and basil'
                                        className='h-full w-full object-cover'
                                    />
                                </div>
                            </div>
                        </Reveal>
                        <Reveal delay={150} className='md:order-1'>
                            <div className='text-sm tracking-[0.25em] text-[#b5986d] uppercase'>House Favourite</div>
                            <Title className='mt-4'>“This spicy vodka rigatoni is pure art”</Title>
                            <p className='mt-6 text-lg leading-relaxed text-[#ede8cc]/80'>
                                House-made rigatoni tossed in a spicy vodka sauce with pecorino romano, parmigiano,
                                bomba chili and fresh basil.
                            </p>
                            <div className='mt-8 flex items-end gap-8 border-t border-[#b5986d]/50 pt-5'>
                                <div>
                                    <div className='font-display text-5xl text-[#e0bd6e]'>29</div>
                                    <div className='mt-1 text-xs tracking-[0.2em] text-[#ede8cc]/70 uppercase'>
                                        To share
                                    </div>
                                </div>
                                <div>
                                    <div className='font-display text-3xl text-[#e0bd6e]'>+45</div>
                                    <div className='mt-1 text-xs tracking-[0.2em] text-[#ede8cc]/70 uppercase'>
                                        Half lobster
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal className='mt-20 text-center'>
                        <CallButton />
                    </Reveal>
                </div>
            </section>

            {/* ── Maxime's Nights: centred editorial composition over the bar at night ── */}
            <section className='relative overflow-hidden bg-black'>
                <ResponsiveImg
                    src='/images/bar-night.jpg'
                    sizes='100vw'
                    alt='A full house beneath brass pendant lamps and the gold-lit arched bar at Maxime’s'
                    loading='lazy'
                    className='absolute inset-0 h-full w-full object-cover object-[52%_center]'
                />
                <div className='absolute inset-0 bg-black/60' />
                <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(0_0_0/0.45)_0%,transparent_70%)]' />
                <div className='relative mx-auto flex min-h-[680px] max-w-5xl items-center justify-center px-6 py-24 text-center lg:min-h-[92vh]'>
                    <Reveal>
                        <div className='flex items-center justify-center gap-4 text-sm tracking-[0.4em] text-[#e0bd6e] uppercase [text-shadow:0_1px_10px_rgb(0_0_0/0.8)] md:text-base'>
                            <span className='h-px w-10 bg-[#b5986d]/70 md:w-16' />
                            After Dark
                            <span className='h-px w-10 bg-[#b5986d]/70 md:w-16' />
                        </div>
                        <h2 className='mt-6 [text-shadow:0_2px_20px_rgb(0_0_0/0.6)]'>
                            <span className='font-deco block text-5xl leading-none text-[#e0bd6e] uppercase md:text-7xl'>
                                Maxime’s
                            </span>
                            <span className='font-deco mt-2 block text-7xl leading-none text-white uppercase md:text-[128px]'>
                                Nights
                            </span>
                        </h2>
                        <div className='mx-auto mt-10 flex max-w-xs items-center gap-4' aria-hidden='true'>
                            <span className='h-px flex-1 bg-gradient-to-r from-transparent to-[#b5986d]/80' />
                            <span className='h-2 w-2 rotate-45 border border-[#b5986d]' />
                            <span className='h-px flex-1 bg-gradient-to-l from-transparent to-[#b5986d]/80' />
                        </div>
                        <ul className='font-display mx-auto mt-10 flex flex-col items-center gap-5 text-2xl text-white uppercase [-webkit-text-stroke:0.6px_currentColor] [text-shadow:0_2px_14px_rgb(0_0_0/0.9)] md:flex-row md:justify-center md:gap-0 md:text-[32px]'>
                            {['DJ from 8:30pm', 'Theatrical cocktails', 'Open until 2am'].map((item, i) => (
                                <li key={item} className='flex items-center whitespace-nowrap'>
                                    {i > 0 && (
                                        <span
                                            className='mr-4 hidden h-8 w-px bg-[#b5986d]/70 md:mr-8 md:block'
                                            aria-hidden='true'
                                        />
                                    )}
                                    <span className={i < 2 ? 'md:mr-8' : ''}>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <CallButton label='Book Your Night' className='mt-12' />
                    </Reveal>
                </div>
            </section>

            {/* ── Gallery: endless marquee of the room ── */}
            <section aria-label='Gallery' className='bg-black py-6 md:py-8'>
                <PhotoMarquee photos={GALLERY} />
            </section>

            {/* ── Private dining and events ── */}
            <section id='events' className='bg-black px-6 py-20 md:px-12 md:py-32'>
                <div className='mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.15fr_1fr] md:gap-20'>
                    <Reveal>
                        {/* Photo with a thin gold frame offset behind it */}
                        <div className='relative mr-4 mb-4 md:mr-6 md:mb-6'>
                            <div className='absolute inset-0 translate-x-4 translate-y-4 border border-[#b5986d]/50 md:translate-x-6 md:translate-y-6' />
                            <div className='relative aspect-[4/3] overflow-hidden'>
                                <LightboxImage
                                    src='/images/private-room.jpg'
                                    sizes='(max-width: 767px) 90vw, 50vw'
                                    alt='Private event space with digital pillars, velvet curtains and long tables'
                                    className='h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]'
                                />
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={150}>
                        <div className='text-sm tracking-[0.25em] text-[#b5986d] uppercase'>
                            Private Dining &amp; Events
                        </div>
                        <Title className='mt-4'>Make the Night Yours</Title>
                        <p className='mt-6 text-lg leading-relaxed text-[#ede8cc]/80'>
                            A velvet, gold-lit room for birthdays, celebrations and corporate evenings, with digital
                            pillars you can make your own and group menus served family style.
                        </p>
                        <div className='mt-10 grid grid-cols-3 gap-6'>
                            {[
                                { value: '100', label: 'Cocktail' },
                                { value: '64', label: 'Seated' },
                                { value: '12', label: 'Private room' }
                            ].map((stat) => (
                                <div key={stat.label} className='border-t border-[#b5986d]/50 pt-4'>
                                    <div className='font-display text-4xl text-[#e0bd6e] md:text-5xl'>{stat.value}</div>
                                    <div className='mt-1 text-xs tracking-[0.2em] text-[#ede8cc]/70 uppercase'>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='mt-10 flex flex-wrap items-center gap-6'>
                            <a href={PHONE_HREF} className='btn-gold px-8 py-3.5 text-base tracking-[0.12em]'>
                                Call to Plan Your Event
                            </a>
                            <a
                                href='https://maximestoronto.com/private-events/'
                                className='font-display border-b border-[#ede8cc]/60 pb-0.5 text-lg transition-colors hover:border-[#b5986d] hover:text-[#b5986d]'>
                                Send an Inquiry
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── Reserve Now ── */}
            <section id='reserve' className='relative overflow-hidden bg-black'>
                <ResponsiveImg
                    src='/images/table-flambe.jpg'
                    sizes='100vw'
                    alt=''
                    loading='lazy'
                    className='absolute inset-0 h-full w-full object-cover'
                />
                <div className='absolute inset-0 bg-black/70' />
                <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(0_0_0/0.45)_0%,transparent_70%)]' />
                <div className='relative px-6 py-28 text-center md:py-40'>
                    <Reveal>
                        <h2 className='font-display text-5xl leading-tight text-[#e0bd6e] [text-shadow:0_2px_18px_rgb(0_0_0/0.8)] md:text-[72px]'>
                            Reserve Now
                        </h2>
                        <p className='font-display mt-5 text-lg text-[#ede8cc] uppercase [text-shadow:0_1px_12px_rgb(0_0_0/0.9)] md:text-2xl'>
                            Open daily 5pm to 2am
                            <span className='mx-3 hidden text-[#b5986d] md:inline'>·</span>
                            <span className='block md:inline'>DJ from 8:30pm</span>
                        </p>
                        <div className='mt-10'>
                            <OpenTableWidget />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className='border-t border-[#b5986d]/20 bg-black px-6 pt-20 pb-10 md:px-12'>
                <div className='mx-auto max-w-5xl text-center'>
                    <img
                        src='/images/maximes-logo-gold.webp'
                        alt='Maxime’s: Steak, Seafood, Cocktails'
                        className='mx-auto w-56 md:w-64'
                    />
                    {/* Art-deco divider: hairlines either side of a small gold diamond */}
                    <div className='mx-auto mt-10 flex max-w-md items-center gap-4' aria-hidden='true'>
                        <span className='h-px flex-1 bg-gradient-to-r from-transparent to-[#b5986d]/70' />
                        <span className='h-2 w-2 rotate-45 border border-[#b5986d]' />
                        <span className='h-px flex-1 bg-gradient-to-l from-transparent to-[#b5986d]/70' />
                    </div>

                    <div className='mt-14 grid gap-14 md:grid-cols-3 md:gap-10'>
                        <div>
                            <h3 className='font-display text-xl tracking-wide text-[#e0bd6e] uppercase'>Visit</h3>
                            <p className='mt-5 text-[0.9375rem] leading-relaxed text-[#ede8cc]/85'>
                                77 Portland St.
                                <br />
                                Toronto, ON M5V 2M9
                            </p>
                            <a
                                href='https://maps.app.goo.gl/CKNvpvrpiDrt5b296'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='font-display mt-4 inline-block border-b border-[#b5986d]/60 pb-0.5 text-[0.9375rem] tracking-[0.12em] text-[#e0bd6e] uppercase transition-colors hover:border-[#e0bd6e]'>
                                Get Directions
                            </a>
                        </div>

                        <div>
                            <h3 className='font-display text-xl tracking-wide text-[#e0bd6e] uppercase'>Hours</h3>
                            <dl className='mx-auto mt-5 max-w-[17rem] space-y-2.5 text-[0.9375rem]'>
                                {[
                                    { day: 'Daily', time: '5pm to 2am' },
                                    { day: 'Sunday brunch', time: '11am to 3:30pm' },
                                    { day: 'Happy hour', time: 'Sun to Thu, 5 to 7pm' },
                                    { day: 'DJ', time: 'Nightly from 8:30pm' }
                                ].map((row) => (
                                    <div key={row.day} className='flex items-baseline justify-between gap-4'>
                                        <dt className='text-[#ede8cc]/55'>{row.day}</dt>
                                        <dd className='text-right text-[#ede8cc]/90'>{row.time}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div>
                            <h3 className='font-display text-xl tracking-wide text-[#e0bd6e] uppercase'>Contact</h3>
                            <a
                                href={PHONE_HREF}
                                className='font-display mt-5 block text-2xl text-[#ede8cc] transition-colors hover:text-[#e0bd6e]'>
                                {PHONE_LABEL}
                            </a>
                            <a
                                href='mailto:info@maximestoronto.com'
                                className='mt-2 block text-[0.9375rem] text-[#ede8cc]/75 transition-colors hover:text-[#e0bd6e]'>
                                info@maximestoronto.com
                            </a>
                            <a
                                href='https://www.instagram.com/maximestoronto/'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Follow Maxime’s on Instagram'
                                className='mt-4 inline-flex items-center gap-2 text-[0.9375rem] text-[#ede8cc]/75 transition-colors hover:text-[#e0bd6e]'>
                                <svg
                                    width='18'
                                    height='18'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='1.6'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    aria-hidden='true'>
                                    <rect x='2' y='2' width='20' height='20' rx='5' />
                                    <circle cx='12' cy='12' r='4.5' />
                                    <circle cx='17.2' cy='6.8' r='0.8' fill='currentColor' stroke='none' />
                                </svg>
                                @maximestoronto
                            </a>
                        </div>
                    </div>

                    <p className='mx-auto mt-16 max-w-md text-sm leading-relaxed text-[#ede8cc]/55 italic'>
                        Smart casual dress code is strictly enforced. No hats, hoodies, track pants, or sunglasses.
                    </p>
                </div>

                <div className='mx-auto mt-12 flex max-w-5xl flex-col items-center gap-2 border-t border-[#b5986d]/20 pt-6 text-xs tracking-wide text-[#ede8cc]/40 md:flex-row md:justify-between'>
                    <span>© {new Date().getFullYear()} Maxime’s Toronto</span>
                    <span>Steak · Seafood · Cocktails in King West</span>
                </div>
            </footer>
        </main>
    );
};

export default Page;
