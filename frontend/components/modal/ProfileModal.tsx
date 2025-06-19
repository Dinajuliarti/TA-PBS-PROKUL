// components/ProfileModal.jsx
type ProfileModalProps = {
  showProfileModal: boolean;
  setShowProfileModal: (show: boolean) => void;
};

export default function ProfileModal({
  showProfileModal,
  setShowProfileModal,
}: ProfileModalProps) {
  if (!showProfileModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-bold text-lg">Profile Information</h3>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setShowProfileModal(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-amber-200 flex items-center justify-center">
              <i className="fas fa-user text-3xl text-amber-600"></i>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Full Name
              </label>
              <p className="font-medium">John Doe</p>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Email</label>
              <p className="font-medium">john.doe@example.com</p>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Member Since
              </label>
              <p className="font-medium">January 15, 2022</p>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Loyalty Points
              </label>
              <p className="font-medium">1,245 points</p>
            </div>
          </div>
        </div>
        <div className="p-4 border-t flex justify-end">
          <button className="px-4 py-2 bg-amber-100 text-amber-600 rounded-lg hover:bg-amber-200 transition-all">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
