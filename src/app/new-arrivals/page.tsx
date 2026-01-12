import { products } from '@/lib/data';
import { ProductCard } from '@/components/product/ProductCard';
import styles from '../men/page.module.css'; // Reusing Men's styles for layout

export default function NewArrivalsPage() {
    // Mock logic: showing all for now, or assume some are new
    const newProducts = products.filter(p => p.isNew || p.id);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>New Arrivals</h1>
                <p className={styles.subtitle}>Fresh styles just landed.</p>
            </header>

            <div className={styles.layout}>
                <main className={styles.grid} style={{ gridColumn: '1 / -1' }}>
                    {newProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </main>
            </div>
        </div>
    );
}
