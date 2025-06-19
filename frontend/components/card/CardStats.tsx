// components/StatsCards.jsx
export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500">Total Products</p>
            <h3 className="text-2xl font-bold">124</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
            <i className="fas fa-boxes text-amber-600"></i>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500">Available</p>
            <h3 className="text-2xl font-bold">98</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <i className="fas fa-check-circle text-green-600"></i>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500">Categories</p>
            <h3 className="text-2xl font-bold">12</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <i className="fas fa-tags text-blue-600"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
