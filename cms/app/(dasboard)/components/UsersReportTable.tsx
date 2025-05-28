import React from "react";

function UserReportTable() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Laporan Pengguna Baru</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal Buat
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Data contoh statis */}
            <tr>
              
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                USR001
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                rakaagi
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                26 Mei 2025
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded">
                    Detail
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white text-xs rounded">
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                USR002
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                agus_dev
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                26 Mei 2025
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded">
                    Detail
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white text-xs rounded">
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                USR002
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                agus_dev
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                26 Mei 2025
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded">
                    Detail
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white text-xs rounded">
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                USR002
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                agus_dev
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                26 Mei 2025
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded">
                    Detail
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white text-xs rounded">
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                USR002
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                agus_dev
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                26 Mei 2025
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded">
                    Detail
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white text-xs rounded">
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                USR002
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                agus_dev
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                26 Mei 2025
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded">
                    Detail
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white text-xs rounded">
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                USR002
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                agus_dev
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                26 Mei 2025
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded">
                    Detail
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white text-xs rounded">
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                USR002
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                agus_dev
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                26 Mei 2025
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded">
                    Detail
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white text-xs rounded">
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                USR002
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                agus_dev
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                26 Mei 2025
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded">
                    Detail
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white text-xs rounded">
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
            {/* Tambahkan baris lain sesuai data */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserReportTable;
