import React, { useState, useEffect } from "react";
import "../index.css";

export default function Swap({ route }) {
  /*   let location = useLocation();
  const { searchInput, tableData } = location.state;
  const [loading, setLoading] = useState();
  const [searchTextInput, setSearchTextInput] = useState();

  useEffect(() => {
    async function fetchData() {
      setSearchTextInput(searchInput);
    }
    fetchData();
  }, [searchInput]); */

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

              <form className="space-y-6 mt-4" action="#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                  From
                </h5>

                <div>
                  <label
                    for="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Amount
                  </label>
                  <div className="mb-3">
                    <input
                      type="number"
                      id="amountFrom"
                      placeholder="0"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                  >
                    <option selected>Pick a token...</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                  To
                </h5>

                <div>
                  <label
                    for="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Amount
                  </label>
                  <div className="mb-3">
                    <input
                      type="number"
                      id="amountFrom"
                      placeholder="0"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                  >
                    <option selected>Pick a token...</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-2 mb-2"
                >
                  Swap
                </button>
              </form>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
