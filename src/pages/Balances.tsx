import React, { useState, useEffect } from "react";
import { ListTokensInAccount } from "../components/Balances/ListTokensInAccount";
import "../index.css";
import { NftService } from "@liquality/wallet-sdk";

import { setupSDK } from "../setupSDK";

type Props = {};
export const Balances: React.FC<Props> = (props) => {
  //const { onSubmit } = props;
  setupSDK();
  const [accountTokens, setAccountTokens] = useState([]);
  const fetchNfts = async (address: string, chainId: string) => {
    const nfts: any = await NftService.getNfts(address, +chainId);
    console.log(JSON.stringify(nfts));
    setAccountTokens(nfts);
  };

  /*   
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
          <ListTokensInAccount onSubmit={fetchNfts} />
        </div>
      </div>
    </div>
  );
};
