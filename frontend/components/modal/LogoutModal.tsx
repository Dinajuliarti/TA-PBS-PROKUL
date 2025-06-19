type LogoutModalProps = {
  showLogoutModal: boolean;
  setShowLogoutModal: (show: boolean) => void;
};

export default function LogoutModal({ showLogoutModal, setShowLogoutModal }: LogoutModalProps) {
  if (!showLogoutModal) return null;

  const handleLogout = () => {
    alert("You have been logged out successfully!");
    setShowLogoutModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4">
        <div className="p-4 border-b">
          <h3 className="font-bold text-lg text-amber-600">Confirm Logout</h3>
        </div>
        <div className="p-4">
          <p className="mb-4">
            Are you sure you want to logout from your account?
          </p>
          <div className="flex justify-end space-x-2">
            <button
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
              onClick={() => setShowLogoutModal(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
              onClick={handleLogout}
            >
              <i className="fas fa-sign-out-alt mr-2"></i> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
