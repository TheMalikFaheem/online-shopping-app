import Link from 'next/link';
import { Product } from '@/lib/data';
import styles from './ProductCard.module.css';

export function ProductCard({ product }: { product: Product }) {
    return (
        <Link href={`/product/${product.slug}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.name} className={styles.image} />
            </div>
            <div className={styles.info}>
                <div>
                    <h3 className={styles.name}>{product.name}</h3>
                    <p className={styles.category}>{product.category} • {product.type}</p>
                </div>
                <span className={styles.price}>${product.price}</span>
            </div>
        </Link>
    );
}
