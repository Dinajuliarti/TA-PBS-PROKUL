import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Footerpage() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-amber-500 mr-2">
                <FontAwesomeIcon icon={faGem} className="w-6" />
              </div>
              <span className="text-xl font-bold">Permata Bread</span>
            </div>
            <p className="text-gray-400 mb-4">
              Roti berkualitas premium yang dibuat dengan sepenuh hati sejak
              2023.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-amber-500 transition"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-amber-500 transition"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-amber-500 transition"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Produk
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Produk Kami</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Roti Tawar
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Gandum Utuh
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Sourdough
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Roti Spesial
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-amber-500"></i>
                <span>Jl. Imam Bonjol, Kedaton, Bandar Lampung</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-amber-500"></i>
                <span>(0721) 1234 5678</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-amber-500"></i>
                <span>halo@permatabread.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2023 Permata Roti. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footerpage;
