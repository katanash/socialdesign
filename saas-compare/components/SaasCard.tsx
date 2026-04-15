'use client';

import Link from 'next/link';
import { SaasProduct } from '@/lib/types';

interface Props {
  product: SaasProduct;
  isSelected?: boolean;
  onToggleCompare?: (id: number) => void;
  showCompareCheckbox?: boolean;
}

export default function SaasCard({ product, isSelected, onToggleCompare, showCompareCheckbox = true }: Props) {
  const priceDisplay = () => {
    if (product.freePlan && (!product.priceMonthly || product.priceMonthly === 0)) {
      return 'Free';
    }
    if (product.priceMonthly) {
      return `$${product.priceMonthly}/mo`;
    }
    return 'Contact';
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        {showCompareCheckbox && onToggleCompare && (
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => onToggleCompare(product.id)}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-600">Compare</span>
          </label>
        )}
        {product.rating && (
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {product.rating} / 5
          </span>
        )}
      </div>

      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
          {product.logoUrl ? (
            <img src={product.logoUrl} alt={product.name} className="w-8 h-8 object-contain" />
          ) : (
            <span className="text-xl font-bold text-gray-400">
              {product.name.substring(0, 2).toUpperCase()}
            </span>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <span className="text-sm text-gray-500">{product.category}</span>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
        {product.description}
      </p>

      <div className="mb-4">
        <span className="text-2xl font-bold text-green-600">{priceDisplay()}</span>
        {product.freePlan && product.priceMonthly && product.priceMonthly > 0 && (
          <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            Free plan
          </span>
        )}
        {product.trialDays > 0 && (
          <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {product.trialDays} days trial
          </span>
        )}
      </div>

      <Link
        href={`/product/${product.id}`}
        className="w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        View Details
      </Link>
    </div>
  );
}
