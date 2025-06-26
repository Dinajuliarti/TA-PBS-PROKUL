"use client"; // Tambahkan ini karena kita menggunakan state dan useEffect

import {
  faGem,
  faUser,
  faBars,
  faShoppingCart,
  faSignOutAlt, // Ikon logout baru
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, useEffect } from "react"; // Impor useState dan useEffect

function Navbar() {
  // State untuk melacak status login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Effect untuk memeriksa status login saat komponen dimuat
  useEffect(() => {
    // Cek apakah token ada di localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    // Redirect ke halaman login setelah logout
    window.location.href = "/login";
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-amber-700 mr-2">
                <FontAwesomeIcon
                  className="w-6"
                  icon={faGem}
                  style={{ color: "#a35f00" }}
                />
              </div>
              <span className="text-xl font-bold text-gray-800">
                Permata Roti
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="nav-link text-gray-600 hover:text-amber-600 transition"
              >
                Beranda
              </Link>
              <Link
                href="/products"
                className="nav-link text-gray-600 hover:text-amber-600 transition"
              >
                Produk
              </Link>
              <Link
                href="/about"
                className="nav-link text-gray-600 hover:text-amber-600 transition"
              >
                Tentang Kami
              </Link>
              <Link
                href="/contact"
                className="nav-link text-gray-600 hover:text-amber-600 transition"
              >
                Kontak
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* Tampilkan ikon user dengan link dinamis */}
              <Link
                href={isLoggedIn ? "/dashboard" : "/login"}
                className="hidden md:block text-gray-600 hover:text-amber-600"
                title={isLoggedIn ? "Dashboard" : "Login"}
              >
                <FontAwesomeIcon icon={faUser} className="w-5 text-lg" />
              </Link>

              <button className="block md:hidden text-gray-600">
                <FontAwesomeIcon icon={faBars} className="w-5 text-lg" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
