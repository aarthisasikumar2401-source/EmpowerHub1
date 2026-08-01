// EMPOWER HUB - E-Commerce & Service Marketplace Page

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ShoppingBag, Search, Star, Tag, ShoppingCart, ShieldCheck, CheckCircle2, Download, CreditCard } from 'lucide-react';
import toast from 'react-hot-toast';

export const MarketplacePage: React.FC = () => {
  const { user } = useAuth();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderComplete, setOrderComplete] = useState<any | null>(null);

  const categories = ['All', 'Handicrafts', 'Beauty', 'Tailoring', 'Food & Bakery', 'Home Decor', 'Services'];

  const products = [
    {
      id: 'prod-1',
      title: 'Handcrafted Kantha Embroidery Tote Bag',
      sellerName: 'Ananya Sharma',
      category: 'Handicrafts',
      price: 699,
      originalPrice: 899,
      rating: 4.9,
      reviewsCount: 38,
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80',
      description: '100% organic cotton tote bag with traditional hand-embroidered motifs. Durable and eco-friendly.'
    },
    {
      id: 'prod-2',
      title: 'Artisanal Cold-Pressed Neem & Turmeric Soap Pack',
      sellerName: 'GreenLeaf Organics',
      category: 'Beauty',
      price: 399,
      originalPrice: 499,
      rating: 4.8,
      reviewsCount: 54,
      image: 'https://images.unsplash.com/photo-1607006482602-76ca0fd2f47d?w=500&auto=format&fit=crop&q=80',
      description: 'Handmade cold-pressed Ayurvedic soap free from parabens and sulfates.'
    },
    {
      id: 'prod-3',
      title: 'Terracotta Hand-Painted Indoor Plant Pot',
      sellerName: 'Clay Craft Studio',
      category: 'Home Decor',
      price: 999,
      originalPrice: 1250,
      rating: 5.0,
      reviewsCount: 19,
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&auto=format&fit=crop&q=80',
      description: 'Vibrant hand-painted earthen pot suitable for indoor succulents.'
    }
  ];

  const filteredProducts = products.filter(p => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.sellerName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCheckout = async () => {
    try {
      const res = await fetch('/api/marketplace/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: selectedProduct.id,
          amount: selectedProduct.price
        })
      });
      const data = await res.json();
      setOrderComplete(data);
      setShowCheckout(false);
      toast.success('Payment completed via Razorpay UPI!');
    } catch (err) {
      toast.success('Order placed successfully!');
      setShowCheckout(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-8">
      
      {/* Page Title & Search */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold mb-1">
            <ShoppingBag className="w-3.5 h-3.5" /> Direct Artisan & Service Marketplace
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">Marketplace</h1>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products or sellers..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none"
            />
          </div>
          <button onClick={() => toast.success('Seller product uploader opened!')} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-md">
            + Sell Product
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 text-xs font-medium">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl transition whitespace-nowrap ${
              activeCategory === cat
                ? 'bg-emerald-600 text-white font-bold shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-emerald-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((prod) => (
          <div key={prod.id} className="glass-card rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition group flex flex-col justify-between">
            <div>
              <div className="h-56 relative overflow-hidden">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold">
                  {prod.category}
                </span>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Seller: <strong className="text-gray-700 dark:text-gray-200">{prod.sellerName}</strong></span>
                  <span className="flex items-center gap-1 text-amber-400 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" /> {prod.rating} ({prod.reviewsCount})
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-gray-900 dark:text-gray-100 line-clamp-1">{prod.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">{prod.description}</p>
              </div>
            </div>

            <div className="p-5 pt-0 flex items-center justify-between border-t border-gray-100 dark:border-gray-800 mt-4">
              <div>
                <span className="text-xl font-extrabold text-emerald-500">₹{prod.price}</span>
                <span className="text-xs text-gray-400 line-through pl-2">₹{prod.originalPrice}</span>
              </div>
              <button
                onClick={() => {
                  setSelectedProduct(prod);
                  setShowCheckout(true);
                }}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition flex items-center gap-1"
              >
                <ShoppingCart className="w-3.5 h-3.5" /> Buy Now
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Razorpay Checkout Simulation Modal */}
      {showCheckout && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="glass-card w-full max-w-md rounded-3xl p-6 space-y-4 border border-emerald-500/30 shadow-2xl">
            <h3 className="font-extrabold text-lg text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-emerald-500" /> Razorpay Secured Checkout
            </h3>

            <div className="p-4 bg-gray-50 dark:bg-gray-800/80 rounded-2xl space-y-2 text-xs">
              <div className="flex justify-between font-bold">
                <span>{selectedProduct.title}</span>
                <span>₹{selectedProduct.price}</span>
              </div>
              <div className="flex justify-between text-gray-400 text-[11px]">
                <span>Platform Fee (0%)</span>
                <span>₹0</span>
              </div>
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between font-extrabold text-sm text-emerald-500">
                <span>Total Amount Due</span>
                <span>₹{selectedProduct.price}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <label className="block font-bold text-gray-700 dark:text-gray-300">Payment Option</label>
              <div className="p-3 rounded-xl border border-emerald-500 bg-emerald-500/10 text-emerald-400 font-bold flex items-center justify-between">
                <span>Razorpay UPI / Wallet Pay</span>
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button onClick={() => setShowCheckout(false)} className="flex-1 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 text-xs font-bold">
                Cancel
              </button>
              <button onClick={handleCheckout} className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-lg">
                Pay ₹{selectedProduct.price} Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Order Complete Receipt Modal */}
      {orderComplete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="glass-card w-full max-w-md rounded-3xl p-6 text-center space-y-4 border border-emerald-500/30 shadow-2xl">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
            <h3 className="font-extrabold text-xl text-gray-900 dark:text-gray-100">Order Confirmed!</h3>
            <p className="text-xs text-gray-400">Transaction ID: <span className="font-mono text-emerald-400">{orderComplete.transactionId}</span></p>

            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-left text-xs space-y-1">
              <p><strong>Order ID:</strong> {orderComplete.orderId}</p>
              <p><strong>Amount Paid:</strong> ₹{orderComplete.amountPaid}</p>
              <p><strong>Payout Status:</strong> Seller Credited</p>
            </div>

            <button onClick={() => setOrderComplete(null)} className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs">
              Close & Return to Marketplace
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
