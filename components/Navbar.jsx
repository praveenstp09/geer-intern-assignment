"use client";
import Link from "next/link";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [cartCount] = useState(0);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-600">
          <Link href="/">Tech</Link>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 uppercase">
          <li>
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-orange-600">
              Products
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-orange-600">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:text-orange-600">
              Seller Dashboard
            </Link>
          </li>
        </ul>

        
        <div className="flex items-center space-x-4">
          
          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search products..."
              className="px-3 py-1 pl-9 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <FaSearch className="absolute left-2 text-gray-500" />
          </div>

          {/* User Icon */}
          <FaUser className="text-gray-700 cursor-pointer hover:text-orange-600" />

          {/* Cart Icon with Count */}
          <Link href="/cart" className="relative cursor-pointer">
            <FaShoppingCart className="text-gray-700 hover:text-orange-600" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
