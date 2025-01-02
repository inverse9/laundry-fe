import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import {
  createNotificationContent,
  updateNotificationContent,
} from "../../api/notificationContent";

const CreateNotificationContent = () => {
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    content: "",
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
        await updateNotificationContent(state.id, formData);
        navigate("/notification");
      } else {
        await createNotificationContent(formData);
        navigate("/notification");
      }
    } catch (err) {
      console.error(
        state
          ? "Error updating notification content:"
          : "Error creating notification content:",
        err.message
      );
    }
  };

  useEffect(() => {
    if (state) {
      setFormData({
        content: state.content,
      });
    }
  }, [state]);
  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          content
        </label>
        <input
          type="text"
          name="content"
          value={formData.content}
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

export default CreateNotificationContent;
