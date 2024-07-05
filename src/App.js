import React, {useState} from "react";
import './styles/reset.css';
import './styles/App.css';
import Login from "./pages/Login";
import MainApp from "./pages/MainApp";
import PrivateRoute from "./router/PrivateRoute";
import PublicRoute from "./router/PublicRoute";
import {Navigate, Routes, Route} from "react-router-dom";

function App() {

  return (
      <Routes>
          <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
              <Route path="/app" element={<MainApp />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
  );
}

export default App;
