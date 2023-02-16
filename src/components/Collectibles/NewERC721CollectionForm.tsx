import { CreateERC721CollectionRequest } from "@liquality/wallet-sdk/dist/src/nft/types";
import * as React from "react";
import { useState } from "react";
import { getPrivateKey } from "../../utils";

type Props = {
  onSubmit:(request: CreateERC721CollectionRequest, chainId: number, pk: string) => Promise<void>;
  transactionHash: string;
};

export const NewERC721CollectionForm: React.FC<Props> = (props) => {
  const { onSubmit, transactionHash } = props;

  const [chainId, setChainId] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    await onSubmit({tokenName, tokenSymbol}, +chainId, getPrivateKey() );
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
            Create ERC721 Collection
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          You can create a new ERC721 Collection. Just fill the form and the transaction hash will be displayed
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
              Token Name
            </label>
            <input
              value={tokenName}
              onChange={(event) => setTokenName(event.target.value)}
              type="text"
              id="address"
              placeholder="Paste token name..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Token Symbol
            </label>
            <input
              value={tokenSymbol}
              onChange={(event) => setTokenSymbol(event.target.value)}
              type="text"
              id="address"
              placeholder="Paste token symbol..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-2 mb-2"
          >
            Create Collection
          </button>
          <div className="flex items-start">
            <div className="flex items-start">
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Transaction Hash will be displayed here: {transactionHash}
              </label>
            </div>
          </div>
        </form>
      </div>{" "}
    </div>
  );
};
