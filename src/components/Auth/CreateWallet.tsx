import * as React from "react";
import { useState, useEffect } from "react";
import { AuthService, tryRegisterSW } from "@liquality/wallet-sdk";
import { DataContext } from "../../Context";
import { Box, CircularProgress } from "@mui/material";
import { ButtonInput } from "../ButtonInput";
import { Button } from "../Button";
import Liq from "../../assets/liq.png";
import { useNavigate } from "react-router-dom";

type Props = {
  directParams: any;
  verifierMap: Record<string, any>;
};

export const CreateWallet: React.FC<Props> = (props) => {
  const { directParams, verifierMap } = props;
  const navigate = useNavigate();
  const [tKey, setTKey] = useState<any>({});
  //const [loginResponse, setLoginResponse] = useState<any>({});
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [passwordResponse, setPasswordResponse] = useState<string>("");
  const [newPasswordShare, setNewPasswordShare] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { loginResponse, setLoginResponse } = React.useContext(DataContext);
  const name =
    loginResponse?.loginResponse?.userInfo?.name?.split(" ")[0] || "";

  useEffect(() => {
    const init = async () => {
      const registration = tryRegisterSW("/serviceworker/sw.js");
      const tKeyResponse = await AuthService.init(directParams);
      setTKey(tKeyResponse);
    };

    init();
  }, [loginResponse, passwordResponse]);

  const createNewWallet = async () => {
    setIsLoading(true);
    try {
      const response = await AuthService.createWallet(tKey, verifierMap);
      setLoginResponse(response);
      setIsLoading(false);
    } catch (error) {
      console.log("error ", error);
      setIsLoading(false);
    }
  };

  const generatePassword = async (password: string) => {
    setIsLoading(true);

    try {
      let response = await AuthService.generateNewShareWithPassword(
        loginResponse.tKey,
        password
      );

      setNewPasswordShare(response.result);
      response.msg.startsWith("Error")
        ? setErrorMsg(response.msg)
        : setPasswordResponse(response.msg);
      setIsLoading(false);
      navigate("/start");
    } catch (error) {
      console.log("error ", error);
      setIsLoading(false);
      navigate("/start");
    }
  };

  console.log(loginResponse, "LOGINRESPONSE");

  return (
    <>
      {name === "" ? (
        <Button
          sx={{
            backgroundColor: "#fff",
            color: "#5E17EB",
            marginBottom: "16px",
            "&:hover": {
              backgroundColor: "#C6B5D0",
              color: "#5E17EB",
            },
          }}
          onClick={createNewWallet}
        >
          {isLoading ? (
            <CircularProgress
              sx={{
                height: "61px",
              }}
            />
          ) : (
            <>
              {" "}
              <Box
                component="img"
                sx={{
                  // ...styles.centerColumnFlex,
                  height: "auto",
                  width: "64px",
                }}
                src={Liq}
                alt="Liquality logo"
              />{" "}
              CREATE AN ACCOUNT
            </>
          )}
        </Button>
      ) : (
        <>
          <ButtonInput
            sx={{ marginBottom: "16px", maxWidth: "320px" }}
            value={password}
            type="password"
            setValue={(value) => {
              setPassword(value);
            }}
          >
            Password
          </ButtonInput>
          <Button
            sx={{
              backgroundColor: "#fff",
              color: "#5E17EB",
              marginBottom: "25px",
              "&:hover": {
                backgroundColor: "#C6B5D0",
                color: "#5E17EB",
              },
            }}
            onClick={generatePassword}
          >
            {isLoading ? (
              <CircularProgress
                sx={{
                  height: "61px",
                }}
              />
            ) : (
              "CREATE A PASSWORD"
            )}
          </Button>
        </>
      )}
    </>
  );
};
