import * as React from "react";
import { useState, useEffect } from "react";
//import { AuthService } from "@liquality/wallet-sdk";

type Props = {
  loginResponse: any;
};

export const DisplayWalletValues: React.FC<Props> = (props) => {
  const { loginResponse } = props;

  return (
    <div className="inline-flex" style={{ paddingLeft: 20 }}>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5
          style={{ color: "#6c2bd9" }}
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Wallet Info
        </h5>
        <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
          <div className="flex flex-col pb-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Public Address:
            </dt>
            <dd className="text-lg font-semibold">xxxxxxxxxxx</dd>
          </div>
          <div className="flex flex-col py-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Private Key:
            </dt>
            <dd className="text-lg font-semibold">xxxxxxxxxx</dd>
          </div>
          <div className="flex flex-col pt-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Email:
            </dt>
            <dd className="text-lg font-semibold">xxxxxxxxxxx</dd>
          </div>
        </dl>
      </div>{" "}
    </div>
  );
};
