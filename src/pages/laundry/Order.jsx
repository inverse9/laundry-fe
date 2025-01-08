import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useOrder from "../../hooks/useOrder";
import { deleteOrder } from "../../api/order";

const Order = () => {
    const { data, loading, error, refetch } = useOrder();
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            await deleteOrder(id);
            refetch();
        } catch (err) {
            console.error("Error deleting order:", err.message);
        }
    };

    const handleUpdate = (item) => {
        navigate("/create-order", { state: item });
    };

    if (loading)
        return <p className="text-center mt-4 text-gray-500">Loading...</p>;
    if (error)
        return <p className="text-center mt-4 text-red-500">Error: {error}</p>;
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between mb-4">
                <h1 className="text-lg font-bold  mb-4">Order</h1>
                <Button onClick={() => navigate("/create-Order")}>
                    Tambah Order
                </Button>
            </div>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                                User ID
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                                Laundry ID
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                                Driver ID
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                                Barang ID
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                                Service ID
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                                Total
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {item.user_id}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {item.laundry_id}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {item.driver_id}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {item.barang_id}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {item.barang_id}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {item.service_id}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {item.total}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 flex gap-4">
                                    <Button onClick={() => handleUpdate(item)} className="w-fit">
                                        Update
                                    </Button>
                                    <Button
                                        onClick={() => handleDelete(item.id)}
                                        className="w-fit"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;
