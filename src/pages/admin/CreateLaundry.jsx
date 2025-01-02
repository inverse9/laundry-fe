import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { createLaundry, updateLaundry } from "../../api/laundry";

const CreateLaundry = () => {
  const { state } = useLocation();
  const [filePreview, setFilePreview] = useState(null);

  const [formData, setFormData] = useState({
    user_id: "",
    foto: null,
    nama: "",
    alamat: "",
    telp: "",
  });

  const navigate = useNavigate();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        foto: file,
      }));

      const previewUrl = URL.createObjectURL(file);
      setFilePreview(previewUrl);
    }
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "foto") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("user_id", formData.user_id);
      formDataToSend.append("nama", formData.nama);
      formDataToSend.append("foto", formData.foto);
      formDataToSend.append("alamat", formData.alamat);
      formDataToSend.append("telp", formData.telp);

      if (state) {
        await updateLaundry(state.id, formDataToSend);
      } else {
        await createLaundry(formDataToSend);
      }
      navigate("/laundry");
    } catch (err) {
      console.error(
        state ? "Error updating laundry:" : "Error creating laundry:",
        err.message
      );
    }
  };
  useEffect(() => {
    if (state) {
      setFormData({
        user_id: state.user_id,
        nama: state.nama,
        alamat: state.alamat,
        telp: state.telp,
        foto: state.foto,
      });

      if (state.foto) {
        setFilePreview("http://localhost:3000/" + state.foto);
      }
    }
  }, [state]);
  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          user_id
        </label>
        <input
          type="text"
          name="user_id"
          value={formData.user_id}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          nama
        </label>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          alamat
        </label>
        <input
          type="text"
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          telp
        </label>
        <input
          type="text"
          name="telp"
          value={formData.telp}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Foto
        </label>
        <input
          type="file"
          name="foto"
          onChange={handleFileChange}
          accept="image/*"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {filePreview && (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Photo Preview
          </label>
          <img
            src={filePreview}
            alt="Foto Preview"
            className="w-32 h-32 object-cover border rounded"
          />
        </div>
      )}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateLaundry;
