"use client";

import { useState } from 'react';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

interface Props {
    params: { slug: string };
}

export default function ProductPage({ params }: Props) {
    const product = products.find((p) => p.slug === params.slug);
    const { addItem, toggleCart } = useCart();
    const [selectedSize, setSelectedSize] = useState<number | null>(null);

    if (!product) {
        notFound();
        return null;
    }

    const handleAddToCart = () => {
        if (!selectedSize) return;

        addItem({
            id: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            image: product.image,
            color: 'Standard', // Mock color for now
            size: selectedSize,
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.layout}>
                {/* Product Image */}
                <div className={styles.imageWrapper}>
                    <img src={product.image} alt={product.name} className={styles.image} />
                </div>

                {/* Product Info */}
                <div className={styles.info}>
                    <div className={styles.header}>
                        <h1>{product.name}</h1>
                        <p className={styles.price}>${product.price}</p>
                    </div>

                    <p className={styles.description}>{product.description}</p>

                    {/* Size Selector */}
                    <div className={styles.section}>
                        <span className={styles.sectionTitle}>Select Size</span>
                        <div className={styles.sizes}>
                            {[7, 8, 9, 10, 11, 12].map((size) => (
                                <button
                                    key={size}
                                    className={`${styles.sizeBtn} ${selectedSize === size ? styles.active : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className={styles.actions}>
                        <Button
                            fullWidth
                            onClick={handleAddToCart}
                            disabled={!selectedSize}
                            style={{ height: '3.5rem', fontSize: '1rem' }}
                        >
                            {selectedSize ? 'Add to Cart' : 'Select a size'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
