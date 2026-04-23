import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Artisan() {
  const { addToCart } = useCart();
  const collection = [
    {
      id: 101, // Unique ID for artisan collection items
      name: "The Atlas Pitcher",
      price: 124.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFOahW8lC6ND_YleYXd2SfaVprKw1SHdbjK0i-CBsowcZeUcZlW4QP9rLMyGdBjKp4EqaQv8iqqwEzTT0zDl8lpLu0cZeSOhLM2-hBaONeIR6dOKCh36-kkPtccryrxUu3eOutEVskHAbhm0w_LzIYNyLRHRnS1Cqh_frRH-0jgHpEFT14TVqZOjAN3_gUs5hIDRENeIQ120ifFuNeswApzJhzcFh5xAy4OjMDpbsMaJiMK6BRFhOdB__1bu6yc_v9LkLBYEq0XDg",
      badge: "Hand-thrown",
      buttonClass: "bg-primary text-on-primary"
    },
    {
      id: 102,
      name: "Medina Nesting Bowls",
      price: 88.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmWwzitx735Ukhu2xEVOsYQmB_1rq03f8sRMx1ZzOF96V2oOof1kZAN7_f9fnXeylHtA9-MtyMLZuXNdqeEthAVNA62NWw3epBBPsl1-gTKopGdqPZP42VlNOmHv46JYGMb6iZVNKaKk4LHO_vkJReVXy9DboKqQyJlLS36QSQKi8pCpsi5ZnC45z8I4dOH1l3khKws5u6omi3bMbKMvFXYN4D2WFel7PN6Ccm2YxRywfvt6W-6gxqirLNYsd3PhN2D6EbDRDSsKU",
      badge: "Cobalt Glaze",
      buttonClass: "border border-on-surface text-on-surface hover:bg-on-surface hover:text-surface"
    },
    {
      id: 103,
      name: "Safi Grand Vase",
      price: 310.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbAPqyhKZJob2wesnJpYQUYf3et5-xXLDxtylxxzCYDcLuPM4uTE44xmsp8jqprJ-hCdo4vhnq2mwj1kv2sLMKGH_aVyIJgmkBzK0qhJnQA4y5RURn2TSgiB-EzzoXlUAdGycbANwi2MvvaT-IPrbMxQqKZkk5mMvqLfnw4l6Xx_Dr-OncWgch5UzaN6-z2W1a4ctGURTlF3MyiV_WZcdolIP0D-zl3P2X0tb2nNVmAAg-T71vy0MapC619KjQaW-KhEVCsKh48S8",
      badge: "Limited Edition",
      buttonClass: "border border-on-surface text-on-surface hover:bg-on-surface hover:text-surface"
    }
  ];

  return (
    <div className="reveal">
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[4/5] overflow-hidden bg-surface-container-low rounded-lg shadow-xl"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFkdyl7v7Tg9XFCzHQsqHbql4MR6UVknWDl_9Z0wlhxe-a0HS9hRvcQWDq8aHMZ-A_b4G7UDS0FSc4UAMrdGQGvFI6aqevKBpS1znkHyHEHD_mkf1BWdtxoi4SjZnuZ1OQH9ctAWJrvCRvYQgHXPyRg_QE36ZGZIxqQY4o2bB0ajYrxgZjY1HYRFsouoQgd1DEptbDNCPgwt0ElrvIHX4O6ioxf7ldmDjr1_vzefvxuWJiG3_duj_kuYO0i6jYORpl736R-OExiCk" 
                alt="Artisan Malik" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-12 -right-4 md:right-12 bg-surface p-10 shadow-2xl max-w-sm border-l-4 border-primary"
            >
              <p className="headline-md italic font-light text-on-surface-variant">
                "The clay speaks to me before the wheel even turns. It carries the memory of the Atlas mountains."
              </p>
            </motion.div>
          </div>
          
          <div className="md:col-span-5 md:pl-12 mt-16 md:mt-0">
            <span className="label-caps text-primary uppercase tracking-[0.2em] mb-4 block">Master Artisan</span>
            <h1 className="display-xl text-on-surface mb-8">Malik Benhaddou</h1>
            <div className="w-16 h-px bg-outline mb-8"></div>
            <p className="body-lg text-on-surface-variant mb-6">
              For forty-five years, Malik has greeted the sunrise from his small atelier in the heart of the Safi medina. He is the third generation of his family to master the rhythm of the potter's wheel.
            </p>
            <p className="body-md text-on-surface-variant/80">
              His work is not merely about vessels, but about preserving a lineage of form and glaze that dates back centuries.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32 tactile-grain">
        <div className="max-w-4xl mx-auto px-6 md:px-0">
          <div className="flex flex-col space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="headline-lg text-on-surface mb-6">A Heritage Carved in Clay</h2>
                <p className="body-md text-on-surface-variant mb-6">
                  The process begins long before the wheel. Malik sources his clay from specific deposits near the Tensift River, known for its unique mineral composition that yields a warm, earthy hue when fired.
                </p>
                <p className="body-md text-on-surface-variant">
                  Every curve of a Nour Craft vase is a deliberate conversation between Malik and the material. He uses no measurements, relying entirely on the "muscle memory" passed down from his grandfather.
                </p>
              </div>
              <motion.div 
                whileInView={{ y: [20, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                className="aspect-square overflow-hidden rounded-xl shadow-lg md:mt-24"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuACZf3MUngL3us7kcWCCmGTlKRrKZJ0-WedmjDxnxBB2xxbb-42U4x-AJNwIhVNv8baZ6pls2jhCfKGIr-j2egleCVWTtKhPo6mK9y3FCfDUmhyiyyeNfsnKeSHj_nV_HZ_9B3qGhxQw3R5qPeZ3eMQvePlSDOVzpzpk7MnWLGRyOjCDjEVo2VUvYz_KruzseIGNuuiRmj9uCC7-1RQjA0UkW2T8LPirC6BfPcdXG3UvPl8MtW6nE64_4cCYTodvDzCLDDCZPyRyTI" 
                  alt="Crafting Process" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <motion.div 
               whileInView={{ opacity: [0, 1] }}
               viewport={{ once: true }}
               className="bg-surface p-12 rounded-lg border border-outline-variant/30 shadow-sm relative overflow-hidden"
            >
              <h3 className="label-caps text-primary mb-4">The Secret of the Glaze</h3>
              <p className="body-lg text-on-surface-variant italic mb-0">
                "We use natural minerals—cobalt for the deep blues, copper for the greens. It is a slow science. A single batch of glaze can take a week to prepare correctly. If you rush it, the soul of the color disappears."
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
              <div className="md:w-1/2">
                <h2 className="headline-lg text-on-surface mb-6">Connection to Place</h2>
                <p className="body-md text-on-surface-variant mb-6">
                  Malik’s atelier is more than a workspace; it is a cultural anchor in a rapidly changing world. By collaborating with Nour Craft, he ensures that his apprentices can afford to stay in Safi, keeping the medina’s creative heartbeat alive.
                </p>
              </div>
              <div className="md:w-1/2 aspect-video overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHg4DcrXqWFuqM5-Y2212rbVc65eUsOSDUDy8TrzNCQL4CMNDZLcBnY7xYIo9LTm-H702a4lLj9oyeIF7QKJDmOkWo9xcbJx9kgvqActR0Zz-rPy7UsqY8GrDSmtB7xOffvhMlxplIWK_obTmDzHVikbitDaNfyJ7wbekWJ4G_GiwgRfjiiKX6r3J8Qg9k_gab5mjrtR15fuNQTh21rIMPHVzxgBfVVdk4X8isi1II4bKImzV1AQdRMVwpx2smVhmcluL-ghblQH4" 
                  alt="Safi Courtyard" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <h2 className="headline-lg text-on-surface">Shop Malik's Collection</h2>
          <Link to="/shop" className="label-caps text-on-surface border-b border-on-surface pb-1 hover:text-primary transition-colors flex items-center gap-2">
            View All Works <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collection.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-surface-container overflow-hidden rounded-lg mb-6 relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-tertiary-container/30 px-3 py-1 rounded-full backdrop-blur-md">
                  <span className="label-caps text-[10px] text-on-tertiary-container">{item.badge}</span>
                </div>
              </div>
              <h4 className="headline-md text-xl text-on-surface mb-2">{item.name}</h4>
              <p className="body-md text-on-surface-variant mb-4">${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}</p>
              <button 
                onClick={() => addToCart(item)}
                className={`w-full py-4 label-caps uppercase tracking-widest transition-colors shadow-sm ${item.buttonClass}`}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
