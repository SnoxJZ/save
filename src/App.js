import React, {useState} from "react";
import './styles/reset.css';
import './styles/App.css';
import Login from "./pages/Login";
import PrivateRoute from "./router/router";
import MainApp from "./pages/MainApp";
import {Navigate, Routes, Route} from "react-router-dom";

function App() {

  return (
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
              <Route path="/app" element={<MainApp />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
  );
}

export default App;
