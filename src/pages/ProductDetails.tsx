import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingBag, Heart, ArrowLeft, Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = products.find(p => p.id === Number(id)) || products[0];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
      <Link to="/shop" className="inline-flex items-center gap-2 label-caps text-outline hover:text-primary transition-colors mb-12 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        {/* Product Images */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[4/5] bg-surface-container-low rounded-lg overflow-hidden shadow-sm"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {[product.image, product.image, product.image, product.image].map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 transition-all ${selectedImage === idx ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img} alt={`${product.name} view ${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="border-b border-outline-variant/30 pb-8 mb-8 text-on-surface">
            <span className="label-caps text-primary mb-4 block tracking-[0.2em]">{product.category}</span>
            <h1 className="headline-lg mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="label-caps text-outline text-[10px] font-normal normal-case">(24 Reviews)</span>
              {product.badge && (
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 label-caps text-[9px] rounded-full">
                  {product.badge}
                </span>
              )}
            </div>
            <p className="font-serif text-3xl text-primary font-bold">${product.price.toFixed(2)}</p>
          </div>

          <div className="space-y-8 mb-12">
            <div>
              <h3 className="label-caps text-outline mb-3">The Story</h3>
              <p className="body-md text-on-surface-variant leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-outline-variant/20">
              <div>
                <h3 className="label-caps text-outline mb-2">Artisan</h3>
                <p className="body-md font-semibold text-on-surface">{product.artisan.split('•')[0]}</p>
                <p className="text-xs text-outline italic">{product.artisan.split('•')[1]}</p>
              </div>
              <div>
                <h3 className="label-caps text-outline mb-2">Material</h3>
                <p className="body-md font-semibold text-on-surface">{product.material || 'Local Sourced Material'}</p>
              </div>
            </div>

            <div>
              <h3 className="label-caps text-outline mb-2">Dimensions</h3>
              <p className="body-md text-on-surface-variant">{product.dimensions || 'Approx. 20cm x 15cm'}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <button 
                onClick={() => addToCart(product)}
                className="flex-1 bg-on-surface text-surface py-5 label-caps flex items-center justify-center gap-3 shadow-xl hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <ShoppingBag className="w-5 h-5" /> Add to Collection
              </button>
              <button className="w-16 flex items-center justify-center border border-outline-variant hover:border-primary text-outline hover:text-primary transition-all">
                <Heart className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4">
            {[
              { icon: ShieldCheck, text: "Authentic" },
              { icon: Truck, text: "Global Ship" },
              { icon: RotateCcw, text: "Easy Returns" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center text-outline">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="label-caps text-[9px] text-outline font-normal normal-case">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Suggested Section */}
      <section className="mt-32 pt-24 border-t border-outline-variant/20">
        <h2 className="headline-md mb-12">You may also treasure</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.filter(p => p.id !== product.id).slice(0, 3).map(p => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden rounded-sm hover:shadow-2xl transition-shadow duration-500">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <h4 className="headline-md text-xl mb-1 group-hover:text-primary transition-colors">{p.name}</h4>
              <p className="body-md text-primary font-bold">${p.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
