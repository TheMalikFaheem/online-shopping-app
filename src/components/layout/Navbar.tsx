"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Moon, Sun, Menu, Search } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import styles from './Navbar.module.css';

export function Navbar() {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();
    const { toggleCart, cartCount } = useCart();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/men', label: 'Men' },
        { href: '/women', label: 'Women' },
        { href: '/new-arrivals', label: 'New Arrivals' },
    ];

    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                {/* Mobile Menu Button - Visible on small screens */}
                <Button variant="ghost" className={styles.menuBtn}>
                    <Menu size={20} />
                </Button>

                {/* Brand */}
                <Link href="/" className={styles.brand}>
                    STRIDE
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.navLinks}>
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                styles.navLink,
                                pathname === link.href && styles.active
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className={styles.actions}>
                    <Button variant="ghost">
                        <Search size={20} />
                    </Button>

                    <Button variant="ghost" onClick={toggleTheme}>
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </Button>

                    <Button variant="ghost" className={styles.cartBtn} onClick={toggleCart}>
                        <ShoppingBag size={20} />
                        {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
                    </Button>
                </div>
            </div>
        </header>
    );
}
