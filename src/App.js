import { DataContext } from "./DataContext";
import { useEffect, useState } from "react";

import Welcome from "./pages/Onboarding/Welcome";
import GetStarted from "./pages/Onboarding/GetStarted";
import MintInstructions from "./pages/Onboarding/MintInstructions";
import Profile from "./pages/Onboarding/Profile";
import Home from "./pages/Main/Home";

import { Route, Routes } from "react-router-dom";

import { setupSDK } from "./utils";
import Alice from "./assets/Fonts/Alice-Regular.ttf";
import CssBaseline from "@mui/material/CssBaseline";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Auth from "./pages/Auth";

const theme = createTheme({
  typography: {
    fontFamily: "Alice",
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "Alice",
          src: `url(${Alice}) format("truetype")`,
        },
        body: {
          color: "white",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 600,
      lg: 900,
      xl: 1200,
    },
  },
  shadows: ["none"],
  overrides: {
    MuiInputLabel: {
      outline: "none",
      boxShadow: "none",
    },
  },
});

export default function App() {
  setupSDK();

  const [loginResponse, setLoginResponse] = useState(
    JSON.parse(localStorage.getItem("loginResponse")) || {}
  );

  useEffect(() => {
    localStorage.setItem("loginResponse", JSON.stringify(loginResponse));
  }, [loginResponse]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DataContext.Provider
        value={{
          loginResponse: loginResponse,
          setLoginResponse: setLoginResponse,
        }}
      >
        <body className="stretched device-xl bg-white no-transition">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/start" element={<GetStarted />} />
            <Route path="/mint" element={<MintInstructions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </body>
      </DataContext.Provider>
    </ThemeProvider>
  );
}
