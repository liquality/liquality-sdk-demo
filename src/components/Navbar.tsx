import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

import Logo from "../assets/logo.png";
import Profile from "../assets/profile.png";
import Pin from "../assets/pin.png";

import { styles } from "../styles";

const Navbar = ({ fullNav = false }) => {
  const location = useLocation();

  const page = location.pathname[1]
    ? location.pathname[1].toUpperCase() +
      location.pathname.substring(2, location.pathname.length)
    : "Home";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 14px",
        position: "fixed",
        top: 0,
        width: "100%",
        maxWidth: "768px",
      }}
    >
      <Box sx={{ width: "70px", height: "auto" }}>
        <img src={Logo} alt="settings" />
      </Box>
      {fullNav && (
        <>
          <Typography
            variant="h1"
            sx={{
              ...styles.bodyBigger,
            }}
          >
            {page}

            {page === "Explore" && (
              <Typography sx={{ display: "flex", alignItems: "center", pt: 1 }}>
                <Box
                  component="img"
                  src={Pin}
                  sx={{ height: "16px", width: "16px" }}
                ></Box>
                ETH Denver
              </Typography>
            )}
          </Typography>
          <Box sx={{ width: "46px", height: "auto", ml: "24px", mr: "10px" }}>
            <img src={Profile} alt="Profile" />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Navbar;
