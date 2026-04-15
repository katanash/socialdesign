'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import SaasCard from '@/components/SaasCard';
import { saasProducts } from '@/lib/data';
import { CATEGORIES } from '@/lib/types';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('rating');
  const [compareIds, setCompareIds] = useState<number[]>([]);
  const [showFreeOnly, setShowFreeOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    let products = [...saasProducts];

    // Filter by category
    if (selectedCategory !== 'All') {
      products = products.filter(p => p.category === selectedCategory);
    }

    // Filter by free plan
    if (showFreeOnly) {
      products = products.filter(p => p.freePlan);
    }

    // Sort
    switch (sortBy) {
      case 'rating':
        products.sort((a, b) => b.rating - a.rating);
        break;
      case 'price_asc':
        products.sort((a, b) => (a.priceMonthly || 0) - (b.priceMonthly || 0));
        break;
      case 'price_desc':
        products.sort((a, b) => (b.priceMonthly || 0) - (a.priceMonthly || 0));
        break;
      case 'name':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return products;
  }, [selectedCategory, sortBy, showFreeOnly]);

  const toggleCompare = (id: number) => {
    setCompareIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">SaaS Compare</h1>
            <nav className="flex gap-4">
              <Link href="/" className="text-blue-600 font-medium">Products</Link>
              <Link href="/compare" className="text-gray-600 hover:text-gray-900">Compare</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find the Best SaaS for Your Business
          </h2>
          <p className="text-xl text-gray-600">
            Compare features, pricing, and reviews of top SaaS products
          </p>
        </div>

        {/* Compare Button */}
        {compareIds.length >= 2 && (
          <div className="fixed bottom-6 right-6 z-20">
            <Link
              href={`/compare?ids=${compareIds.join(',')}`}
              className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Compare ({compareIds.length})
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-4 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sort by</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="rating">Rating (High to Low)</option>
                <option value="price_asc">Price (Low to High)</option>
                <option value="price_desc">Price (High to Low)</option>
                <option value="name">Name</option>
              </select>
            </div>

            <div className="flex items-end">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={showFreeOnly}
                  onChange={(e) => setShowFreeOnly(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Free Plan Only</span>
              </label>
            </div>

            {compareIds.length > 0 && (
              <div className="ml-auto">
                <button
                  onClick={() => setCompareIds([])}
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Clear selection ({compareIds.length})
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <SaasCard
              key={product.id}
              product={product}
              isSelected={compareIds.includes(product.id)}
              onToggleCompare={toggleCompare}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria</p>
          </div>
        )}
      </main>
    </div>
  );
}
