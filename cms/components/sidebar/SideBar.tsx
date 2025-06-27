import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGem,
  faTachometerAlt,
  faUsers,
  faBox,
  faChevronLeft,
  faSquare,
  faSquareArrowUpRight,
  faBoxArchive,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import LogoutButton from "../UI/button/LogOutButton";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";

function SideBar() {
  return (
    <div
      id="sidebar"
      className="sidebar bg-amber-600 text-white w-64 fixed h-full flex flex-col"
    >
      {/* Header */}
      <div className="p-4 flex items-center border-b border-amber-700">
        <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
          <FontAwesomeIcon icon={faUser} className="text-white text-2xl w-4" />
        </div>
        <span className="logo-text ml-3 text-xl font-bold">Admin</span>
      </div>

      {/* Admin Info */}
      <div className="p-4 flex items-center border-b border-amber-700">
        <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center overflow-hidden">
          <FontAwesomeIcon icon={faGem} className="text-white text-2xl w-6" />
        </div>
        <div className="ml-3 sidebar-text">
          <p className="font-semibold">PERMATA ROTI</p>
          <p className="text-xs text-amber-200">Administrator</p>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto">
        <ul className="py-2">
          <li>
            <Link
              href="/dashboard"
              className="menu-item flex items-center px-4 py-3 hover:bg-amber-700"
            >
              <FontAwesomeIcon icon={faTachometerAlt} className="w-4" />
              <span className="sidebar-text ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/katalog"
              className="menu-item flex items-center px-4 py-3 hover:bg-amber-700"
            >
              <FontAwesomeIcon icon={faBoxArchive} className="w-4" />
              <span className="sidebar-text ml-3">Katalog</span>
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="menu-item flex items-center px-4 py-3 hover:bg-amber-700"
            >
              <FontAwesomeIcon icon={faProductHunt} className="w-4" />
              <span className="sidebar-text ml-3">Products</span>
            </Link>
          </li>
          <li>
            <Link
              href="/users"
              className="menu-item flex items-center px-4 py-3 hover:bg-amber-700"
            >
              <FontAwesomeIcon icon={faUsers} className="w-4" />
              <span className="sidebar-text ml-3">Users</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-amber-700">
        <LogoutButton />
      </div>
    </div>
  );
}

export default SideBar;
