import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { products } from '@/lib/data';
import styles from './page.module.css';

export default function Home() {
    const featuredProducts = products.filter(p => p.isBestSeller || p.isNew).slice(0, 4);

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Walk With Purpose</h1>
                    <p className={styles.heroSubtitle}>
                        Discover the new collection of premium handcrafted boots.
                        Designed for the modern adventurer.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link href="/men">
                            <Button style={{ backgroundColor: 'white', color: 'black' }}>Shop Men</Button>
                        </Link>
                        <Link href="/women">
                            <Button variant="outline" style={{ color: 'white', borderColor: 'white' }}>Shop Women</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Categories / Featured Section */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Trending Now</h2>
                    <Link href="/new-arrivals">View All</Link>
                </div>

                <div className={styles.tabs}>
                    <button className={`${styles.tab} ${styles.active}`}>All</button>
                    <button className={styles.tab}>New Arrivals</button>
                    <button className={styles.tab}>Best Sellers</button>
                </div>

                <div className={styles.grid}>
                    {featuredProducts.map((product) => (
                        <Link key={product.id} href={`/product/${product.slug}`} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={product.image} alt={product.name} className={styles.productImage} />
                            </div>
                            <div className={styles.productInfo}>
                                <div>
                                    <h3 className={styles.productName}>{product.name}</h3>
                                    <p className={styles.productCategory}>{product.category} • {product.type}</p>
                                </div>
                                <span className={styles.price}>${product.price}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Promo Section */}
            <section className={styles.section} style={{ paddingBottom: '4rem' }}>
                <div
                    style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderRadius: 'var(--radius-m)',
                        padding: '4rem 2rem',
                        textAlign: 'center'
                    }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Sustainably Crafted</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', color: 'var(--text-secondary)' }}>
                        We believe in quality that lasts. Our boots are made with ethically sourced leather and sustainable practices.
                    </p>
                    <Link href="/about">
                        <Button variant="outline">Learn More</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
