import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = [
    { message: "Notification 1", read: false },
    { message: "Notification 2", read: true },
    { message: "Notification 3", read: false },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/barang", label: "Barang" },
    { to: "/laundry", label: "Laundry" },
    { to: "/driver", label: "Driver" },
    { to: "/notification", label: "Notification" },
    { to: "/user", label: "User" },
    { to: "/order", label: "Order" },
    { to: "/service", label: "Service" },
  ];

  return (
    <div className="flex h-screen">
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-gray-800 text-white w-64 z-40`}
      >
        <div className="flex items-center justify-center h-16 bg-gray-900"></div>
        <nav className="mt-10">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between bg-gray-900 text-white h-16 px-4 z-50 relative">
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {/* <h1 className="text-2xl font-semibold">Navbar</h1> */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-gray-800 text-white rounded-md shadow-lg z-50">
                <ul className="divide-y divide-gray-700">
                  {notifications.map((notification, index) => (
                    <li
                      key={index}
                      className={`px-4 py-2 ${
                        notification.read ? "bg-gray-700" : "bg-gray-800"
                      }`}
                    >
                      <div className="flex items-center">
                        <span
                          className={`inline-block w-2 h-2 rounded-full mr-2 ${
                            notification.read ? "bg-gray-400" : "bg-blue-500"
                          }`}
                        ></span>
                        {notification.message}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </header>
        <main
          className={`flex-1 p-4 transition-margin duration-300 ease-in-out ${
            isOpen ? "ml-64" : "ml-0"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Navbar;
