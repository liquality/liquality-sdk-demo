import { Box, Typography } from "@mui/material";

import Avatars from "../assets/Avatars.png";
import { Reactions } from "./Reactions/Reactions";

import { styles } from "../styles";

export const Card = ({ card, position, sx = {} }) => {
  const indigoRadial =
    "radial-gradient(50% 50% at 50% 50%, #29ADCC 0%, #5E17EB 100%)";
  const purpleRadial =
    "radial-gradient(50% 50% at 50% 50%, #5E17EB 0%, #88679F 100%)";
  const blueRadial =
    "radial-gradient(50% 50% at 50% 50%, rgba(204, 213, 216, 0.2) 0%, #29ADCC 100%)";

  const background =
    position % 3 === 0
      ? indigoRadial
      : position % 3 === 1
      ? purpleRadial
      : blueRadial;

  return (
    <Box
      sx={{
        height: "173px",
        maxWidth: "333px",
        background: background,
        boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px",
        marginX: "28px",
        ...styles.centerColumnFlex,
        ...sx,
      }}
    >
      <Typography
        component="h2"
        sx={{
          marginTop: "26px",
          ...styles.body,
        }}
      >
        {card.name} Completed {card.quests} Quests
      </Typography>
      <Box
        component="img"
        sx={{
          ...styles.centerColumnFlex,
          height: "auto",
          maxWidth: "258px",
        }}
        src={Avatars}
        alt="Avatars"
      />
      <Reactions sx={{}} card={card} position={position} />
    </Box>
  );
};
