import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { createService, updateService } from "../../api/service";

const CreateService = () => {
    const { state } = useLocation();
    const [formData, setFormData] = useState({
        laundry_id: "",
        nama: "",
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
                await updateService(state.id, formData);
                navigate("/service");
            } else {
                await createService(formData);
                navigate("/service");
            }
        } catch (err) {
            console.error(
                state ? "Error updating service:" : "Error creating service:",
                err.message
            );
        }
    };

    useEffect(() => {
        if (state) {
            setFormData({
                laundry_id: state.laundry_id,
                nama: state.nama,
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
                    name="laundry_id"
                    value={formData.laundry_id}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nama:
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

export default CreateService;
