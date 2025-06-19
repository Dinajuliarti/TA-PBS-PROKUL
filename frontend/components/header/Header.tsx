// components/Header.jsx
type HeaderProps = {
  setSidebarOpen: (open: boolean) => void;
  setShowProfileModal: (show: boolean) => void;
};

export default function Header({ setSidebarOpen, setShowProfileModal }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <button
        className="md:hidden text-gray-600"
        onClick={() => setSidebarOpen(true)}
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="relative w-64">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-200"
        />
        <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-600 hover:text-amber-600">
          <i className="fas fa-bell"></i>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button
          className="flex items-center space-x-2"
          onClick={() => setShowProfileModal(true)}
        >
          <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center">
            <i className="fas fa-user text-amber-600"></i>
          </div>
          <span className="hidden md:inline">Profile</span>
        </button>
      </div>
    </header>
  );
}
