import { Box } from "@mui/material";

import { styles } from "../../styles";
import { Reaction } from "./Reaction";
import { ReactionMenu } from "./ReactionMenu";

export const Reactions = ({ sx = {}, card, position }) => {
  return (
    <Box
      sx={{
        ...styles.centerRowFlex,
        justifyContent: "space-between",
        width: "100%",
        padding: "0 5px",
        marginTop: "auto",
        marginBottom: "12px",
        ...sx,
      }}
    >
      <ReactionMenu position={position} />
      <Box sx={{ display: "flex", flexDirection: "row", marginRight: "5px" }}>
        {card.reactions.map(
          (reaction, i) =>
            i <= 3 && (
              <Reaction
                color="blue"
                icon={reaction}
                key={`reaction-${card.name}${i}`}
                sx={{ marginRight: "-7px" }}
              />
            )
        )}
        {card.count > 3 && (
          <Reaction
            color="blue"
            number={card.count - 3}
            sx={{ marginRight: "-7px" }}
          />
        )}
      </Box>
    </Box>
  );
};
