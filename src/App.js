import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import MainContent from "./pages/MainContent";
import { AuthProvider } from "./contexts/AuthContext";
import {NotFoundPage} from './pages/NotFoundPage';  
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="/mainPage" element={<ProtectedRoute><MainContent /></ProtectedRoute>} />
            <Route path="*" element={<NotFoundPage />} />  
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;