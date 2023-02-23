import React from "react";

import space_id from "../assets/space_id.png";
import unstoppable_domains from "../assets/unstoppable_domains.png";
import ens from "../assets/ens.png";
import near from "../assets/near_logo.png";
import pns from "../assets/pns.png";

export default function Home() {
  return (
    <div className="align-middle text-center text-banner -mt-12">
      <div className="h-screen flex ">
        <div className="grow space-y-12 self-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-docsGrey-900 md:text-5xl lg:text-6xl dark:text-white">
            Liquality SDK Demo{" "}
          </h1>
          <a href="https://docs.liquality.io/" target="_blank" rel="noreferrer">
            <p
              className="mb-4 text-4xl font-extrabold tracking-tight"
              style={{ fontSize: 15 }}
            >
              Full documentation site
            </p>
          </a>
          <p className="mb-3 text-lg font-normal text-docsGrey-500 lg:text-xl sm:px-16 xl:px-48 dark:text-docsGrey-400">
            Our vision is to empower digital autonomy for an open, equitable
            world. We have built the tools & protocols that allow all peers to
            easily and securely interact with the decentralized economy.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="mt-2 flex justify-evenly relative">
            <a href="https://github.com/liquality/wallet-api">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>

            <a href="https://www.npmjs.com/search?q=liquality">
              <img
                className="h-11"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png"
                alt="image description"
              />
            </a>

            <a href="https://twitter.com/Liquality_io/">
              <img
                className="h-11"
                src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
                alt="image description"
              />
            </a>

            <a href="www.liquality.io">
              <img
                src="https://docs.liquality.io/img/logo_light.svg"
                className="mr-3 h-6 sm:h-10"
                alt="Liquality Logo"
              />
            </a>

            <a href="https://t.me/liquality">
              <img
                className="h-11 rounded-lg"
                src="https://cdn.worldvectorlogo.com/logos/telegram-1.svg"
                alt="image description"
              />
            </a>

            <a href="https://discord.com/invite/5mgYtuArkh">
              <img
                className="h-11 rounded-lg"
                src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
                alt="image description"
              />
            </a>

            <a href="https://www.youtube.com/channel/UCEXqBmzqPa_KeWtgu0g9KGQ">
              <img
                className="h-11 rounded-lg"
                src="https://seeklogo.com/images/V/vimeo-icon-logo-441934AEB1-seeklogo.com.png"
                alt="image description"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex bg-docsGrey text-white h-screen pt-20 pb-2">
        <div className="grow self-center">
          <h1 className="text-5xl font-extrabold dark:text-docsGrey-900">
            Stress-free blockchain SDK, powered by Liquality
          </h1>
          <p className="mb-6 mt-6 text-lg font-extrabold  font-normal text-docsGrey-500 lg:text-xl sm:px-16 xl:px-48 dark:text-docsGrey-400">
            Put the power of Liquality SDK behind your decentralized application
          </p>
          <div className="flex justify-evenly m-20">
            <div className="p-8">
              <h3 className="text-3xl font-bold dark:text-white mb-2">
                Instant Web3 Wallets
              </h3>
              <p className="mb-3 text-lg font-light text-docsGrey-400 md:text-xl dark:text-docsGrey-400">
                Integrate frictionless wallets with an expanding set of features
                in a matter of minutes. Choose between 10 blockchains.
              </p>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold dark:text-white mb-2">
                Give Your Users Ownership
              </h3>
              <p className="mb-3 text-lg font-light text-docsGrey-400 md:text-xl dark:text-docsGrey-400">
                Increase the value of your game by letting users truly own and
                trade assets and collectibles.
              </p>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold dark:text-purple mb-2">
                Boost Engagement & Revenue
              </h3>
              <p className="mb-3 text-lg font-light text-docsGrey-400 md:text-xl dark:text-docsGrey-400">
                Introduce collectibles and digital assets into your games to
                boost user engagement and grow new revenue streams.
              </p>
            </div>
          </div>
          <h3 className="text-3xl font-bold dark:text-white">
            Connecting your{" "}
            <mark className="px-1 text-docsGrey-900 bg-white rounded dark:bg-docsGrey-900 dark:text-purple">
              web3 app
            </mark>
          </h3>
        </div>
      </div>
      {/* <div className="h-screen">
        <h2>No Token. No DAO. No Bullshit.</h2>
        <p>
          Searching for your new domain shouldn't incur additional charges. We
          believe in empowering users with their Web3 identitiy.
        </p>
      </div> */}
    </div>
  );
}
