import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Barang from "./pages/laundry/Barang";
import Navbar from "./pages/Navbar";
import CreateBarang from "./pages/laundry/CreateBarang";
import Laundry from "./pages/admin/Laundry";
import Driver from "./pages/admin/Driver";
import NotificationContent from "./pages/admin/NotificationContent";
import User from "./pages/admin/User";
import Order from "./pages/laundry/Order";
import Service from "./pages/laundry/Service";
import CreateNotificationContent from "./pages/admin/CreateNotificationContent";
import CreateDriver from "./pages/admin/CreateDriver";
import CreateLaundry from "./pages/admin/CreateLaundry";
import CreateUser from "./pages/admin/CreateUser";
import CreateOrder from "./pages/laundry/CreateOrder";
import CreateService from "./pages/laundry/CreateService";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<Navbar />}>
          <Route index path="/" element={<App />} />
          <Route path="barang" element={<Barang />} />
          <Route path="create-barang/:id" element={<CreateBarang />} />
          <Route path="create-barang" element={<CreateBarang />} />

          <Route path="laundry" element={<Laundry />} />
          <Route path="create-laundry/:id" element={<CreateLaundry />} />
          <Route path="create-laundry" element={<CreateLaundry />} />
          <Route path="driver" element={<Driver />} />
          <Route path="create-driver/:id" element={<CreateDriver />} />
          <Route path="create-driver" element={<CreateDriver />} />

          <Route path="notification" element={<NotificationContent />} />
          <Route
            path="create-notification-content/:id"
            element={<CreateNotificationContent />}
          />
          <Route
            path="create-notification-content"
            element={<CreateNotificationContent />}
          />
          <Route path="user" element={<User />} />
          <Route path="create-user/:id" element={<CreateUser />} />
          <Route path="create-user" element={<CreateUser />} />

          <Route path="order" element={<Order />} />
          <Route path="create-order/:id" element={<CreateOrder />} />
          <Route path="create-order" element={<CreateOrder />} />

          <Route path="service" element={<Service />} />
          <Route path="create-service/:id" element={<CreateService />} />
          <Route path="reate-service" element={<CreateService />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
