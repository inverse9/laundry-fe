import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { createBarang, updateBarang } from "../../api/barang";

const CreateBarang = () => {
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    laundryId: "",
    userId: "",
    berat: "",
    harga: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (state) {
        await updateBarang(state.id, formData);
        navigate("/barang");
      } else {
        await createBarang(formData);
        navigate("/barang");
      }
    } catch (err) {
      console.error(
        state ? "Error updating barang:" : "Error creating barang:",
        err.message
      );
    }
  };

  useEffect(() => {
    if (state) {
      setFormData({
        laundryId: state.laundry_id,
        userId: state.user_id,
        berat: state.berat,
        harga: state.harga,
      });
    }
  }, [state]);
  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Laundry ID:
        </label>
        <input
          type="text"
          name="laundryId"
          value={formData.laundryId}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          User ID:
        </label>
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Berat:
        </label>
        <input
          type="text"
          name="berat"
          value={formData.berat}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Harga:
        </label>
        <input
          type="text"
          name="harga"
          value={formData.harga}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateBarang;
