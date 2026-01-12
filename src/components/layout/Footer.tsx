import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brandColumn}>
                    <Link href="/" className={styles.brand}>
                        STRIDE
                    </Link>
                    <p className={styles.description}>
                        Premium boots designed for the modern journey. Crafted with quality materials for comfort and style.
                    </p>
                </div>

                <div className={styles.linksGrid}>
                    <div className={styles.column}>
                        <h4>Shop</h4>
                        <ul>
                            <li><Link href="/men">Men's Boots</Link></li>
                            <li><Link href="/women">Women's Boots</Link></li>
                            <li><Link href="/new-arrivals">New Arrivals</Link></li>
                            <li><Link href="/accessories">Accessories</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="/stores">Find a Store</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4>Support</h4>
                        <ul>
                            <li><Link href="/help">Help Center</Link></li>
                            <li><Link href="/returns">Returns</Link></li>
                            <li><Link href="/shipping">Shipping Info</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.bottomBar}>
                <p>&copy; {new Date().getFullYear()} STRIDE. All rights reserved.</p>
            </div>
        </footer>
    );
}
