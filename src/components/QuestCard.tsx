import { Box, Typography } from "@mui/material";

import { styles } from "../styles";
import Clouds from "../assets/clouds.png";

import { Button } from "./Button";
import { Points } from "./Points";

export const QuestCard = ({ quest, sx = {} }) => {
  return (
    <Box
      sx={{
        height: "173px",
        maxWidth: "361px",
        backgroundImage: `url(${Clouds})`,
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
        marginX: "28px",
        ...styles.centerColumnFlex,
        ...sx,
      }}
    >
      <Typography
        component="h2"
        sx={{
          ...styles.body,
          background: "rgba(0, 0, 0, 0.16)",
          paddingTop: "10px",
          width: "100%",
          fontSize: "15px",
          lineHeight: "17px",
          height: "36px",
          marginBottom: "auto",
          position: "relative",
        }}
      >
        {quest.title} <Points number={60} />
      </Typography>
      <Typography
        component="p"
        sx={{
          ...styles.body,
          fontSize: "15px",
          lineHeight: "17px",
          color: "#4F0484",
          textAlign: "center",
          marginBottom: "21px",
        }}
      >
        {quest.subtitle}
      </Typography>
      <Button
        onClick={() => {}}
        sx={{
          backgroundColor: "#4F0484",
          maxWidth: "130px",
          height: "25px",
          fontSize: "10px",
          marginBottom: "auto",
        }}
      >
        Start Quest
      </Button>
    </Box>
  );
};
