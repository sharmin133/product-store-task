"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession(); // Check if user is logged in

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-pink-600">
              Glamora
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-pink-600">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-pink-600">
              Products
            </Link>

            {session ? (
              <>
                <Link
                  href="/dashboard/add-product"
                  className="text-gray-700 hover:text-pink-600"
                >
                  Add Product
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="border border-pink-600 text-pink-600 bg-white px-4 py-1 rounded hover:bg-pink-600 hover:text-white transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login">
                <button className="border border-pink-600 text-pink-600 bg-white px-4 py-1 rounded hover:bg-pink-600 hover:text-white transition"
                >
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/"
              className="block text-gray-700 hover:text-pink-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-gray-700 hover:text-pink-600"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>

            {session ? (
              <>
                <Link
                  href="/dashboard/add-product"
                  className="block text-gray-700 hover:text-pink-600 w-full text-left"
                  onClick={() => setIsOpen(false)}
                >
                  Add Product
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="block w-full text-left border border-pink-600 text-pink-600 bg-white px-4 py-1 rounded hover:bg-pink-600 hover:text-white transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
              >
                <button  className="block w-full text-left border border-pink-600 text-pink-600 bg-white px-4 py-1 rounded hover:bg-pink-600 hover:text-white transition">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
