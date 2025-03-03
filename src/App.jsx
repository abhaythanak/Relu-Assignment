import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./components/Firebase/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import AuthForm from "./components/Auth/AuthForm";
import Dashboard from "./pages/Dashboard";
import './app.css';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/auth"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <AuthForm type={isLogin ? "login" : "signup"} onSuccess={() => setAuthenticated(true)} toggleForm={toggleForm} />
            )
          }
        />
        
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/auth" />
          }
        />

        <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/auth"} />} />
      </Routes>
    </Router>
  );
}

export default App;
