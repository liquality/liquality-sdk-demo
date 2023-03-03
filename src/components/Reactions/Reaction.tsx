import { Box, Typography } from "@mui/material";

import heart from "../../assets/heart.png";
import plus from "../../assets/plus.png";
import smile from "../../assets/smile.png";

export const Reaction = ({
  color,
  icon = null,
  number = 0,
  sx = {},
  onClick = undefined,
}) => {
  const iconSrc = icon === "heart" ? heart : icon === "smile" ? smile : plus;
  const iconAlt =
    icon === "heart" ? "heart" : icon === "smile" ? "smile" : "Add a reaction";
  const iconColor =
    color === "blue"
      ? "#29ADCC"
      : color === "radial"
      ? "radial-gradient(50% 50% at 50% 50%, #C6B5D0 39.89%, #5E17EB 100%)"
      : "#C6B5D0";
  if (onClick) {
    return (
      <Box
        component="button"
        onClick={onClick}
        sx={{
          width: "28px",
          height: "28px",
          background: iconColor,
          borderRadius: "14px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          ...sx,
        }}
      >
        {number === 0 ? (
          <Box
            component="img"
            alt={iconAlt}
            src={iconSrc}
            sx={{ width: "22px" }}
          />
        ) : (
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Alice",
              fontSize: "14px",
              textAlign: "center",
              color: "#000",
            }}
          >
            +{number}
          </Typography>
        )}
      </Box>
    );
  }
  return (
    <Box
      sx={{
        width: "28px",
        height: "28px",
        background: iconColor,
        borderRadius: "14px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        ...sx,
      }}
    >
      {number === 0 ? (
        <Box
          component="img"
          alt={iconAlt}
          src={iconSrc}
          sx={{ width: "22px" }}
        />
      ) : (
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Alice",
            fontSize: "14px",
            textAlign: "center",
            color: "#000",
          }}
        >
          +{number}
        </Typography>
      )}
    </Box>
  );
};
