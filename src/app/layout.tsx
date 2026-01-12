import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';


export const metadata: Metadata = {
    title: 'STRIDE | Premium Boots Store',
    description: 'Premium quality boots for Men and Women, featuring Chelsea, Combat, and Outdoor styles.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    <CartProvider>
                        <div className="layout-container">
                            <Navbar />
                            <CartDrawer />
                            <main>{children}</main>
                            <Footer />
                        </div>
                    </CartProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
