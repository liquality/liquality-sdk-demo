import { MintERC721Request } from "@liquality/wallet-sdk/dist/src/nft/types";
import * as React from "react";
import { useState } from "react";

type Props = {
  onSubmit: (request: MintERC721Request, chainId: number, pk: string) => void;
  transactionHash: string;
};

export const MintERC721Form: React.FC<Props> = (props) => {
  const { onSubmit, transactionHash } = props;

  const [chainId, setChainId] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [owner, setOwner] = useState("");
  const [recipient, setRecipient] = useState("");  
  const [uri, setUri] = useState("");

  const pk = "dasgdgadgg";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({contractAddress, recipient, owner, uri}, +chainId, pk );
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
            Mint ERC721 NFT
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          You can mint ERC721 Nft. Just fill the form and the transaction hash will be displayed.
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
              Token Address
            </label>
            <input
              value={contractAddress}
              onChange={(event) => setContractAddress(event.target.value)}
              type="text"
              id="address"
              placeholder="Paste token address..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Wallet Address
            </label>
            <input
              value={owner}
              onChange={(event) => setOwner(event.target.value)}
              type="text"
              id="address"
              placeholder="Paste your wallet address..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Recipient address
            </label>
            <input
              value={recipient}
              onChange={(event) => setRecipient(event.target.value)}
              type="text"
              id="address"
              placeholder="Paste recipient wallet address..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              URI
            </label>
            <input
              value={uri}
              onChange={(event) => setUri(event.target.value)}
              type="text"
              id="address"
              placeholder="Paste token uri"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-2 mb-2"
          >
            Mint Nft
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
