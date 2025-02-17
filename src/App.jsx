import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home/HomePage";
import Sidebar from "./components/Sidebar";
import AddSheet from "./components/Add Sheet/AddSheet";
import Khata from "./components/khata/Khata";
import Account from "./components/Sub Account/Account";
import AddClient from "./components/Add-Client/AddClient";
import Login from "./components/Login/Login";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is already logged in by inspecting localStorage
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <AppContent
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </Router>
  );
}

const AppContent = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();
  // Hide the Sidebar only on the login page (or the root which redirects to login)
  const hideSidebar =
    location.pathname === "/" || location.pathname === "/login";

  return (
    <div className="App">
      {!hideSidebar && <Sidebar />}
      <Routes>
        {/* Default route: if authenticated, redirect to home; otherwise, show login */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        {/* Login route always passes the setIsAuthenticated prop */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        {/* Protected routes */}
        <Route
          path="/home"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-sheet"
          element={isAuthenticated ? <AddSheet /> : <Navigate to="/login" />}
        />
        <Route
          path="/khata"
          element={isAuthenticated ? <Khata /> : <Navigate to="/login" />}
        />
        <Route
          path="/sub-account"
          element={isAuthenticated ? <Account /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-client"
          element={isAuthenticated ? <AddClient /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};

export default App;
