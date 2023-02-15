import { DataContext } from "./DataContext";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Swap from "./pages/Swap";

import { Route, Routes } from "react-router-dom";
import { Balances } from "./pages/Balances";
import FetchNfts from "./pages/Collectibles/FetchNfts";

import TransferNfts from "./pages/Collectibles/TransferNfts";
import NewERC721Collection from "./pages/Collectibles/NewERC721Collection";
import NewERC1155Collection from "./pages/Collectibles/NewERC1155Collection";
import MintERC721 from "./pages/Collectibles/MintERC721";
import MintERC1155 from "./pages/Collectibles/MintERC1155";
import { setupSDK } from "./setupSDK";

function App() {
  setupSDK();

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
          <Route path="/collectibles" element={<FetchNfts />} />
          <Route path="/collectibles/transfer" element={<TransferNfts />} />
          <Route path="/collectibles/create-erc721-collection" element={<NewERC721Collection />} />
          <Route path="/collectibles/create-erc1155-collection" element={<NewERC1155Collection />} />
          <Route path="/collectibles/mint-erc721-collection" element={<MintERC721 />} />
          <Route path="/collectibles/mint-erc1155-collection" element={<MintERC1155 />} />          
          <Route path="/swap" element={<Swap />} />
        </Routes>
      </body>
    </DataContext.Provider>
  );
}

export default App;
