import React, { useState, useEffect } from "react";
import { ListTokensInAccount } from "../components/Balances/ListTokensInAccount";
import "../index.css";
import { NftService } from "@liquality/wallet-sdk";
import { ERC20Service } from "@liquality/wallet-sdk";

import { setupSDK } from "../setupSDK";
import { GetBalanceForToken } from "../components/Balances/GetBalanceForToken";

type Props = {};
export const Balances: React.FC<Props> = (props) => {
  //const { onSubmit } = props;
  setupSDK();
  const [accountTokens, setAccountTokens] = useState([]);
  const [tokenBalance, setTokenBalance] = useState<{
    tokenName: string;
    tokenSymbol: string;
    rawBalance: string;
    formattedBalance: string | undefined;
  }>({
    tokenName: "",
    tokenSymbol: "",
    rawBalance: "",
    formattedBalance: undefined,
  });

  const listTokensInAccount = async (address: string, chainId: string) => {
    const accountTokens: any = await ERC20Service.listAccountTokens(
      address,
      +chainId
    );
    console.log(accountTokens, "ACCOUNT TOKENS");
    setAccountTokens(accountTokens);
  };

  const getBalanceForToken = async (
    tokenContractAddress: string,
    address: string,
    chainId: string
  ) => {
    const balance: any = await ERC20Service.getBalance(
      tokenContractAddress,
      address,
      +chainId
    );
    console.log(balance, "BALANCE TOKENS");
    setTokenBalance(balance);
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
            listTokensInAccount={listTokensInAccount}
          />

          <br></br>
          <br></br>

          <GetBalanceForToken
            getBalanceForToken={getBalanceForToken}
            tokenBalance={tokenBalance}
          />
        </div>
      </div>
    </div>
  );
};
