import { SwapService } from "@liquality/wallet-sdk";
import React, { useState } from "react";
import "../index.css";
import { getPrivateKey } from "../utils";

enum Tokens {
  ETH = 'ETH',
  USDT = 'USDT'
};

export default function Swap() {
  const [transactionHash, setTransactionHash] = useState("");

  const tokenAddresses = {
    [Tokens.ETH]: "0x0000000000000000000000000000000000000000",
    
    [Tokens.USDT]: "0x6cf3df5d00e842aab1eb504bcf01ebf81646f7b7"
  }

  const [fromToken, setFromToken] = useState('');
  const [toToken, setToToken] = useState('');
  const [recipient, setRecipient] = useState('');


  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if(fromToken && amount && toToken && recipient) {
      const hash:  any = await SwapService.swap({srcChainId: 1, srcChainTokenIn:fromToken, srcChainTokenInAmount:`${amount}`, dstChainId: 1, dstChainTokenOut: toToken, dstChainTokenOutRecipient: recipient}, getPrivateKey());
      setTransactionHash(hash.swapTxHash);
    }
  }

  return (
    <div className="align-middle text-center text-banner mb-24">
      <div className="h-screen flex ">
        <div className="grow space-y-10 self-start">
          <a
            className="md:hover:text-purple-700"
            href="https://docs.liquality.io/functions/oraclefees"
            target="_blank"
            rel="noreferrer"
          >
            <p
              className="mb-4 text-4xl font-extrabold tracking-tight"
              style={{ fontSize: 35, paddingTop: 10 }}
            >
              Swap
            </p>
          </a>
          <br></br>
          <div className="inline-flex" style={{ padding: 20 }}>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a
                href="https://docs.liquality.io/functions/oraclefees"
                rel="noreferrer"
                target="_blank"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Swap
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                You can easily swap tokens across different EVM chains using our
                SDK.
              </p>

              <br></br>
              <br></br>

              <form onSubmit={handleSubmit} className="space-y-6 mt-4" action="#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                  From
                </h5>

                <div>
                  <select
                    onChange={(e) => setFromToken(e.target.value as Tokens)}
                    value={fromToken}
                    id="fromToken"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                  >
                    <option selected>Pick a token...</option>
                    {Object.values(Tokens).map(token =>  
                     <option value={tokenAddresses[token]}>{token}</option>
                    )}
                  </select>
                  <br></br>
                  <div className="mb-3">
                    <input
                      onChange={(e) => setAmount(+e.target.value)}
                      value={amount}
                      type="number"
                      id="amount"
                      placeholder="0"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                </div>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                  To
                </h5>

                <div>
                  <select
                    onChange={(e) => setToToken(e.target.value as Tokens)}
                    value={toToken}
                    id="toToken"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                  >
                    <option selected>Pick a token...</option>
                    {Object.values(Tokens).map(token =>  
                     <option value={tokenAddresses[token]}>{token}</option>
                    )}
                  </select>
                </div>

                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                  Recipient
                </h5>

                <div>
                <input
                      onChange={(e) => setRecipient(e.target.value)}
                      value={recipient}
                      type="text"
                      id="recipient"
                      placeholder="0"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-2 mb-2"
                >
                  Swap
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
        </div>
      </div>
    </div>
  );
}
