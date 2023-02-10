import React, { useState, useEffect } from "react";
import { ListTokensInAccount } from "../components/Balances/ListTokensInAccount";
import "../index.css";

export default function Balances({ route }) {
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
      <div className="h-screen flex ">
        <div className="grow space-y-10 self-start">
          <ListTokensInAccount />
        </div>
      </div>
    </div>
  );
}
