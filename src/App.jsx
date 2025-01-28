import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Quiz from "./components/Quiz";
import ProtectedRoute from "./components/ProtectedRoute";

const routes = [
  { path: "/signup", element: <Signup />, protected: false },
  { path: "/", element: <Login />, protected: false },
  { path: "/dashboard", element: <Dashboard />, protected: true },
  { path: "/quiz", element: <Quiz />, protected: true },
];

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element, protected: isProtected }) => (
          <Route
            key={path}
            path={path}
            element={
              isProtected ? <ProtectedRoute>{element}</ProtectedRoute> : element
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
