import * as React from "react";
import { useState, useEffect } from "react";
import { DisplayWalletValues } from "./DisplayWalletValues";
import { AuthService, tryRegisterSW } from "@liquality/wallet-sdk";
import { DataContext } from "../../DataContext";

type Props = {
  directParams: any;
  verifierMap: Record<string, any>;
};

export const CreateWallet: React.FC<Props> = (props) => {
  const { directParams, verifierMap } = props;
  const [tKey, setTKey] = useState<any>({});
  //const [loginResponse, setLoginResponse] = useState<any>({});
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [passwordResponse, setPasswordResponse] = useState<string>("");
  const [newPasswordShare, setNewPasswordShare] = useState<any>({});
  const { loginResponse, setLoginResponse } = React.useContext(DataContext);

  useEffect(() => {
    const init = async () => {
      const registration = tryRegisterSW("/serviceworker/sw.js");
      const tKeyResponse = await AuthService.init(directParams);
      setTKey(tKeyResponse);
    };

    init();
  }, [loginResponse, passwordResponse]);

  const createNewWallet = async () => {
    const response = await AuthService.createWallet(tKey, verifierMap);
    setLoginResponse(response);
  };

  const generatePassword = async (password: string) => {
    let response = await AuthService.generateNewShareWithPassword(
      loginResponse.tKey,
      password
    );

    console.log("response from REACT:", response);
    setNewPasswordShare(response.result);
    response.msg.startsWith("Error")
      ? setErrorMsg(response.msg)
      : setPasswordResponse(response.msg);
  };

  console.log(loginResponse, "LOGINRESPONSE");

  return (
    <div className="inline-flex" style={{ padding: 20 }}>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a
          href="https://docs.liquality.io/functions/auth#create-a-wallet"
          target="_blank"
          rel="noreferrer"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Create wallet
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Create a wallet using Liquality SDK. We utilize the tKey system to
          generate a wallet with 3 shares, one of them your social login.
        </p>

        <button
          onClick={() => createNewWallet()}
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-2 mb-2"
        >
          <svg
            className="w-4 h-4 mr-2 -ml-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Liquality tKey SSO
        </button>

        {Object.keys(loginResponse).length > 0 ? (
          <form className="space-y-6 mt-4" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Create a password
            </h5>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Password share will be generated
                </label>
              </div>
            </div>
            <button
              type="submit"
              onClick={() => generatePassword(password)}
              className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-2 mb-2"
            >
              Create password
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              {passwordResponse}
            </div>
          </form>
        ) : (
          <div style={{ height: 300 }}></div>
        )}
      </div>{" "}
      <DisplayWalletValues loginResponse={loginResponse} />
    </div>
  );
};
