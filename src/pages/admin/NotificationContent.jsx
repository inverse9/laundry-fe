import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useNotificationContent from "../../hooks/useNotificationContent";
import { deleteNotificationContent } from "../../api/notificationContent";

const NotificationContent = () => {
  const { data, loading, error, refetch } = useNotificationContent();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await deleteNotificationContent(id);
      refetch();
    } catch (err) {
      console.error("Error deleting notification content:", err.message);
    }
  };

  const handleUpdate = (item) => {
    navigate("/create-notification-content", { state: item });
  };

  if (loading)
    return <p className="text-center mt-4 text-gray-500">Loading...</p>;
  if (error)
    return <p className="text-center mt-4 text-red-500">Error: {error}</p>;
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-lg font-bold  mb-4">Notification Content</h1>
        <Button onClick={() => navigate("/create-notification-content")}>
          Tambah Notification
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Content
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
                  {item.content}
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

export default NotificationContent;
