import { DataContext } from "./DataContext";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Balances from "./pages/Balances";
import Collectibles from "./pages/Collectibles";
import Swap from "./pages/Swap";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <DataContext.Provider value={{ userAccountAddress: "address here" }}>
      <Router>
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
        {/* <Footer /> */}
      </Router>
    </DataContext.Provider>
  );
}

export default App;
