import * as React from "react";
import { useState, useEffect } from "react";
//import { AuthService } from "@liquality/wallet-sdk";

type Props = {
  onSubmit: (address: string, chainId: string) => void;
};

export const FetchNftsForm: React.FC<Props> = (props) => {
  const { onSubmit } = props;

  const [address, setAddress] = useState("");
  const [chainId, setChainId] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(address, chainId);
  };

  return (
    <div className="inline-flex" style={{ padding: 20 }}>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a
          href="https://docs.liquality.io/functions/auth#create-a-wallet"
          target="_blank"
          rel="noreferrer"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Fetch NFTs
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          You can fetch NFTs for any wallet address and evm chain. Just paste
          the chainid and wallet address and the NFTs will be displayed.
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
          <div className="flex items-start">
            <div className="flex items-start">
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                NFTs will be fetched and displayed below
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-2 mb-2"
          >
            Fetch NFTs
          </button>
        </form>
      </div>{" "}
    </div>
  );
};
