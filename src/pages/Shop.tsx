import { motion } from 'motion/react';
import { Heart, Search, ChevronLeft, ChevronRight, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<string[]>([]);
  const { addToCart } = useCart();
  
  // We'll add some more items to fill the grid if needed, or just use the base ones
  const displayProducts = [...products, ...products.map(p => ({ ...p, id: p.id + 10 }))].slice(0, 6);

  const categories = ["Woven Rugs", "Leather Bags", "Brass Lamps", "Ceramics"];
  const regions = ["High Atlas", "Fez Medina", "Marrakesh Souks"];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      {/* Hero Header */}
      <section className="mb-20">
        <div className="relative w-full h-[400px] overflow-hidden rounded-sm group mt-8">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdWSp57hxPo4sCfbIuqp3b3l3sHzVdCJxVefS7HbB9W13uHxlrlgVG8c5o28s4hub-vljPGTA_hG3nMw1amvkHJ73OdXnmL8Gi-DDPjY8eSvbMH4-O0VixqGkJ1NwU7wADKcDlx-qJ4Pnzs05gVjvWaZZ44TYowynP-ox3SWW5qS4wOiovtfYE6xPiMynjozBsr6n-s8AxltKd0oGm-JgOFO_tuAwUYWTWY2InKlq9YcflLmaldEpvmKS9HcC4JVamlzvTO7gS4VM" 
            alt="Artisanal Morocco" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-stone-900/40 flex flex-col justify-center px-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-on-primary display-xl mb-4 max-w-lg"
            >
              The Weaver's Heritage
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-on-primary/90 body-lg max-w-md"
            >
              Every thread tells a century-old story of the Atlas Mountains, preserved by the hands of master artisans.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 shrink-0 space-y-10">
          <div>
            <h3 className="label-caps text-outline mb-6">Category</h3>
            <ul className="space-y-4">
              {categories.map(cat => (
                <li key={cat}>
                  <label className="flex items-center group cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 border-outline text-primary focus:ring-primary-container rounded-sm"
                    />
                    <span className="ml-3 body-md text-on-surface-variant group-hover:text-primary transition-colors">
                      {cat}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-caps text-outline mb-6">Artisan Region</h3>
            <ul className="space-y-4">
              {regions.map(region => (
                <li key={region}>
                  <label className="flex items-center group cursor-pointer">
                    <input 
                      type="radio" 
                      name="region"
                      className="w-4 h-4 border-outline text-primary focus:ring-primary-container"
                    />
                    <span className="ml-3 body-md text-on-surface-variant group-hover:text-primary transition-colors">
                      {region}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-outline-variant/30">
            <button className="w-full py-3 bg-secondary text-on-secondary label-caps rounded-sm transition-transform active:scale-95 shadow-sm hover:opacity-90">
              Apply Filters
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="label-caps text-primary tracking-widest block mb-2">COLLECTION 2024</span>
              <h2 className="headline-md text-on-surface uppercase tracking-tight">Artisanal Masterpieces</h2>
            </div>
            <p className="label-caps text-outline">Showing 12 products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
            {displayProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/product/${product.id % 10 || products[0].id}`}>
                  <div className="relative aspect-[4/5] mb-4 bg-surface-container overflow-hidden rounded-sm shadow-sm transition-shadow hover:shadow-xl">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-lg hover:bg-primary hover:text-white transition-colors"
                      >
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-stone-900/70 backdrop-blur-md text-on-primary px-3 py-1 text-[10px] label-caps uppercase rounded-full">
                        {product.badge}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-surface text-primary px-4 py-2 label-caps text-[10px] flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        View Details <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="headline-md text-lg text-on-surface group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="body-md text-primary font-bold">${product.price}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="label-caps text-[10px] text-outline tracking-wider font-normal">
                      {product.artisan.split('•')[0]}
                    </p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="bg-primary/5 hover:bg-primary text-primary hover:text-on-primary p-2 rounded-full transition-all duration-300"
                      title="Add to cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/30 hover:border-primary text-outline hover:text-primary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="label-caps text-on-surface px-4 py-2 border-b-2 border-primary">01</span>
            <button className="label-caps text-outline px-4 py-2 hover:text-on-surface transition-colors">02</button>
            <button className="label-caps text-outline px-4 py-2 hover:text-on-surface transition-colors">03</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/30 hover:border-primary text-outline hover:text-primary transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
