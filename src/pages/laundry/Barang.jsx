import React from "react";
import Button from "../../components/Button";

const Barang = () => {
  return (
    <div className=" p-4">
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl">Barang</h1>
        <Button>Tambah barang</Button>
      </div>
      <table className="min-w-full divide-y divide-gray-200 mt-10">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-900 text-left font-medium text-gray-50 tracking-wider">
              Nama Barang
            </th>
            <th className="px-6 py-3 bg-gray-900 text-left font-medium text-gray-50 tracking-wider">
              Jumlah
            </th>
            <th className="px-6 py-3 bg-gray-900 text-left font-medium text-gray-50 tracking-wider">
              Harga
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Contoh Barang 1</td>
            <td className="px-6 py-4 whitespace-nowrap">10</td>
            <td className="px-6 py-4 whitespace-nowrap">Rp 100.000</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Contoh Barang 2</td>
            <td className="px-6 py-4 whitespace-nowrap">5</td>
            <td className="px-6 py-4 whitespace-nowrap">Rp 50.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Barang;
