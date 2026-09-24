'use client';

import { useState } from 'react';

type MenuItem = { name: string; price: string; desc?: string };
type SteakGroup = { name: string; origin: string; cuts: { cut: string; price: string }[] };
type Section = { label: string; note?: string; items?: MenuItem[]; steaks?: SteakGroup[]; footer?: string[] };

const SECTIONS: Section[] = [
    {
        label: 'Steak',
        note: 'Prime steaks seasoned with house-made steak spice and aged a minimum of 28 days',
        steaks: [
            {
                name: 'Maxime’s Cut',
                origin: 'Australian chuck, various farms',
                cuts: [{ cut: '8oz wagyu', price: '100' }]
            },
            {
                name: 'Canadian Prime',
                origin: 'Various farms, Canada',
                cuts: [
                    { cut: '12oz striploin', price: '95' },
                    { cut: '18oz bone-in ribeye', price: '130' },
                    { cut: '25oz T-bone', price: '170' }
                ]
            },
            {
                name: 'USDA Prime',
                origin: 'Creekstone Farms, Wichita, Kansas',
                cuts: [
                    { cut: '12oz striploin', price: '115' },
                    { cut: '18oz bone-in ribeye', price: '150' },
                    { cut: '38oz tomahawk', price: '360' }
                ]
            },
            {
                name: 'American Wagyu',
                origin: 'Snake River Farms, Boise, Idaho',
                cuts: [{ cut: '10oz zabuton', price: '150' }]
            },
            {
                name: 'Australian Wagyu',
                origin: 'Oakleigh Ranch, Melbourne',
                cuts: [
                    { cut: '6oz NY striploin', price: '79' },
                    { cut: '8oz filet mignon', price: '125' },
                    { cut: '38oz tomahawk', price: '450' }
                ]
            },
            { name: 'Japanese A5 Wagyu', origin: 'Hyogo', cuts: [{ cut: '4oz striploin', price: '100' }] }
        ],
        footer: [
            'Upgrades: half lobster 45 · jumbo shrimp 35',
            'Sauces 10: brandy peppercorn · jus · chimichurri · béarnaise'
        ]
    },
    {
        label: 'Starters',
        items: [
            {
                name: 'Oysters',
                price: '28 | 55',
                desc: 'Half or full dozen, daily selection, blueberry mignonette, peach chardonnay mignonette, cocktail sauce, fresh horseradish'
            },
            {
                name: 'Jumbo Shrimp Cocktail',
                price: '39',
                desc: '3pc, house cocktail sauce, fresh horseradish, chives'
            },
            { name: 'Burrata Caviar', price: '39', desc: 'Ossetra caviar, burrata, olive oil, balsamic' },
            {
                name: 'Tuna Tartare',
                price: '32',
                desc: 'Avocado, puffed wild rice, sesame, chili, yuzu, ginger, lime, bibb lettuce'
            },
            {
                name: 'Beef Tartare',
                price: '25',
                desc: 'Cornichon, egg yolk, chive, shallot, dijon mustard, aioli, grilled sourdough'
            },
            { name: 'Sizzling Shrimp', price: '30', desc: '5pc, chili-lemon butter, garlic, parsley, baguette' },
            { name: 'Crispy Rock Shrimp', price: '29', desc: 'Yuzu kosho, tempura, lime, cilantro' },
            { name: 'Petit Wagyu Burgers', price: '24', desc: '3pc, secret sauce, onion, pickles, American cheese' },
            { name: 'Wagyu Meatballs', price: '26', desc: 'Sugo, basil, parmigiano, olive oil' },
            {
                name: 'Wagyu Caesar Salad',
                price: '35',
                desc: 'Wagyu beef bacon, gem lettuce, sourdough crouton, parmigiano'
            },
            {
                name: 'Mediterranean Salad',
                price: '25',
                desc: 'Barrel-aged Greek feta, iceberg lettuce, cucumber, olives, dill vinaigrette'
            },
            { name: 'House Bread & Butter', price: '12', desc: '4pc pain au lait, sea salt, house butter' }
        ]
    },
    {
        label: 'Mains & Sides',
        items: [
            {
                name: 'Grilled Lobster',
                price: '49 | 90',
                desc: 'Half or whole, garlic, butter, parsley, lemon, chervil'
            },
            { name: 'Grilled European Sea Bass', price: '35 | 65', desc: 'Half or whole, olive oil, lemon, sea salt' },
            {
                name: 'Greek Roasted Chicken',
                price: '35 | 65',
                desc: 'Half or whole, oregano, tzatziki, red pepper and olive relish, pan jus'
            },
            { name: 'Veal Parmesan', price: '45', desc: 'Marinara sauce, parmigiano, mozzarella, basil' },
            {
                name: 'Spicy Vodka Rigatoni',
                price: '29',
                desc: 'House-made rigatoni, pecorino romano, parmigiano, bomba chili, basil. Add half lobster 45'
            },
            { name: 'Truffle Mashed Potatoes', price: '19', desc: 'Parmesan crust, chive' },
            { name: 'Mac & Cheese', price: '18', desc: 'House-made fusilli, cheddar, chives, toasted bread crumbs' },
            { name: 'House Cut Triple Fries', price: '12', desc: 'Sea salt, tarragon aioli. Make it truffle 8' },
            { name: 'Grilled Broccolini', price: '16', desc: 'Chili, lemon, garlic' }
        ]
    },
    {
        label: 'Cocktails',
        items: [
            { name: 'Maxime’s Martini', price: '28', desc: 'Grey Goose vodka or Bombay Sapphire gin' },
            {
                name: 'Husband Material',
                price: '23',
                desc: 'Canadian craft whiskey, espresso-infused sweet vermouth, cinnamon bitters'
            },
            { name: 'Espresso Martini', price: '24', desc: 'Grey Goose vodka, Kahlúa, espresso' },
            { name: 'Pornstar', price: '24', desc: 'Grey Goose vodka, St-Germain, passionfruit, vanilla' },
            {
                name: 'Hot & Bothered',
                price: '24',
                desc: 'Patrón Silver, Cointreau, cayenne, agave, pineapple and lime'
            },
            { name: 'Swipe Right', price: '20', desc: 'Craft vodka, St-Germain elderflower, ginger syrup, grapefruit' },
            { name: 'Sugar Baby', price: '28', desc: 'Hennessy VS, orange liqueur, lemon juice, sugar rim' },
            { name: 'Dime + 99', price: '24', desc: 'Mint and citrus infused Grey Goose, lime juice, simple syrup' },
            { name: 'Vesper', price: '24', desc: 'Tanqueray gin, Ketel One vodka, Lillet Blanc, lemon twist' },
            {
                name: 'Lychee Martini',
                price: '24',
                desc: 'Ketel One vodka, lychee liqueur, fresh lychee juice, white vermouth'
            }
        ]
    },
    {
        label: 'Dessert',
        items: [
            { name: 'Bananas Foster Baked Alaska', price: '25', desc: 'Spiced rum, coffee financier, salted caramel' },
            { name: 'Milk & Honey Baklava', price: '20', desc: 'Milk crisp, honeycomb, cream cheese semifreddo' },
            { name: 'Tsunami Tiramisu', price: '20', desc: 'Frangelico, espresso, mascarpone' },
            { name: 'Seasonal Sorbet', price: '10' }
        ]
    },
    {
        label: 'Sunday Brunch',
        note: 'Every Sunday · 11 AM to 3:30 PM',
        items: [
            {
                name: 'Steak & Eggs',
                price: '39',
                desc: 'Canadian prime striploin, 2 eggs, breakfast potatoes, chimichurri, toast. Make it wagyu zabuton 10'
            },
            {
                name: 'Coffee Cake French Toast',
                price: '24',
                desc: 'Spiced maple, espresso glaze, whipped mascarpone, blueberry compote'
            },
            {
                name: 'Crab Cake Benedict',
                price: '29',
                desc: 'English muffin, Old Bay hollandaise, blue crab, breakfast potatoes'
            },
            {
                name: 'Salmon & Caviar Rosti',
                price: '28',
                desc: 'Vodka-cured salmon, caviar, sour cream, dill, pickled red onion'
            },
            {
                name: 'Dutch Baby',
                price: '26',
                desc: 'Apple compote, salted caramel, maple, brown butter ice cream, lemon chantilly'
            },
            { name: 'Grilled Oysters', price: '32', desc: '6pc, parmesan and bomba butter, lemon, pangrattato' },
            {
                name: 'Maxime’s Breakfast',
                price: '28',
                desc: '2 eggs, double smoked bacon, house-made sausage, potatoes, toast'
            },
            {
                name: 'Espresso Martini Flight',
                price: '40',
                desc: 'Choice of three: original, tiramisu, crème brûlée, matcha, pistachio or pumpkin'
            }
        ]
    },
    {
        label: 'Happy Hour',
        note: 'Sunday to Thursday · 5 to 7 PM',
        items: [
            {
                name: 'Oysters',
                price: '18',
                desc: '6pc, daily selection, mignonettes, cocktail sauce, fresh horseradish'
            },
            {
                name: 'Happy Hour Cocktails',
                price: '14',
                desc: 'Black Velvet Affogato, Just Peachy, Smoke Show, Sangria Blanche or Rouge'
            },
            {
                name: 'Truffled Duet',
                price: '30',
                desc: 'A truffle-infused Grey Goose martini paired with truffle house-cut fries'
            },
            { name: 'Tuna Tartare', price: '16', desc: 'Avocado, puffed wild rice, sesame, chili, yuzu, ginger' },
            { name: 'Beef Tartare', price: '16', desc: 'Cornichon, egg yolk, chive, shallot, grilled sourdough' },
            { name: 'Crispy Rock Shrimp', price: '18', desc: 'Yuzu kosho, tempura, lime, cilantro' },
            { name: 'Petit Wagyu Burgers', price: '15', desc: '2pc, secret sauce, onion, pickles, American cheese' },
            { name: 'House Cut Triple Fries', price: '9', desc: 'Sea salt, tarragon aioli' }
        ]
    }
];

// Styled after maximestoronto.com/food-menu: underlined script tabs, capitalised names over a gold hairline.
const MenuTabs = () => {
    const [active, setActive] = useState(0);
    const section = SECTIONS[active];

    return (
        <div>
            <div className='flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12'>
                {SECTIONS.map((s, i) => (
                    <button
                        key={s.label}
                        onClick={() => setActive(i)}
                        className={`font-display border-b pb-1 text-xl transition-colors md:text-2xl ${
                            i === active
                                ? 'border-[#b5986d] text-[#b5986d]'
                                : 'border-[#ede8cc]/60 text-[#ede8cc] hover:border-[#b5986d] hover:text-[#b5986d]'
                        }`}>
                        {s.label}
                    </button>
                ))}
            </div>

            <div className='mx-auto mt-14 max-w-5xl'>
                <h3 className='font-display text-3xl text-[#b5986d] uppercase md:text-4xl'>{section.label}</h3>
                {section.note && <p className='mt-2 text-sm text-[#ede8cc]/60 italic'>{section.note}</p>}

                {section.steaks && (
                    <div className='mt-8 grid gap-x-16 gap-y-10 md:grid-cols-2'>
                        {section.steaks.map((group) => (
                            <div key={group.name}>
                                <div className='border-b border-[#b5986d]/70 pb-2'>
                                    <h4 className='font-display text-xl text-[#ede8cc] uppercase md:text-2xl'>
                                        {group.name}
                                    </h4>
                                </div>
                                <p className='mt-2 text-sm text-[#ede8cc]/55'>{group.origin}</p>
                                <ul className='mt-3 space-y-1.5'>
                                    {group.cuts.map((c) => (
                                        <li
                                            key={c.cut}
                                            className='flex items-baseline justify-between gap-3 text-[15px]'>
                                            <span className='text-[#ede8cc]/85'>{c.cut}</span>
                                            <span className='font-display shrink-0 text-lg text-[#b5986d]'>
                                                {c.price}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {section.items && (
                    <div className='mt-8 grid gap-x-16 gap-y-8 md:grid-cols-2'>
                        {section.items.map((item) => (
                            <div key={item.name}>
                                <div className='flex items-baseline justify-between gap-4 border-b border-[#b5986d]/70 pb-2'>
                                    <h4 className='font-display text-xl text-[#ede8cc] uppercase md:text-2xl'>
                                        {item.name}
                                    </h4>
                                    <span className='font-display shrink-0 text-xl text-[#b5986d]'>{item.price}</span>
                                </div>
                                {item.desc && (
                                    <p className='mt-2 text-[15px] leading-relaxed text-[#ede8cc]/65 lowercase'>
                                        {item.desc}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {section.footer && (
                    <div className='mt-10 space-y-1 text-sm text-[#ede8cc]/60 italic'>
                        {section.footer.map((line) => (
                            <p key={line}>{line}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuTabs;
