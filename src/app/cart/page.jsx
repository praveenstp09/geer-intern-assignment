'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(stored.map(item => ({ ...item, quantity: item.quantity || 1 })));
  }, []);

  const updateLocalStorage = (items) => {
    setCartItems(items);
    localStorage.setItem('cart', JSON.stringify(items));
    window.dispatchEvent(new Event('cart-update'));
  };

  const increaseQuantity = (index) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    updateLocalStorage(updated);
  };

  const decreaseQuantity = (index) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      updateLocalStorage(updated);
    }
  };

  const removeItem = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    updateLocalStorage(updated);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Your cart is empty.</p>
          <Link href="/products" className="text-blue-600 hover:underline mt-4 inline-block">
            Browse Products →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 items-center p-4 bg-white border rounded-lg shadow-sm">
                <img src={item.image} alt={item.name} className="w-28 h-28 object-cover rounded" />
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-blue-600 font-bold">₹{item.price}</p>
                  <div className="mt-2 flex justify-center md:justify-start items-center gap-3">
                    <button onClick={() => decreaseQuantity(index)} className="w-7 h-7 bg-gray-200 rounded-full font-bold">−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(index)} className="w-7 h-7 bg-gray-200 rounded-full font-bold">+</button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-600">Subtotal</p>
                  <p className="text-lg font-bold">₹{item.price * item.quantity}</p>
                  <button onClick={() => removeItem(index)} className="text-red-500 text-xs mt-2 hover:underline">
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <Link href="/products" className="inline-block text-sm text-orange-600 hover:underline mt-4">
              ← Continue Shopping
            </Link>
          </div>

          {/* Summary Box */}
          <div className="bg-white shadow-lg border rounded-lg p-6 h-fit sticky top-24">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-4">
              <span>Shipping</span>
              <span className="text-green-500">Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-full font-semibold transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
