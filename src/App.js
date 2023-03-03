import { DataContext, CardsContext } from "./Context";
import { useEffect, useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Welcome from "./pages/Onboarding/Welcome";
import GetStarted from "./pages/Onboarding/GetStarted";
import MintInstructions from "./pages/Onboarding/MintInstructions";
import Profile from "./pages/Onboarding/Profile";
import Home from "./pages/Main/Home";
import Explore from "./pages/Main/Explore";
import Quests from "./pages/Main/Quests";
import Lead from "./pages/Main/Lead";
import Auth from "./pages/Auth";

import { setupSDK } from "./utils";
import Alice from "./assets/Fonts/Alice-Regular.ttf";
import CssBaseline from "@mui/material/CssBaseline";

import { createTheme, ThemeProvider } from "@mui/material/styles";

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
const initialCardsState = [
  {
    name: "@IssaAmer ",
    reactions: ["smile", "smile", "heart", "smile", "heart", "heart"],
    quests: 2,
    count: 6,
  },
  {
    name: "@Doniawamer",
    reactions: ["smile", "heart"],
    quests: 2,
    count: 2,
  },
];

export default function App() {
  setupSDK();

  const [loginResponse, setLoginResponse] = useState(
    JSON.parse(localStorage.getItem("loginResponse")) || {}
  );
  const name =
    loginResponse?.loginResponse?.userInfo?.name?.split(" ")[0] || "";
  const [cards, setCards] = useState([
    {
      name: `@${name}`,
      reactions: ["smile", "heart", "smile", "heart", "heart"],
      quests: 3,
      count: 5,
    },
    ...initialCardsState,
  ]);

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
        <CardsContext.Provider
          value={{
            cards: cards,
            setCards: setCards,
          }}
        >
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/start" element={<GetStarted />} />
            <Route path="/mint" element={<MintInstructions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/lead" element={<Lead />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </CardsContext.Provider>
      </DataContext.Provider>
    </ThemeProvider>
  );
}
