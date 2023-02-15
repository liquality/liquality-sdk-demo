import React, { useState, useEffect } from "react";
import { ListTokensInAccount } from "../components/Balances/ListTokensInAccount";
import "../index.css";
import { NftService } from "@liquality/wallet-sdk";
import { ERC20 } from "@liquality/wallet-sdk";

import { setupSDK } from "../setupSDK";

type Props = {};
export const Balances: React.FC<Props> = (props) => {
  //const { onSubmit } = props;
  setupSDK();
  const [accountTokens, setAccountTokens] = useState([]);
  const listTokensInAccount = async (address: string, chainId: string) => {
    const accountTokens: any = await ERC20.listAccountTokens(address, +chainId);
    console.log(accountTokens, "ACCOUNT TOKENS");
    setAccountTokens(accountTokens);
  };

  /*   
  useEffect(() => {
    async function fetchData() {
      setSearchTextInput(searchInput);
    }
    fetchData();
  }, [searchInput]); */

  console.log(accountTokens, "acc tokens in render");
  return (
    <div className="align-middle text-center text-banner mb-24">
      <div className="h-screen flex ">
        <div className="grow space-y-10 self-start">
          <ListTokensInAccount
            accountTokens={accountTokens}
            onSubmit={listTokensInAccount}
          />
        </div>
      </div>
    </div>
  );
};
