import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import Header from "./components/Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [adminName, setAdminName] = useState(null);

  const checkLoginStatus = async () => {
    console.log("Executing checkLoginStatus...");
    try {
      const response = await axios.get(
        "http://localhost:5000/admin/verify-token",
        { withCredentials: true } // Include credentials (cookies)
      );
      console.log("Verify-token response:", response.data);

      if (response.data.valid) {
        setLoggedIn(true);
        setAdminName(response.data.user.email);
      } else {
        setLoggedIn(false);
      }
    } catch (error) {
      console.error("Error verifying token:", error.response?.data || error);
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    checkLoginStatus(); // Ensure this function is called
  }, []);

  useEffect(() => {
    console.log("LoggedIn state updated:", loggedIn);
  }, [loggedIn]);

  return (
    <Router>
      {/* Show Header only if the user is logged in */}
      {loggedIn && (
        <Header
          adminName={adminName}
          setLoggedIn={setLoggedIn}
        />
      )}

      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={!loggedIn ? <LandingPage /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/login"
          element={
            !loggedIn ? (
              <Login
                checkLoginStatus={checkLoginStatus}
                onLoginSuccess={checkLoginStatus}
              />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />

        <Route
          path="/dashboard"
          element={loggedIn ? <AdminDashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
