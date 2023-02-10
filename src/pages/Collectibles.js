import React, { useState, useEffect } from "react";
import { FetchNftsForm } from "../components/Collectibles/FetchNftsForm";
import { NftImages } from "../components/Collectibles/NftImages";
import "../index.css";

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

  return (
    <div className="align-middle text-center text-banner mb-24">
      <div style={{ padding: 20 }} className="h-screen flex ">
        <div className="grow space-y-10 self-start">
          <FetchNftsForm />
          <NftImages />
        </div>
      </div>
    </div>
  );
}
