import { products } from '@/lib/data';
import { ProductCard } from '@/components/product/ProductCard';
import { FilterSidebar } from '@/components/product/FilterSidebar';
import styles from './page.module.css';

export default function MenPage() {
    const menProducts = products.filter((p) => p.category === 'men');

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Men's Boots</h1>
                <p className={styles.subtitle}>Showing {menProducts.length} results</p>
            </header>

            <div className={styles.layout}>
                <aside>
                    <FilterSidebar />
                </aside>

                <main className={styles.grid}>
                    {menProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </main>
            </div>
        </div>
    );
}
