import {
  faGem,
  faUser,
  faBars,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Navbar() {
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
                Permata Bread
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <Link
                href="#"
                className="nav-link text-gray-600 hover:text-amber-600 transition"
              >
                Home
              </Link>
              <Link
                href="#"
                className="nav-link text-gray-600 hover:text-amber-600 transition"
              >
                Products
              </Link>
              <Link
                href="#"
                className="nav-link text-gray-600 hover:text-amber-600 transition"
              >
                About
              </Link>
              <Link
                href="#"
                className="nav-link text-gray-600 hover:text-amber-600 transition"
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block text-gray-600 hover:text-amber-600">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="w-6 text-lg"
                />
              </button>

              <button className="hidden md:block text-gray-600 hover:text-amber-600">
                <FontAwesomeIcon icon={faUser} className="w-5 text-lg" />
              </button>

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
