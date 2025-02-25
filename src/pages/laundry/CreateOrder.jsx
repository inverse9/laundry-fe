import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { createOrder, updateOrder } from "../../api/order";

const CreateOrder = () => {
    const { state } = useLocation();
    const [formData, setFormData] = useState({
        user_id: "",
        laundry_id: "",
        driver_id: "",
        barang_id: "",
        service_id: "",
        total: "",
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
                await updateOrder(state.id, formData);
                navigate("/order");
            } else {
                await createOrder(formData);
                navigate("/order");
            }
        } catch (err) {
            console.error(
                state ? "Error updating order:" : "Error creating order:",
                err.message
            );
        }
    };

    useEffect(() => {
        if (state) {
            setFormData({
                user_id: state.user_id,
                laundry_id: state.laundry_id,
                driver_id: state.driver_id,
                barang_id: state.barang_id,
                service_id: state.service_id,
                total: state.total,
            });
        }
    }, [state]);
    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    User ID:
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
                    Driver ID:
                </label>
                <input
                    type="text"
                    name="driver_id"
                    value={formData.driver_id}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Barang ID:
                </label>
                <input
                    type="text"
                    name="barang_id"
                    value={formData.barang_id}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Service ID:
                </label>
                <input
                    type="text"
                    name="service_id"
                    value={formData.service_id}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Total:
                </label>
                <input
                    type="text"
                    name="total"
                    value={formData.total}
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

export default CreateOrder;
