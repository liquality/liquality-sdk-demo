import * as React from "react";
import { useState, useEffect } from "react";
import { DisplayWalletValues } from "./DisplayWalletValues";
import { AuthService, tryRegisterSW } from "@liquality/wallet-sdk";
import { DataContext } from "../../Context";
import { Button } from "../Button";
import { Box } from "@mui/material";
import Liq from "../../assets/liq.png";

type Props = {
  directParams: any;
  verifierMap: Record<string, any>;
};

export const SignIn: React.FC<Props> = (props) => {
  const { directParams, verifierMap } = props;
  const [tKey, setTKey] = useState<any>({});
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { loginResponse, setLoginResponse } = React.useContext(DataContext);
  const name =
    loginResponse?.loginResponse?.userInfo?.name?.split(" ")[0] || "";

  const logInUsingGoogleSSO = async () => {
    setIsLoading(true);
    try {
      const response = await AuthService.loginUsingSSO(tKey, props.verifierMap);
      setLoginResponse(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  //Init tkey instance
  React.useEffect(() => {
    const init = async () => {
      const registration = tryRegisterSW("/serviceworker/sw.js");
      const tKeyResponse = await AuthService.init(props.directParams);
      setTKey(tKeyResponse);
    };
    init();
  }, [loginResponse]);

  return (
    <>
      {name === "" ? (
        <Button
          sx={{
            mb: "25px",
          }}
          onClick={logInUsingGoogleSSO}
        >
          <Box
            component="img"
            sx={{
              // ...styles.centerColumnFlex,
              height: "auto",
              width: "64px",
            }}
            src={Liq}
            alt="Liquality logo"
          />
          SIGN IN
        </Button>
      ) : (
        <></>
      )}
    </>
  );
};
