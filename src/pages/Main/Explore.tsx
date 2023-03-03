import { useContext } from "react";
import { Box } from "@mui/material";

import { styles } from "../../styles";
import { CardsContext } from "../../Context";

import { Card } from "../../components/Card";
import Navbar from "../../components/Navbar";
import BottomNav from "../../components/BottomNav";

export default function Explore() {
  const { cards } = useContext(CardsContext);

  return (
    <Box
      sx={{
        background: "rgba(198, 181, 208, 0.5)",
      }}
    >
      <Box
        sx={{
          ...styles.skeleton,
          justifyContent: "flex-start",
          paddingTop: "116px",
          background: "#C6B5D0",
        }}
      >
        <Navbar fullNav={true} color="#C6B5D0" />
        {cards.map((card, index) => (
          <Card
            key={`card-${index}`}
            card={card}
            position={index}
            sx={{ marginBottom: "11px" }}
          />
        ))}
        <BottomNav color="#C6B5D0" />
      </Box>
    </Box>
  );
}
