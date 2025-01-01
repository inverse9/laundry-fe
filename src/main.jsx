import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Barang from "./pages/laundry/Barang";
import Navbar from "./pages/Navbar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<Navbar />}>
          <Route index path="/" element={<App />} />
          <Route path="barang" element={<Barang />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
