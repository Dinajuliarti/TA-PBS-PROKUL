import React from "react";

function RecentOrders() {
  return (
    <div className="">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Daftar Produk Tersimpan</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #ORD-0001
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  John Smith
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  12 May 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $245.00
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #ORD-0002
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Sarah Johnson
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  11 May 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $189.50
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #ORD-0003
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Michael Brown
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  10 May 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $320.75
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #ORD-0004
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Emily Davis
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  9 May 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $145.20
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing 1 to 4 of 24 entries
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 rounded border border-gray-300 text-sm">
              Previous
            </button>
            <button className="px-3 py-1 rounded bg-amber-600 text-white text-sm">
              1
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-sm">
              2
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-sm">
              3
            </button>
            <button className="px-3 py-1 rounded border border-gray-300 text-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentOrders;
