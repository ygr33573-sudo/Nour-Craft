import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const newArrivals = [
    {
      id: 1,
      title: "The Atlas Collection",
      subtitle: "Hand-etched stoneware",
      price: "From $85",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC57pF2NvqYauJlFFLnl-05P9OlKfa7Cc3SNp5wvchPvljD6R3aaHE06llL9vMT9KhmjuIDLYdXNB-1gyRx3CyHDP7Y3dJ799GNm6RC1fZhf0TNcYhX9r7FIcVm6WhcnedAl7otpaK7mGv8p3DJLUWohITO81vqf6rHhAr9tICVwjmv3BYOxI7iX4aSdf7ZA8IQuMSi85cUODmBAzxDrgg7HoFeEC-k1H4LNZhPi6AmW1XrYLtoXFvIp1tLkCIhyk54Qr1QwMiIWes",
      badge: "Limited Batch",
      span: "md:col-span-7"
    },
    {
      id: 2,
      title: "Heritage Weaves",
      subtitle: "Beni Ourain wool rugs",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCbehotEkIkFzIWY2B7j74IcRhdpJ97nQZEdc5cbnK-fGfGluD8H0DciC0OTQsqhFPVVEyxNE_4zfWS9D_T1T2UaSZ2mDj1rnaVXktc61E-ujG2TkY5a9XX9hBPO2mh4Ngtyd2bh6oY-ae2J8yC7Bv-ZKAO-vxkzwO9AX-g8TmKLmAzIZGDFQhc04b2oJMdIES1NffUItNI_NiPOdLBAG5QDCEhyH_CvDxbppQgp4K5CRC73UUA9N_u6pnDaaWBjlC_hO_PtrHnjw",
      span: "md:col-span-5"
    }
  ];

  return (
    <div className="reveal">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ3z3xtzDENc4a7ZZD1baIUqPG6KP4Bc0CIogtBqhAFuAZq57MbkPXni7q9hSiC_IXEya11cbOEeeE8mH_T-K837D50rK6jKZo6ZW_PXxt3tZwD2gnLs0zfY8ZBduXLoldImsAE6YneZaMT_XIuMs9qFKgP_-C-kuu_l-j8OxkBaKaDYdAs4vZPfzY7bYV-BDTl_2DbOXgAYFT_9RNhMTCXovFhnknf0AYEJH2W8uLbkl_1tRttu_XpmUthBOYobuA3umnEMfQGHg" 
            alt="Moroccan Pottery" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-surface/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="label-caps text-primary mb-4 block">Handcrafted in Marrakech</span>
            <h2 className="display-xl text-on-background mb-6">
              Embodying the Spirit of <span className="italic">Slow Living</span>
            </h2>
            <p className="body-lg text-on-surface-variant mb-10 max-w-lg">
              Each piece in our collection tells a story of heritage, sculpted by hands that have mastered the art of Moroccan ceramics over generations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="bg-primary text-on-primary px-8 py-4 label-caps shadow-lg hover:brightness-110 hover:translate-y-[-2px] transition-all">
                Explore Ceramics
              </Link>
              <Link to="/artisan" className="border border-on-background text-on-background px-8 py-4 label-caps hover:bg-on-background hover:text-surface transition-all">
                Our Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="headline-lg text-on-background">New Arrivals</h3>
            <p className="body-md text-on-surface-variant mt-2">Curated treasures from the heart of the Souks.</p>
          </motion.div>
          <Link to="/shop" className="label-caps text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all">
            View All Collections
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {newArrivals.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`${item.span} group cursor-pointer`}
            >
              <Link to={`/product/${item.id}`}>
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-container shadow-sm mb-4 rounded-sm">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {item.badge && (
                    <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-4 py-1 label-caps text-[10px]">
                      {item.badge}
                    </div>
                  )}
                </div>
              </Link>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="headline-md text-xl">{item.title}</h4>
                  <p className="body-md text-on-surface-variant">{item.subtitle}</p>
                </div>
                {item.price && <span className="body-lg text-primary">{item.price}</span>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tanneries Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 group cursor-pointer"
        >
          <div className="grid md:grid-cols-2 bg-surface-container-low items-center overflow-hidden rounded-sm hover:shadow-xl transition-shadow duration-500">
            <div className="p-12 md:p-20 order-2 md:order-1">
              <span className="label-caps text-secondary mb-4 block">Sustainable Leather</span>
              <h4 className="headline-lg mb-6">Tanneries of Fez</h4>
              <p className="body-md text-on-surface-variant mb-8 max-w-sm">
                Our leather goods are vegetable-tanned using ancient methods, ensuring a patina that grows more beautiful with time.
              </p>
              <Link to="/shop" className="label-caps text-primary flex items-center gap-2 group/btn">
                Shop Leatherware 
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative h-96 md:h-full overflow-hidden order-1 md:order-2">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBypaa1aEUoIIynuKFOXjZ3Ak2oG4jfJWt0vf5QZpo4D1Q6Ea3s5aRjwLF4-6GSapF844m9R5bEv-Bn1ccyLVN0bEF81LCICJ3jn10Gdja_pFRHn8W7DuMg1mIjoD0hMuQrE0zT1n5NMcYF_Y1Vag3jitkTblVOvQXV4OhyUdqecJUhVFJ2UKaX6e2Psqk1wmG44Uf9UVh_SQlhHLXSv92GkgJuEXlGp7gz-Bs10GzIkZ_ek9KmXvqzn5ztq4btsn8NMRj7yx7Ugp8" 
                alt="Leather Bag" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Preserving Soul Section */}
      <section className="w-full py-32 bg-secondary-container/20 tactile-grain">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-surface-dim overflow-hidden shadow-2xl relative z-10 rounded-sm">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4wihCfKn-g9CR6JSweUdp0pCSGwFV3vOlB13wKXFkKptCUJr6ZCfZnqT-fA6u5oDfBGHTkZvBB4XIWKeCtQfUQOG3yImNyw3Kl7m63KB76QSo_3FDAzw-561GOWSWTSd1b_AuSKIl-7SO9Tq9sFiRda3L7jwxj5SiMMWzI8DQdaNAnmMDaXWn0xnT-A63ZUOP8i7dK7ydI14MS30FWDIqjyaak7Ma7HTj92EChPDF9h0qBm73LeGl9BD5YdUJwYVuBX6zXtYfT2c" 
                alt="Artisan at work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="headline-lg mb-8 leading-tight">
              Preserving the <br />
              <span className="text-primary italic">Soul of the Maghreb</span>
            </h2>
            <p className="body-lg text-on-surface-variant mb-8">
              Nour Craft was born from a desire to bridge the gap between ancient Moroccan craftsmanship and modern sensibilities. We work directly with over 40 independent artisans in the Rif Mountains and the Medina of Fez.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <span className="font-serif text-primary text-4xl block mb-2">40+</span>
                <span className="label-caps text-on-surface">Master Artisans</span>
              </div>
              <div>
                <span className="font-serif text-primary text-4xl block mb-2">100%</span>
                <span className="label-caps text-on-surface">Natural Materials</span>
              </div>
            </div>
            <button className="bg-on-background text-background px-10 py-5 label-caps hover:bg-primary hover:translate-y-[-2px] transition-all shadow-md">
              Read Our Journal
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
