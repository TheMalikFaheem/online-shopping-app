"use client";

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export default function CheckoutPage() {
    const { items, cartTotal } = useCart();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Checkout</h1>

            <div className={styles.layout}>
                {/* Form Column */}
                <div className={styles.formColumn}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Contact Information</h2>
                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Email address" className={styles.input} />
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Shipping Address</h2>
                        <div className={styles.grid2}>
                            <input type="text" placeholder="First name" className={styles.input} />
                            <input type="text" placeholder="Last name" className={styles.input} />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Address" className={styles.input} />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Apartment, suite, etc." className={styles.input} />
                        </div>
                        <div className={styles.grid3}>
                            <input type="text" placeholder="City" className={styles.input} />
                            <input type="text" placeholder="State" className={styles.input} />
                            <input type="text" placeholder="ZIP code" className={styles.input} />
                        </div>
                    </section>

                    <Button fullWidth onClick={() => alert('Order Placed!')}>Complete Order</Button>
                </div>

                {/* Summary Column */}
                <div className={styles.summaryColumn}>
                    <h2 className={styles.sectionTitle}>Order Summary</h2>
                    <div className={styles.items}>
                        {items.map((item) => (
                            <div key={`${item.id}-${item.size}`} className={styles.item}>
                                <div className={styles.itemImageWrapper}>
                                    <img src={item.image} alt={item.name} className={styles.itemImage} size={64} />
                                    <span className={styles.badge}>{item.quantity}</span>
                                </div>
                                <div className={styles.itemInfo}>
                                    <p className={styles.itemName}>{item.name}</p>
                                    <p className={styles.itemVariant}>{item.size} / {item.color}</p>
                                </div>
                                <p className={styles.itemPrice}>${item.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.totals}>
                        <div className={styles.row}>
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className={styles.row}>
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className={styles.totalRow}>
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
