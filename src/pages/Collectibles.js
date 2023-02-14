import React, { useState, useEffect } from "react";
import { FetchNftsForm } from "../components/Collectibles/FetchNftsForm";
import { NftImages } from "../components/Collectibles/NftImages";
import "../index.css";
<<<<<<< Updated upstream:src/pages/Collectibles.js

export default function Collectibles({ route }) {
  /*   let location = useLocation();
  const { searchInput, tableData } = location.state;
  const [loading, setLoading] = useState();
  const [searchTextInput, setSearchTextInput] = useState();

  useEffect(() => {
    async function fetchData() {
      setSearchTextInput(searchInput);
    }
    fetchData();
  }, [searchInput]); */
=======
import { setupSDK } from "../setupSDK";

export default function Collectibles() {
  setupSDK();
  const [nfts, setNfts] = useState([]);
  const fetchNfts = async (address: string, chainId: string) => {
    const nfts: any = await NftService.getNfts(address, +chainId);
    console.log(JSON.stringify(nfts));
    setNfts(nfts);
  };
>>>>>>> Stashed changes:src/pages/Collectibles.tsx

  return (
    <div className="align-middle text-center text-banner mb-24">
      <div style={{ padding: 20 }} className="h-screen flex ">
        <div className="grow space-y-10 self-start">
<<<<<<< Updated upstream:src/pages/Collectibles.js
          <FetchNftsForm />
          <NftImages />
=======
          <FetchNftsForm onSubmit={fetchNfts} />
          <NftImages nfts={nfts} />
>>>>>>> Stashed changes:src/pages/Collectibles.tsx
        </div>
      </div>
    </div>
  );
}
