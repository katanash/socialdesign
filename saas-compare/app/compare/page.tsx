'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { saasProducts, getProductsByIds } from '@/lib/data';
import { SaasProduct } from '@/lib/types';

function CompareContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [products, setProducts] = useState<SaasProduct[]>([]);

  useEffect(() => {
    const idsParam = searchParams.get('ids');
    if (idsParam) {
      const ids = idsParam.split(',').map(Number).filter(n => !isNaN(n));
      setProducts(getProductsByIds(ids));
    }
  }, [searchParams]);

  const removeProduct = (id: number) => {
    const newIds = products.filter(p => p.id !== id).map(p => p.id);
    if (newIds.length === 0) {
      router.push('/compare');
    } else {
      router.push(`/compare?ids=${newIds.join(',')}`);
    }
  };

  const addProduct = (id: number) => {
    const newIds = [...products.map(p => p.id), id];
    router.push(`/compare?ids=${newIds.join(',')}`);
  };

  const availableProducts = saasProducts.filter(
    p => !products.find(sp => sp.id === p.id)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900">SaaS Compare</Link>
            <nav className="flex gap-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Products</Link>
              <Link href="/compare" className="text-blue-600 font-medium">Compare</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Compare SaaS Products</h1>
            <p className="text-gray-600 mt-1">See side-by-side comparison</p>
          </div>
          <Link
            href="/"
            className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-white transition-colors"
          >
            Back to List
          </Link>
        </div>

        {products.length > 0 ? (
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left p-4 font-medium text-gray-700 sticky left-0 bg-gray-50">
                      Attribute
                    </th>
                    {products.map(product => (
                      <th key={product.id} className="text-center p-4 min-w-[200px]">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                            {product.logoUrl ? (
                              <img src={product.logoUrl} alt={product.name} className="w-8 h-8 object-contain" />
                            ) : (
                              <span className="font-bold text-gray-400">
                                {product.name.substring(0, 2).toUpperCase()}
                              </span>
                            )}
                          </div>
                          <Link href={`/product/${product.id}`} className="font-semibold hover:text-blue-600">
                            {product.name}
                          </Link>
                          <button
                            onClick={() => removeProduct(product.id)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4 font-medium bg-gray-50 sticky left-0">Category</td>
                    {products.map(p => (
                      <td key={p.id} className="p-4 text-center">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {p.category}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-gray-50 sticky left-0">Rating</td>
                    {products.map(p => (
                      <td key={p.id} className="p-4 text-center">
                        {p.rating ? (
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {p.rating} / 5
                          </span>
                        ) : '-'}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-gray-50 sticky left-0">Monthly Price</td>
                    {products.map(p => (
                      <td key={p.id} className="p-4 text-center font-semibold">
                        {p.priceMonthly !== null && p.priceMonthly > 0
                          ? `$${p.priceMonthly}/mo`
                          : p.freePlan ? 'Free' : 'Contact'}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-gray-50 sticky left-0">Yearly Price</td>
                    {products.map(p => (
                      <td key={p.id} className="p-4 text-center">
                        {p.priceYearly !== null && p.priceYearly > 0
                          ? `$${p.priceYearly}/yr`
                          : '-'}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-gray-50 sticky left-0">Free Plan</td>
                    {products.map(p => (
                      <td key={p.id} className="p-4 text-center">
                        {p.freePlan ? (
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Yes</span>
                        ) : (
                          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">No</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-gray-50 sticky left-0">Trial Period</td>
                    {products.map(p => (
                      <td key={p.id} className="p-4 text-center">
                        {p.trialDays > 0 ? (
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {p.trialDays} days
                          </span>
                        ) : '-'}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-gray-50 sticky left-0">Target Users</td>
                    {products.map(p => (
                      <td key={p.id} className="p-4 text-center text-sm">
                        {p.targetUsers}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-gray-50 sticky left-0">Key Features</td>
                    {products.map(p => (
                      <td key={p.id} className="p-4 text-sm">
                        <ul className="space-y-1">
                          {p.features.slice(0, 5).map((f, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-green-500">✓</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-gray-50 sticky left-0">Pros</td>
                    {products.map(p => (
                      <td key={p.id} className="p-4 text-sm">
                        <ul className="space-y-1">
                          {p.pros.map((pro, i) => (
                            <li key={i} className="text-green-600">+ {pro}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-gray-50 sticky left-0">Cons</td>
                    {products.map(p => (
                      <td key={p.id} className="p-4 text-sm">
                        <ul className="space-y-1">
                          {p.cons.map((con, i) => (
                            <li key={i} className="text-red-600">- {con}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium bg-gray-50 sticky left-0">Website</td>
                    {products.map(p => (
                      <td key={p.id} className="p-4 text-center">
                        <a
                          href={p.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block text-sm"
                        >
                          Visit
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-lg p-6 mb-8 text-center">
            <h3 className="font-semibold text-lg mb-2">No products selected</h3>
            <p>Add products below to start comparing</p>
          </div>
        )}

        {/* Add Products */}
        {availableProducts.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Add Products to Compare</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {availableProducts.map(product => (
                <div key={product.id} className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center overflow-hidden">
                    {product.logoUrl ? (
                      <img src={product.logoUrl} alt={product.name} className="w-8 h-8 object-contain" />
                    ) : (
                      <span className="font-bold text-gray-400">
                        {product.name.substring(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{product.category}</p>
                  <button
                    onClick={() => addProduct(product.id)}
                    className="w-full border border-blue-600 text-blue-600 py-1.5 rounded-lg text-sm hover:bg-blue-50 transition-colors"
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <CompareContent />
    </Suspense>
  );
}
