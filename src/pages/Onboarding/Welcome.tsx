import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../assets/logoMax.png";
import { styles } from "../../styles";
import { DataContext } from "../../Context";
import { CreateWallet } from "../../components/Auth/CreateWallet";
import { SignIn } from "../../components/Auth/SignIn";
//FOR DEVELOPMENT PLEASE USE THESE
// const verifierMap: Record<string, any> = {
//   google: {
//     name: "Google",
//     typeOfLogin: "google",
//     clientId:
//       "852640103435-0qhvrgpkm66c9hu0co6edkhao3hrjlv3.apps.googleusercontent.com",
//     verifier: "liquality-google-testnet",
//   },
// };

// // 1. Setup Service Provider
// const directParams = {
//   baseUrl: `http://localhost:3005/serviceworker`,
//   enableLogging: true,
//   networkUrl: "https://goerli.infura.io/v3/a8684b771e9e4997a567bbd7189e0b27",
//   network: "testnet" as any,
// };

//FOR LIVE HOSTING/PRODUCTION SITE PLS USE THIS
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
  baseUrl: `https://inquisitive-dusk-bbe67f.netlify.app/serviceworker`,
  enableLogging: true,
  networkUrl: "https://goerli.infura.io/v3/a8684b771e9e4997a567bbd7189e0b27",
  network: "testnet" as any,
};

export default function Welcome() {
  const { loginResponse } = useContext(DataContext);
  const name =
    loginResponse?.loginResponse?.userInfo?.name?.split(" ")[0] || "";

  console.log(loginResponse, "LOGINRESPONSE");
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(198, 181, 208, 0.8) 0%, rgba(41, 173, 204, 0.8) 100%);",
      }}
    >
      <Box
        sx={{
          ...styles.skeleton,
          background: "linear-gradient(180deg, #C6B5D0 0%, #29ADCC 100%);",
        }}
      >
        <Box
          component="img"
          sx={{
            ...styles.centerColumnFlex,
            height: "auto",
            maxWidth: "393px",
          }}
          src={Logo}
          alt="Logo"
        />
        <Typography variant="h1" sx={{ ...styles.h1, marginBottom: "34px" }}>
          Welcome to Level Up {name === "" ? "" : `, ${name}`}
        </Typography>
        <Typography
          variant="body1"
          sx={{ ...styles.body, marginBottom: "24px" }}
        >
          Level Up gamifies networking with NFTs and quests, fostering lasting
          relationships beyond events.
        </Typography>
        <SignIn directParams={directParams} verifierMap={verifierMap} />
        <CreateWallet directParams={directParams} verifierMap={verifierMap} />
      </Box>
    </Box>
  );
}
