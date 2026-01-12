"use client";

import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import styles from './CartDrawer.module.css';

export function CartDrawer() {
    const { isCartOpen, toggleCart, items, updateQuantity, removeItem, cartTotal } = useCart();

    if (!isCartOpen && typeof document !== 'undefined') {
        // Only return null if closed, to avoid rendering heavy DOM
        // For accessibility/animation, often better to always render but hide, 
        // but here we toggle classes for animation.
        // Actually, to animate out we need it mounted.
    }

    return (
        <>
            <div
                className={cn(styles.overlay, isCartOpen && styles.open)}
                onClick={toggleCart}
            />

            <div className={cn(styles.drawer, isCartOpen && styles.open)}>
                <header className={styles.header}>
                    <h2>Your Cart</h2>
                    <Button variant="ghost" onClick={toggleCart}>
                        <X size={24} />
                    </Button>
                </header>

                <div className={styles.items}>
                    {items.length === 0 ? (
                        <div className={styles.emptyState}>
                            <p>Your cart is empty.</p>
                            <Button variant="outline" onClick={toggleCart}>
                                Continue Shopping
                            </Button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={`${item.id}-${item.size}`} className={styles.cartItem}>
                                <img src={item.image} alt={item.name} className={styles.itemImage} />
                                <div className={styles.itemInfo}>
                                    <div className={styles.itemHeader}>
                                        <p className={styles.itemName}>{item.name}</p>
                                        <p className={styles.itemPrice}>${item.price}</p>
                                    </div>
                                    <p className={styles.itemDetails}>
                                        Size: {item.size} | Color: {item.color}
                                    </p>
                                    <div className={styles.itemControls}>
                                        <button
                                            className={styles.quantityBtn}
                                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            className={styles.quantityBtn}
                                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                        >
                                            <Plus size={14} />
                                        </button>
                                        <Button
                                            variant="ghost"
                                            onClick={() => removeItem(item.id, item.size)}
                                            style={{ marginLeft: 'auto', padding: 4, height: 'auto' }}
                                        >
                                            <Trash2 size={16} className="text-secondary" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <footer className={styles.footer}>
                        <div className={styles.summaryRow}>
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className={styles.totalRow}>
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <Button fullWidth onClick={() => alert('Proceed to checkout logic')}>
                            Proceed to Checkout
                        </Button>
                    </footer>
                )}
            </div>
        </>
    );
}
