import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <App />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
    </Routes>
  </Router>
);
