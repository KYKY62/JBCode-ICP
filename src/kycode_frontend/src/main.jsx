import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import DetailPage from "./DetailPage";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <div style={{ flex: "1" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<DetailPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
