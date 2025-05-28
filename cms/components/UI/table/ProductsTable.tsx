import React from "react";

function ProductsTable() {
  return (
    <div className="bg-white rounded-lg shadow overflow-auto">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Daftar Produk</h2>
      </div>
      <div className="min-w-full">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Products ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Nama
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Deskripsi
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Harga
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Image
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Baris Contoh */}
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">
                cmb4ngbt60000uk5kj37b3jh9
              </td>
              <td className="px-4 py-3 text-sm text-gray-900">Roti Tawar</td>
              <td className="px-4 py-3 text-sm text-gray-500">
                Roti tawar fresh buatan sendiri, tanpa bahan pengawet
              </td>
              <td className="px-4 py-3 text-sm text-gray-900">Rp 20.000</td>
              <td className="px-4 py-3 text-sm">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  New
                </span>
              </td>
              <td className="px-4 py-3">
                <img
                  src="/roti-tawar2.jpg"
                  alt="Roti Tawar"
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="px-4 py-3 text-sm">
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-yellow-500 text-white text-xs rounded">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white text-xs rounded">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">
                cmb4ngbt60000uk5kj37b3jh9
              </td>
              <td className="px-4 py-3 text-sm text-gray-900">Roti Tawar</td>
              <td className="px-4 py-3 text-sm text-gray-500">
                Roti tawar fresh buatan sendiri, tanpa bahan pengawet
              </td>
              <td className="px-4 py-3 text-sm text-gray-900">Rp 20.000</td>
              <td className="px-4 py-3 text-sm">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  New
                </span>
              </td>
              <td className="px-4 py-3">
                <img
                  src="/roti-tawar2.jpg"
                  alt="Roti Tawar"
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="px-4 py-3 text-sm">
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-yellow-500 text-white text-xs rounded">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white text-xs rounded">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">
                cmb4ngbt60000uk5kj37b3jh9
              </td>
              <td className="px-4 py-3 text-sm text-gray-900">Roti Tawar</td>
              <td className="px-4 py-3 text-sm text-gray-500">
                Roti tawar fresh buatan sendiri, tanpa bahan pengawet
              </td>
              <td className="px-4 py-3 text-sm text-gray-900">Rp 20.000</td>
              <td className="px-4 py-3 text-sm">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  New
                </span>
              </td>
              <td className="px-4 py-3">
                <img
                  src="/roti-tawar2.jpg"
                  alt="Roti Tawar"
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="px-4 py-3 text-sm">
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-yellow-500 text-white text-xs rounded">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white text-xs rounded">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">
                cmb4ngbt60000uk5kj37b3jh9
              </td>
              <td className="px-4 py-3 text-sm text-gray-900">Roti Tawar</td>
              <td className="px-4 py-3 text-sm text-gray-500">
                Roti tawar fresh buatan sendiri, tanpa bahan pengawet
              </td>
              <td className="px-4 py-3 text-sm text-gray-900">Rp 20.000</td>
              <td className="px-4 py-3 text-sm">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  New
                </span>
              </td>
              <td className="px-4 py-3">
                <img
                  src="/roti-tawar2.jpg"
                  alt="Roti Tawar"
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="px-4 py-3 text-sm">
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-yellow-500 text-white text-xs rounded">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white text-xs rounded">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">
                cmb4ngbt60000uk5kj37b3jh9
              </td>
              <td className="px-4 py-3 text-sm text-gray-900">Roti Tawar</td>
              <td className="px-4 py-3 text-sm text-gray-500">
                Roti tawar fresh buatan sendiri, tanpa bahan pengawet
              </td>
              <td className="px-4 py-3 text-sm text-gray-900">Rp 20.000</td>
              <td className="px-4 py-3 text-sm">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  New
                </span>
              </td>
              <td className="px-4 py-3">
                <img
                  src="/roti-tawar2.jpg"
                  alt="Roti Tawar"
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="px-4 py-3 text-sm">
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-yellow-500 text-white text-xs rounded">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white text-xs rounded">
                    Delete
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

export default ProductsTable;
