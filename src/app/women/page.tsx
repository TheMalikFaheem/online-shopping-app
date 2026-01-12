import { products } from '@/lib/data';
import { ProductCard } from '@/components/product/ProductCard';
import { FilterSidebar } from '@/components/product/FilterSidebar';
// Reusing same CSS structure, copying locally to be consistent
import styles from './page.module.css';

export default function WomenPage() {
    const womenProducts = products.filter((p) => p.category === 'women');

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Women's Boots</h1>
                <p className={styles.subtitle}>Showing {womenProducts.length} results</p>
            </header>

            <div className={styles.layout}>
                <aside>
                    <FilterSidebar />
                </aside>

                <main className={styles.grid}>
                    {womenProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </main>
            </div>
        </div>
    );
}
