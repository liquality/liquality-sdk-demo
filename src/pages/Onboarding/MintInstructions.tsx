import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { styles } from "../../styles";
import Arrow from "../../assets/Arrow.png";
import Avatars from "../../assets/Avatars.png";
import { ButtonInput } from "../../components/ButtonInput";

export default function MintInstructions({}) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    lens: "",
  });

  const isDisabled = form.name == "" || form.lens == "";

  const handleStart = () => {
    navigate("/profile");
  };
  const handleSkip = () => {
    navigate("/home");
  };
  const handleAvatar = () => {};

  return (
    <Box
      sx={{
        ...styles.skeleton,
        paddingTop: "116px",
        background: "linear-gradient(180deg, #C6B5D0 0%, #29ADCC 100%);",
      }}
    >
      <Navbar />
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Alice",
          fontSize: "45px",
          lineHeight: "51px",
          textAlign: "center",
          marginBottom: "47px",
          marginTop: "auto",
        }}
      >
        Mint Your NFT
      </Typography>
      <Box
        sx={{
          ...styles.centerColumnFlex,
          marginY: "auto",
        }}
      >
        <ButtonInput
          sx={{ marginBottom: "43px" }}
          value={form.name}
          setValue={(value) => {
            setForm((prev) => ({ ...prev, name: value }));
          }}
        >
          NFT Name
        </ButtonInput>
        <ButtonInput
          sx={{ marginBottom: "43px" }}
          value={form.lens}
          setValue={(value) => {
            setForm((prev) => ({ ...prev, lens: value }));
          }}
        >
          NFT Name
        </ButtonInput>
        <Button
          variant="secondary"
          sx={{ marginBottom: "43px" }}
          onClick={handleAvatar}
        >
          Choose Avatar From Our Library
          <Box
            component="img"
            sx={{
              ...styles.centerColumnFlex,
              height: "auto",
              width: "15px",
              ml: "9px",
            }}
            src={Arrow}
            alt="Arrow"
          />
        </Button>
        <Box
          component="img"
          sx={{
            ...styles.centerColumnFlex,
            height: "auto",
            width: "100%",
          }}
          src={Avatars}
          alt="Avatars"
        />
      </Box>

      <Box
        sx={{
          ...styles.centerColumnFlex,
          marginY: "auto",
        }}
      >
        <Button
          sx={{ marginBottom: "13px" }}
          onClick={handleStart}
          disabled={isDisabled}
        >
          MINT NFT
        </Button>
        <Button variant="text" onClick={handleSkip}>
          Skip For Now
        </Button>
      </Box>
    </Box>
  );
}
