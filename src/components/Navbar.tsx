import React from "react";
import Box from "@mui/material/Box";
import Logo from "../assets/logo.png";
import Profile from "../assets/profile.png";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { styles } from "../styles";

const Navbar = ({ fullNav = false }) => {
  const location = useLocation();
  console.log(location.pathname);
  const page =
    location.pathname[1].toUpperCase() +
    location.pathname.substring(2, location.pathname.length);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "18px 14px",
        position: "fixed",
        top: 0,
        width: "100%",
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
          </Typography>
          <Box sx={{ width: "46px", height: "auto", ml: "24px" }}>
            <img src={Profile} alt="Profile" />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Navbar;
