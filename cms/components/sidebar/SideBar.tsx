import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGem } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <div
      id="sidebar"
      className="sidebar bg-amber-600 text-white w-64 fixed h-full flex flex-col"
    >
      <div className="p-4 flex items-center border-b border-amber-700">
        <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
          <FontAwesomeIcon icon={faUser} className="text-white text-2xl w-4" />
        </div>
        <span className="logo-text ml-3 text-xl font-bold">Admin</span>
      </div>

      <div className="p-4 flex items-center border-b border-amber-700">
        <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center overflow-hidden">
          <FontAwesomeIcon icon={faGem} className="text-white text-2xl w-6" />
        </div>
        <div className="ml-3 sidebar-text">
          <p className="font-semibold">PERMATA ROTI</p>
          <p className="text-xs text-amber-200">Administrator</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="py-2">
          <li>
            <a
              href="/"
              className="menu-item flex items-center px-4 py-3 hover:bg-amber-700"
            >
              <i className="fas fa-tachometer-alt"></i>
              <span className="sidebar-text ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="/katalog"
              className="menu-item flex items-center px-4 py-3 hover:bg-amber-700"
            >
              <i className="fas fa-users"></i>
              <span className="sidebar-text ml-3">Katalog</span>
            </a>
          </li>
          <li>
            <a
              href="/products"
              className="menu-item flex items-center px-4 py-3 hover:bg-amber-700"
            >
              <i className="fas fa-box"></i>
              <span className="sidebar-text ml-3">Products</span>
            </a>
          </li>
          <li>
            <a
              href="/users"
              className="menu-item flex items-center px-4 py-3 hover:bg-amber-700"
            >
              <i className="fas fa-box"></i>
              <span className="sidebar-text ml-3">Users</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="p-4 border-t border-amber-700">
        <button
          id="toggleSidebar"
          className="w-full flex items-center justify-center text-amber-200 hover:text-white"
        >
          <i className="fas fa-chevron-left"></i>
          <span className="sidebar-text ml-2">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
