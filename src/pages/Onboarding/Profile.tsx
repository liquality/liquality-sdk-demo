import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { styles } from "../../styles";

import { ButtonInput } from "../../components/ButtonInput";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/Button";

export default function Profile() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    occupation: "",
    location: "",
  });

  const isDisabled =
    form.name === "" || form.occupation === "" || form.location === "";

  const handleStart = () => {
    navigate("/home");
  };
  const handleSkip = () => {
    navigate("/home");
  };

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
          Set up your Profile
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
            Username
          </ButtonInput>
          <ButtonInput
            sx={{ marginBottom: "43px" }}
            value={form.occupation}
            setValue={(value) => {
              setForm((prev) => ({ ...prev, occupation: value }));
            }}
          >
            Occupation
          </ButtonInput>
          <ButtonInput
            sx={{ marginBottom: "43px" }}
            value={form.location}
            setValue={(value) => {
              setForm((prev) => ({ ...prev, location: value }));
            }}
          >
            Location (Optional)
          </ButtonInput>
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
            CREATE PROFILE
          </Button>
          <Button variant="text" onClick={handleSkip}>
            Skip For Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
