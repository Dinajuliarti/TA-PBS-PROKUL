import React from "react";

function StatsChart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-black">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">Jumlah User</p>
            <h3 className="text-2xl font-bold">234</h3>
            <p className="text-green-500 text-sm mt-1">
              +12.5% dari bulan lalu
            </p>
          </div>
          <div className="p-3 rounded-full bg-amber-100 text-amber-600">
            <i className="fas fa-dollar-sign text-xl"></i>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">Total Pesanan Yang disimpan</p>
            <h3 className="text-2xl font-bold">Rp. 20.000.000</h3>
            <p className="text-green-500 text-sm mt-1">+8.2% dari bulan lalu</p>
          </div>
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <i className="fas fa-users text-xl"></i>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">Jumlah kunjungan web</p>
            <h3 className="text-2xl font-bold">356</h3>
            <p className="text-red-500 text-sm mt-1">-3.1% dari bulan lalu</p>
          </div>
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <i className="fas fa-shopping-cart text-xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsChart;
