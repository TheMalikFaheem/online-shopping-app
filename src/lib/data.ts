export interface Product {
    id: string;
    slug: string;
    name: string;
    price: number;
    category: 'men' | 'women';
    type: 'chelsea' | 'combat' | 'chunky' | 'hiking' | 'casual';
    image: string;
    description: string;
    isNew?: boolean;
    isBestSeller?: boolean;
}

export const products: Product[] = [
    {
        id: '1',
        slug: 'classic-chelsea-brown',
        name: 'Classic Chelsea',
        price: 199,
        category: 'men',
        type: 'chelsea',
        image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=1000',
        description: 'Timeless sleek design with premium Italian leather.',
        isBestSeller: true,
    },
    {
        id: '2',
        slug: 'urban-combat-black',
        name: 'Urban Combat',
        price: 249,
        category: 'men',
        type: 'combat',
        image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=1000',
        description: 'Rugged durability meets modern city style.',
        isNew: true,
    },
    {
        id: '3',
        slug: 'hiker-pro-olive',
        name: 'Hiker Pro',
        price: 289,
        category: 'men',
        type: 'hiking',
        image: 'https://images.unsplash.com/photo-1620138546344-7b2c38516daf?auto=format&fit=crop&q=80&w=1000',
        description: 'Waterproof performance for the toughest trails.',
    },
    {
        id: '4',
        slug: 'suede-chunky-beige',
        name: 'Suede Chunky',
        price: 210,
        category: 'women',
        type: 'chunky',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=1000',
        description: 'Bold platform sole with soft suede upper.',
        isNew: true,
    },
    {
        id: '5',
        slug: 'noir-chelsea',
        name: 'Noir Chelsea',
        price: 185,
        category: 'women',
        type: 'chelsea',
        image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=1000',
        description: 'Elegant black leather silhouette for any occasion.',
        isBestSeller: true,
    },
    {
        id: '6',
        slug: 'winter-explorer',
        name: 'Winter Explorer',
        price: 320,
        category: 'women',
        type: 'hiking',
        image: 'https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?auto=format&fit=crop&q=80&w=1000',
        description: 'Insulated lining to keep you warm in sub-zero temps.',
    },
];
