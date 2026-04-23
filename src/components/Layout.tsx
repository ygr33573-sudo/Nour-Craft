import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Our Story', path: '/' },
    { name: 'Artisans', path: '/artisan' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
      <header className="fixed top-0 w-full z-50 bg-[#fdfbf7]/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center text-on-surface">
          <div className="flex items-center gap-12">
            <Link to="/" className="font-serif text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              Nour Craft
            </Link>
            <nav className="hidden md:flex gap-10 label-caps">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-colors hover:text-primary ${
                    location.pathname === link.path ? 'text-primary border-b border-primary pb-1' : 'text-outline'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/20 hover:border-outline-variant/40 transition-colors">
              <Search className="w-4 h-4 text-outline" />
              <input
                type="text"
                placeholder="Search heritage..."
                className="bg-transparent border-none focus:ring-0 text-xs label-caps ml-2 w-48 placeholder-outline/50"
              />
            </div>
            
            <Link 
              to="/checkout" 
              className="relative text-primary hover:scale-110 transition-transform active:scale-95"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>

            <button 
              className="md:hidden text-on-surface"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-surface border-b border-outline-variant/30 p-6 flex flex-col gap-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="label-caps py-2 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow pt-[88px]">
        {children}
      </main>

      <footer className="bg-surface-container-highest border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-lg font-bold mb-6">Nour Craft</h2>
            <p className="text-on-surface-variant body-md text-sm leading-relaxed max-w-xs">
              Preserving the soul of Moroccan craftsmanship through sustainable, modern design. Each piece tells the story of the artisan who made it.
            </p>
          </div>
          
          <div>
            <h4 className="label-caps text-primary mb-6">Shop</h4>
            <ul className="space-y-4 text-sm label-caps text-on-surface-variant font-normal normal-case">
              <li><Link to="/shop" className="hover:text-primary transition-colors">Ceramics</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Textiles</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Lighting</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Journal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="label-caps text-primary mb-6">Support</h4>
            <ul className="space-y-4 text-sm label-caps text-on-surface-variant font-normal normal-case">
              <li><Link to="/" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="label-caps text-primary mb-6">Social</h4>
            <ul className="space-y-4 text-sm label-caps text-on-surface-variant font-normal normal-case">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="label-caps text-[10px] text-outline font-normal">
            © 2024 Nour Craft. Handcrafted Moroccan Heritage.
          </p>
          <div className="flex gap-6 text-outline">
             {/* Payment icons would go here */}
             <span className="text-[10px] label-caps tracking-widest text-outline/50 uppercase">Verified Secure</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
