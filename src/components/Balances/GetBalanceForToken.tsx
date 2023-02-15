//USDT contract address for mainnet: 0xdAC17F958D2ee523a2206206994597C13D831ec7
//USDT contract address for arbitrum: 0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9
import * as React from "react";
import { useState, useEffect } from "react";

type AccountToken = {
  tokenName: string;
  tokenSymbol: string;
  rawBalance: string;
  formattedBalance: string | undefined;
};

type Props = {
  getBalanceForToken: (
    tokenContractAddress: string,
    address: string,
    chainId: string
  ) => void;
  tokenBalance: AccountToken;
};

export const GetBalanceForToken: React.FC<Props> = (props) => {
  const { getBalanceForToken, tokenBalance } = props;

  const [address, setAddress] = useState("");
  const [chainId, setChainId] = useState("");
  const [tokenContractAddress, setTokenContractAddress] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getBalanceForToken(tokenContractAddress, address, chainId);
  };

  return (
    <div>
      <div className="inline-flex" style={{ padding: 20 }}>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a
            href="https://docs.liquality.io/functions/auth#create-a-wallet"
            target="_blank"
            rel="noreferrer"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Get Balance for a Specific Token
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            You can fetch and get the balance and info for a specific token
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 mt-4" action="#">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your ChainId
              </label>
              <input
                value={chainId}
                onChange={(event) => setChainId(event.target.value)}
                type="number"
                id="ChainID"
                placeholder="Type chainID here..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your Wallet Address
              </label>
              <input
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                type="text"
                id="address"
                placeholder="Paste your wallet address..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Token Contract Address
              </label>
              <input
                value={tokenContractAddress}
                onChange={(event) =>
                  setTokenContractAddress(event.target.value)
                }
                type="text"
                id="address"
                placeholder="Paste your wallet address..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Balance and info for specified token will be shown below
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-2 mb-2"
            >
              Show Token Balance
            </button>
          </form>
        </div>{" "}
      </div>

      <div className="p-6 relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Token Symbol
              </th>
              <th scope="col" className="px-6 py-3">
                Token Name
              </th>
              <th scope="col" className="px-6 py-3">
                Formatted Balance
              </th>
              <th scope="col" className="px-6 py-3">
                Raw Balance HEX
              </th>
            </tr>
          </thead>
          <tbody>
            {" "}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {tokenBalance?.tokenSymbol}
              </th>
              <td className="px-6 py-4"> {tokenBalance?.tokenName}</td>
              <td className="px-6 py-4"> {tokenBalance?.formattedBalance}</td>
              <td className="px-6 py-4">{tokenBalance?.rawBalance}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
