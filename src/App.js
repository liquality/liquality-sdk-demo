import { DataContext } from "./DataContext";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Collectibles from "./pages/Collectibles";
import Swap from "./pages/Swap";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Balances } from "./pages/Balances";

function App() {
  const [loginResponse, setLoginResponse] = useState(
    JSON.parse(localStorage.getItem("loginResponse")) || {}
  );

  useEffect(() => {
    localStorage.setItem("loginResponse", JSON.stringify(loginResponse));
  }, [loginResponse]);

  return (
    <DataContext.Provider
      value={{
        loginResponse: loginResponse,
        setLoginResponse: setLoginResponse,
      }}
    >
      <body className="stretched device-xl bg-white no-transition">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/balances" element={<Balances />} />

          <Route path="/collectibles" element={<Collectibles />} />
          <Route path="/swap" element={<Swap />} />
        </Routes>
      </body>
    </DataContext.Provider>
  );
}

export default App;
