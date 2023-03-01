import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../assets/logoMax.png";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { styles } from "../../styles";

export default function Welcome({}) {
  const navigate = useNavigate();
  const handleConnect = () => {
    navigate("/start");
  };
  return (
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
        Welcome to Level Up
      </Typography>
      <Typography variant="body1" sx={{ ...styles.body, marginBottom: "24px" }}>
        Level Up gamifies networking with NFTs and quests, fostering lasting
        relationships beyond events.
      </Typography>
      <Button
        sx={{
          mb: "25px",
        }}
        onClick={handleConnect}
      >
        SIGN IN
      </Button>
      <Button
        sx={{
          backgroundColor: "#fff",
          color: "#5E17EB",
          "&:hover": {
            backgroundColor: "#C6B5D0",
            color: "#5E17EB",
          },
        }}
        onClick={handleConnect}
      >
        CREATE AN ACCOUNT
      </Button>
    </Box>
  );
}
