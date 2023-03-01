import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { styles } from "../../styles";
import Arrow from "../../assets/Arrow.png";
import Avatars from "../../assets/Avatars.png";
import { ButtonInput } from "../../components/ButtonInput";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        ...styles.skeleton,
        paddingTop: "116px",
        background: "#C6B5D0",
      }}
    >
      <Navbar fullNav={true} />
    </Box>
  );
}
