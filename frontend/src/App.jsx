import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Main from "./components/Main";
import Sidebar from "./admin/components/Sidebar";
import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/pages/Users";
import Auth from "./admin/components/auth";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Auth/>} />
        <Route
          path="/admin/*"
          element={
            <Sidebar>
              <Routes>
                <Route path="" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
              </Routes>
            </Sidebar>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
