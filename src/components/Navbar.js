import React from "react";

const Navbar = () => {
  return (
    <nav className="px-2 bg-white border-docsGrey-200 dark:bg-docsGrey-900 sticky top-0 shadow-md mt-1 pt-2 pb-2 z-10">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img
            src="https://docs.liquality.io/img/logo_light.svg"
            className="mr-3 h-6 sm:h-10"
            alt="Liquality Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex justify-center items-center ml-3 text-docsGrey-400 rounded-lg md:hidden hover:text-docsGrey-900 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:text-docsGrey-400 dark:hover:text-white dark:focus:ring-docsGrey-500"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col p-4 mt-4 bg-docsGrey-50 rounded-lg border border-docsGrey-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-docsGrey-800 md:dark:bg-docsGrey-900 dark:border-docsGrey-700">
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0 md:dark:text-white dark:bg-purple-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/auth"
                className="block py-2 pr-4 pl-3 text-docsGrey-700 rounded hover:bg-docsGrey-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-docsGrey-400 md:dark:hover:text-white dark:hover:bg-docsGrey-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Create & Auth
              </a>
            </li>
            <li>
              <a
                href="/balances"
                className="block py-2 pr-4 pl-3 text-docsGrey-700 rounded hover:bg-docsGrey-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-docsGrey-400 md:dark:hover:text-white dark:hover:bg-docsGrey-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Tokens & Balances
              </a>
            </li>
            <li>
              <a
                href="/collectibles"
                className="block py-2 pr-4 pl-3 text-docsGrey-700 rounded hover:bg-docsGrey-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-docsGrey-400 md:dark:hover:text-white dark:hover:bg-docsGrey-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                NFT & Collectibles
              </a>
            </li>
            <li>
              <a
                href="/swap"
                className="block py-2 pr-4 pl-3 text-docsGrey-700 rounded hover:bg-docsGrey-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-docsGrey-400 md:dark:hover:text-white dark:hover:bg-docsGrey-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Swap
              </a>
            </li>
            {/* <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-docsGrey-700 border-b border-docsGrey-100 hover:bg-docsGrey-50 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 md:w-auto dark:text-docsGrey-400 dark:hover:text-white dark:focus:text-white dark:border-docsGrey-700 dark:hover:bg-docsGrey-700 md:dark:hover:bg-transparent"
              >
                Dropdown{" "}
                <svg
                  className="ml-1 w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-docsGrey-100 shadow dark:bg-docsGrey-700 dark:divide-docsGrey-600"
              >
                <ul
                  className="py-1 text-sm text-docsGrey-700 dark:text-docsGrey-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-docsGrey-100 dark:hover:bg-docsGrey-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button
                      id="doubleDropdownButton"
                      data-dropdown-toggle="doubleDropdown"
                      data-dropdown-placement="right-start"
                      type="button"
                      className="flex justify-between items-center py-2 px-4 w-full hover:bg-docsGrey-100 dark:hover:bg-docsGrey-600 dark:hover:text-white"
                    >
                      Dropdown
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="doubleDropdown"
                      className="hidden z-10 w-44 bg-white rounded divide-y divide-docsGrey-100 shadow dark:bg-docsGrey-700"
                      data-popper-reference-hidden=""
                      data-popper-escaped=""
                      data-popper-placement="right-start"
                      style={{
                        position: "absolute",
                        inset: "0px auto auto 0px",
                        margin: "0px",
                        transform: "translate(10px, 265px)",
                      }}
                    >
                      <ul
                        className="py-1 text-sm text-docsGrey-700 dark:text-docsGrey-200"
                        aria-labelledby="doubleDropdownButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-docsGrey-100 dark:hover:bg-docsGrey-600 dark:text-docsGrey-400 dark:hover:text-white"
                          >
                            Overview
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-docsGrey-100 dark:hover:bg-docsGrey-600 dark:text-docsGrey-400 dark:hover:text-white"
                          >
                            My downloads
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-docsGrey-100 dark:hover:bg-docsGrey-600 dark:text-docsGrey-400 dark:hover:text-white"
                          >
                            Billing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-docsGrey-100 dark:hover:bg-docsGrey-600 dark:text-docsGrey-400 dark:hover:text-white"
                          >
                            Rewards
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-docsGrey-100 dark:hover:bg-docsGrey-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-docsGrey-700 hover:bg-docsGrey-100 dark:hover:bg-docsGrey-600 dark:text-docsGrey-400 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
