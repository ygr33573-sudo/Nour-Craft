import { motion } from 'motion/react';
import { Lock, CreditCard, Ship, History, Trash2, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h2 className="headline-lg mb-6">Your cart is empty</h2>
        <p className="body-lg text-outline mb-10">Discover handpicked treasures for your sanctuary.</p>
        <Link to="/shop" className="bg-primary text-on-primary px-10 py-4 label-caps shadow-lg transition-transform hover:scale-105 active:scale-95">
          Shop Heritage
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 md:gap-32">
        {/* Checkout Forms */}
        <div className="space-y-16">
          <section>
            <h1 className="headline-lg mb-8 text-on-background">Secure Checkout</h1>
            
            <div className="space-y-12">
              {/* Shipping Information */}
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="headline-md text-2xl text-on-surface-variant">1. Shipping Information</h2>
                  <span className="label-caps text-primary">Returning? Login</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="label-caps text-[10px] text-outline">First Name</label>
                    <input type="text" placeholder="Amina" className="border-b border-outline-variant/50 focus:border-primary outline-none bg-transparent py-2 body-md" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="label-caps text-[10px] text-outline">Last Name</label>
                    <input type="text" placeholder="Zidani" className="border-b border-outline-variant/50 focus:border-primary outline-none bg-transparent py-2 body-md" />
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="label-caps text-[10px] text-outline">Shipping Address</label>
                    <input type="text" placeholder="123 Medina Lane" className="border-b border-outline-variant/50 focus:border-primary outline-none bg-transparent py-2 body-md" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="label-caps text-[10px] text-outline">City</label>
                    <input type="text" placeholder="Marrakech" className="border-b border-outline-variant/50 focus:border-primary outline-none bg-transparent py-2 body-md" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="label-caps text-[10px] text-outline">Postal Code</label>
                    <input type="text" placeholder="40000" className="border-b border-outline-variant/50 focus:border-primary outline-none bg-transparent py-2 body-md" />
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="label-caps text-[10px] text-outline">Email Address</label>
                    <input type="email" placeholder="amina@example.com" className="border-b border-outline-variant/50 focus:border-primary outline-none bg-transparent py-2 body-md" />
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div>
                <h2 className="headline-md text-2xl text-on-surface-variant mb-8">2. Shipping Method</h2>
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-6 bg-surface-container-low border border-outline-variant/20 rounded-sm cursor-pointer hover:border-primary transition-all group">
                    <div className="flex items-center gap-4">
                      <input type="radio" name="shipping" defaultChecked className="text-primary focus:ring-primary w-4 h-4" />
                      <div>
                        <p className="body-md font-semibold text-on-surface">Standard Artisanal Courier</p>
                        <p className="text-sm text-outline">7-10 Business Days</p>
                      </div>
                    </div>
                    <span className="label-caps text-on-surface">Complimentary</span>
                  </label>

                  <label className="flex items-center justify-between p-6 bg-surface-container-low border border-outline-variant/20 rounded-sm cursor-pointer hover:border-primary transition-all group">
                    <div className="flex items-center gap-4">
                      <input type="radio" name="shipping" className="text-primary focus:ring-primary w-4 h-4" />
                      <div>
                        <p className="body-md font-semibold text-on-surface">Expedited Air</p>
                        <p className="text-sm text-outline">2-3 Business Days</p>
                      </div>
                    </div>
                    <span className="label-caps text-on-surface">$24.00</span>
                  </label>
                </div>
              </div>

              {/* Payment Details */}
              <div>
                <h2 className="headline-md text-2xl text-on-surface-variant mb-8">3. Payment Details</h2>
                <div className="bg-surface-container-low p-8 rounded-lg space-y-8">
                  <div className="flex flex-col gap-2">
                    <label className="label-caps text-[10px] text-outline">Cardholder Name</label>
                    <input type="text" placeholder="Amina Zidani" className="border-b border-outline-variant/50 focus:border-primary outline-none bg-transparent py-2 body-md" />
                  </div>
                  <div className="flex flex-col gap-2 relative">
                    <label className="label-caps text-[10px] text-outline">Card Number</label>
                    <input type="text" placeholder="0000 0000 0000 0000" className="border-b border-outline-variant/50 focus:border-primary outline-none bg-transparent py-2 body-md pr-10" />
                    <CreditCard className="w-5 h-5 absolute right-0 bottom-2 text-outline/50" />
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="label-caps text-[10px] text-outline">Expiry Date</label>
                      <input type="text" placeholder="MM/YY" className="border-b border-outline-variant/50 focus:border-primary outline-none bg-transparent py-2 body-md" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="label-caps text-[10px] text-outline">CVV</label>
                      <input type="text" placeholder="123" className="border-b border-outline-variant/50 focus:border-primary outline-none bg-transparent py-2 body-md" />
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full py-6 bg-primary text-on-primary label-caps text-lg shadow-xl hover:brightness-110 active:scale-[0.98] transition-all">
                Complete Order
              </button>
              
              <div className="flex items-center justify-center gap-2 text-outline text-sm">
                <Lock className="w-3 h-3" />
                <span className="label-caps tracking-widest text-[10px] font-normal normal-case">Encrypted and secure checkout</span>
              </div>
            </div>
          </section>
        </div>

        {/* Order Summary */}
        <aside className="lg:sticky lg:top-32 h-fit space-y-8">
          <div className="bg-surface-container-low p-8 rounded-lg">
            <h3 className="headline-md text-2xl mb-8">Order Summary</h3>
            
            <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="w-20 h-24 bg-surface-dim overflow-hidden rounded-sm flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="body-md font-semibold text-on-surface line-clamp-1">{item.name}</p>
                        <p className="label-caps text-[9px] text-outline font-normal uppercase">{item.attribute || 'Artisanal Batch'}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-outline hover:text-error transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center gap-3 bg-surface border border-outline-variant/30 rounded-full px-2 py-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-outline hover:text-primary"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="label-caps text-[10px] w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-outline hover:text-primary"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-primary font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-8 border-t border-outline-variant/20 body-md">
              <div className="flex justify-between text-outline">
                <span>Subtotal</span>
                <span className="text-on-surface">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-outline">
                <span>Shipping</span>
                <span className="text-on-surface">Free</span>
              </div>
              <div className="flex justify-between text-outline">
                <span>Estimated Tax (8%)</span>
                <span className="text-on-surface">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-outline-variant/20 font-bold text-xl">
                <span>Total</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 flex gap-2">
              <input type="text" placeholder="Promo Code" className="flex-1 bg-transparent border-b border-outline-variant/30 outline-none text-sm py-1" />
              <button className="label-caps text-primary border-b border-primary pb-1">Apply</button>
            </div>
          </div>

          <div className="flex justify-between px-2 text-outline">
            <div className="flex items-center gap-2">
              <Ship className="w-4 h-4" />
              <span className="label-caps text-[9px]">Carbon Neutral Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <History className="w-4 h-4" />
              <span className="label-caps text-[9px]">30-Day Returns</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
