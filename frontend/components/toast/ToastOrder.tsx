// components/Toast.jsx
interface ToastProps {
  showToast: boolean;
}

export default function Toast({ showToast }: ToastProps) {
  if (!showToast) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center animate-fadeIn">
      <i className="fas fa-check-circle mr-2"></i>
      <span>Order saved successfully!</span>
    </div>
  );
}
