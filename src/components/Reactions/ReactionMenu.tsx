import { useContext, useState } from "react";
import { Box, Fade } from "@mui/material";

import { Reaction } from "./Reaction";
import { CardsContext } from "../../Context";

export const ReactionMenu = ({ position, sx = {} }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { cards, setCards } = useContext(CardsContext);

  const handleReaction = (reaction) => {
    const tempCards = [...cards];
    tempCards[position].count = tempCards[position].count + 1;
    if (reaction === "smile") {
      tempCards[position].reactions = [
        ...tempCards[position].reactions,
        "smile",
      ];

      setCards(tempCards);
    } else if (reaction === "heart") {
      tempCards[position].reactions = [
        ...tempCards[position].reactions,
        "heart",
      ];
      setCards(tempCards);
    }
    setOpenMenu((prev) => !prev);
  };
  return (
    <>
      {openMenu ? (
        <Fade in={openMenu}>
          <Box
            sx={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #C6B5D0 100%)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "29px",
              width: "89px",
              height: "71px",
              marginLeft: "-12px",
              marginBottom: "-45px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              zIndex: 1,
              ...sx,
            }}
          >
            <Reaction
              color="radial"
              icon="plus"
              onClick={() => setOpenMenu((prev) => !prev)}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <Reaction
                color="blue"
                icon="smile"
                onClick={() => handleReaction("smile")}
              />
              <Reaction
                color="blue"
                icon="heart"
                onClick={() => handleReaction("heart")}
              />
            </Box>
          </Box>
        </Fade>
      ) : (
        <Reaction
          color="purple"
          icon="plus"
          onClick={() => setOpenMenu((prev) => !prev)}
        />
      )}
    </>
  );
};
