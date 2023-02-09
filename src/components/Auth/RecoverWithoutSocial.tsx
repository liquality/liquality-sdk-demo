import * as React from "react";
import { useState, useEffect } from "react";
import { DisplayWalletValues } from "./DisplayWalletValues";
//import { AuthService } from "@liquality/wallet-sdk";

type Props = {
  directParams: any;
  verifierMap: Record<string, any>;
};

export const RecoverWithoutSocial: React.FC<Props> = (props) => {
  const { directParams, verifierMap } = props;
  /*   const [tKey, setTKey] = useState<any>({});*/

  return (
    <div className="inline-flex" style={{ padding: 20 }}>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a
          href="https://docs.liquality.io/functions/auth#login-and-unlock-wallet"
          rel="noreferrer"
          target="_blank"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Recover without social
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          You can also recover your wallet using the password share and the
          password itself. This way you do not need any social single sign on to
          recover your wallet.
        </p>

        <br></br>
        <br></br>

        <form className="space-y-6 mt-4" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Password Share
          </h5>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Password-Share
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Your password
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-2 mb-2"
          >
            Recover & Sign-in
          </button>
        </form>
      </div>{" "}
      <DisplayWalletValues loginResponse={{}} />
    </div>
  );
};
