import React, { useState, useEffect } from "react";
import { CreateWallet } from "../components/Auth/CreateWallet";
import { SignIn } from "../components/Auth/SignIn";
import "../index.css";

const verifierMap: Record<string, any> = {
  google: {
    name: "Google",
    typeOfLogin: "google",
    clientId:
      "852640103435-0qhvrgpkm66c9hu0co6edkhao3hrjlv3.apps.googleusercontent.com",
    verifier: "liquality-google-testnet",
  },
};

// 1. Setup Service Provider
const directParams = {
  baseUrl: `http://localhost:3005/serviceworker`,
  enableLogging: true,
  networkUrl: "https://goerli.infura.io/v3/a8684b771e9e4997a567bbd7189e0b27",
  network: "testnet" as any,
};

export default function Auth({}) {
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
            href="https://docs.liquality.io/functions/auth"
            target="_blank"
            rel="noreferrer"
          >
            <p
              className="mb-4 text-4xl font-extrabold tracking-tight"
              style={{ fontSize: 35, paddingTop: 10 }}
            >
              Create & Auth
            </p>
          </a>
          <CreateWallet directParams={directParams} verifierMap={verifierMap} />
          <br></br>
          <SignIn directParams={directParams} verifierMap={verifierMap} />
        </div>
      </div>
    </div>
  );
}
