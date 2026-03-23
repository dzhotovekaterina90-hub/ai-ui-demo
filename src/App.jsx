=import React, { useState } from "react";

export default function ProductDetailPage() {
  const product = {
    name: "Aurora Wireless Headphones",
    price: 129.99,
    rating: 4.3,
    reviews: 128,
    colors: [
      { name: "Midnight Black", class: "bg-gray-900" },
      { name: "Pearl White", class: "bg-gray-100" },
      { name: "Ocean Blue", class: "bg-blue-500" },
      { name: "Rose Gold", class: "bg-pink-300" },
    ],
  };

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const maxQuantity = 10;

  const addToCart = () => {
    // placeholder action
    alert(`${product.name} (${selectedColor.name}) x${quantity} 已加入购物车`);
  };

  const Star = ({ fill = 0 }) => {
    // fill: 0 (empty), 0.5 (half), 1 (full)
    if (fill === 1) {
      return (
        <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.839-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
        </svg>
      );
    }
    if (fill === 0.5) {
      return (
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" aria-hidden="true">
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.839-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" fill="url(#halfGrad)" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      );
    }
    return (
      <svg className="w-5 h-5 text-gray-300 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.839-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
      </svg>
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    const rounded = Math.round(rating * 2) / 2; // round to nearest 0.5
    for (let i = 1; i <= 5; i++) {
      if (rounded >= i) {
        stars.push(<Star key={i} fill={1} />);
      } else if (rounded + 0.5 === i) {
        stars.push(<Star key={i} fill={0.5} />);
      } else {
        stars.push(<Star key={i} fill={0} />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left - Image */}
        <div className="p-6 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
          <div className="w-full max-w-md">
            <div className="relative rounded-xl overflow-hidden bg-gray-100 h-96 flex items-center justify-center">
              {/* Placeholder image */}
              <svg className="w-2/3 h-2/3 text-gray-300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="200" height="200" rx="12" fill="#f3f4f6" />
                <g fill="#e5e7eb">
                  <rect x="24" y="46" width="152" height="92" rx="6" />
                </g>
                <text x="100" y="120" textAnchor="middle" fontSize="14" fill="#d1d5db" fontFamily="sans-serif">Product Image</text>
              </svg>

              {/* small thumbnails */}
              <div className="absolute bottom-4 left-4 flex space-x-3">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center text-gray-400 text-xs">01</div>
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center text-gray-400 text-xs">02</div>
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center text-gray-400 text-xs">03</div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
              <div>Free returns • 2-year warranty</div>
              <div>In stock</div>
            </div>
          </div>
        </div>

        {/* Right - Details */}
        <div className="p-8">
          <div className="flex items-start justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">{product.name}</h1>
            <div className="text-xl font-bold text-indigo-600">${product.price.toFixed(2)}</div>
          </div>

          <div className="mt-4 flex items-center space-x-4">
            <div className="flex items-center">{renderStars(product.rating)}</div>
            <div className="text-sm text-gray-500">({product.reviews} reviews)</div>
          </div>

          <p className="mt-6 text-gray-600">
            Experience premium sound quality with up to 30 hours of battery life, active noise cancellation, and a comfortable, ergonomic design. Perfect for commuting, working, and travel.
          </p>

          <div className="mt-8">
            <h3 className="text-sm font-medium text-gray-700">颜色</h3>
            <div className="mt-3 flex items-center space-x-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-9 h-9 rounded-full border-2 flex items-center justify-center focus:outline-none ${selectedColor.name === color.name ? "ring-2 ring-indigo-400 border-transparent" : "border-white"} ${color.class}`}
                  aria-label={color.name}
                  title={color.name}
                />
              ))}
            </div>
            <div className="mt-2 text-sm text-gray-500">已选择: <span className="text-gray-900">{selectedColor.name}</span></div>
          </div>

          <div className="mt-8 flex items-center space-x-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700">数量</h3>
              <div className="mt-2 flex items-center">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 bg-white border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 flex items-center justify-center"
                  aria-label="减少数量"
                >
                  −
                </button>
                <div className="mx-3 px-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-800 w-16 text-center">{quantity}</div>
                <button
                  onClick={() => setQuantity((q) => Math.min(maxQuantity, q + 1))}
                  className="w-9 h-9 bg-white border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 flex items-center justify-center"
                  aria-label="增加数量"
                >
                  +
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-400">最多购买 {maxQuantity} 件</div>
            </div>

            <div className="flex-1" />
          </div>

          <div className="mt-8 sm:flex sm:items-center sm:space-x-4">
            <button
              onClick={addToCart}
              className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md font-medium focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              加入购物车
            </button>
            <button
              className="mt-3 sm:mt-0 w-full sm:w-auto px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              立即购买
            </button>
          </div>

          <div className="mt-8 border-t pt-6 text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414L9 13.414l4.707-4.707z" clipRule="evenodd" />
                </svg>
                <div>30 天免费退货</div>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M6 2a1 1 0 00-.894.553L2.382 9H5a1 1 0 100-2H3.618l1.724-4.828A1 1 0 016 2zM4 13a1 1 0 100 2h12a1 1 0 100-2H4z" />
                </svg>
                <div>全国配送</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}