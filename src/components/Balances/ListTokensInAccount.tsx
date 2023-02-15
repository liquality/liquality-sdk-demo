import * as React from "react";
import { useState, useEffect } from "react";
//import { AuthService } from "@liquality/wallet-sdk";

type AccountToken = {
  tokenName: string;
  tokenSymbol: string;
  rawBalance: string;
  formattedBalance: string | undefined;
};

type Props = {
  onSubmit: (address: string, chainId: string) => void;
  accountTokens: AccountToken[];
};

export const ListTokensInAccount: React.FC<Props> = (props) => {
  const { onSubmit, accountTokens } = props;

  const [address, setAddress] = useState("");
  const [chainId, setChainId] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(address, chainId);
  };

  const _renderAccountTokensRow = () => {
    let rows = [];
    if (accountTokens) {
      rows = accountTokens.map((accountToken, index) => {
        return (
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {accountToken.tokenSymbol}
            </th>
            <td className="px-6 py-4"> {accountToken.tokenName}</td>
            <td className="px-6 py-4"> {accountToken.formattedBalance}</td>
            <td className="px-6 py-4">{accountToken.rawBalance}</td>
          </tr>
        );
      });
    } else {
      return <p>No images available</p>;
    }

    return rows;
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
              List Tokens in Account
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            You can fetch and list all of the tokens in a specific account. Just
            paste the chainid and wallet address and the tokens will be
            displayed.
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
                  Account tokens will be fetched and displayed below
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-2 mb-2"
            >
              List Tokens
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
          <tbody>{_renderAccountTokensRow()}</tbody>
        </table>
      </div>
    </div>
  );
};
