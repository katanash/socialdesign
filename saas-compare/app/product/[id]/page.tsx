import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById, saasProducts } from '@/lib/data';

export function generateStaticParams() {
  return saasProducts.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(parseInt(id));

  if (!product) {
    notFound();
  }

  const similarProducts = saasProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900">SaaS Compare</Link>
            <nav className="flex gap-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Products</Link>
              <Link href="/compare" className="text-gray-600 hover:text-gray-900">Compare</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-blue-600 hover:underline">Products</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              {/* Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                  {product.logoUrl ? (
                    <img src={product.logoUrl} alt={product.name} className="w-12 h-12 object-contain" />
                  ) : (
                    <span className="text-2xl font-bold text-gray-400">
                      {product.name.substring(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                  <div className="flex items-center gap-3">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {product.category}
                    </span>
                    {product.rating && (
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {product.rating} / 5
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3 text-green-600">Pros</h2>
                  <ul className="space-y-2">
                    {product.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="text-green-500 font-bold">+</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-3 text-red-600">Cons</h2>
                  <ul className="space-y-2">
                    {product.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="text-red-500 font-bold">-</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Target Users */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-3">Best For</h2>
                <p className="text-gray-600">{product.targetUsers}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Pricing</h2>

              {product.freePlan && (
                <div className="bg-green-50 text-green-800 p-3 rounded-lg mb-4 text-center font-medium">
                  Free Plan Available
                </div>
              )}

              {product.priceMonthly !== null && product.priceMonthly > 0 && (
                <div className="mb-4">
                  <p className="text-gray-500 text-sm">Monthly</p>
                  <p className="text-3xl font-bold">${product.priceMonthly}<span className="text-lg text-gray-500">/mo</span></p>
                </div>
              )}

              {product.priceYearly !== null && product.priceYearly > 0 && (
                <div className="mb-4">
                  <p className="text-gray-500 text-sm">Yearly</p>
                  <p className="text-2xl font-bold">${product.priceYearly}<span className="text-lg text-gray-500">/yr</span></p>
                  {product.priceMonthly && (
                    <p className="text-green-600 text-sm">
                      Save {Math.round((1 - product.priceYearly / (product.priceMonthly * 12)) * 100)}%
                    </p>
                  )}
                </div>
              )}

              {product.trialDays > 0 && (
                <div className="bg-blue-50 text-blue-800 p-3 rounded-lg mb-4 text-center">
                  {product.trialDays} days free trial
                </div>
              )}

              {product.websiteUrl && (
                <a
                  href={product.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Visit Website
                </a>
              )}
            </div>

            {/* Similar Products */}
            {similarProducts.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Similar Products</h2>
                <ul className="space-y-3">
                  {similarProducts.map(p => (
                    <li key={p.id}>
                      <Link
                        href={`/product/${p.id}`}
                        className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors"
                      >
                        <span className="font-medium text-gray-900">{p.name}</span>
                        {p.rating && (
                          <span className="bg-blue-100 text-blue-800 text-sm px-2 py-0.5 rounded">
                            {p.rating}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <Link
                href={`/compare?ids=${product.id}`}
                className="block w-full border border-blue-600 text-blue-600 text-center py-3 rounded-lg hover:bg-blue-50 transition-colors mb-3"
              >
                Add to Compare
              </Link>
              <Link
                href="/"
                className="block w-full border border-gray-300 text-gray-700 text-center py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to List
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
