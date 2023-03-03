import { Button as MUIButton } from "@mui/material";
import { Box } from "@mui/system";

import { styles } from "../styles";

// primary, secondary, text
export const IconButton = ({
  children,
  variant = "primary",
  onClick,
  sx = {},
  disabled = false,
  selected = false,
  icon,
}) => {
  const text = children.toString();
  const selectedStyles = selected
    ? {
        backgroundColor: "#5E17EB",
        color: "#fff",
      }
    : {
        backgroundColor: "#fff",
        color: "#5E17EB",
      };

  return (
    <MUIButton
      variant="contained"
      disabled={disabled}
      sx={{
        fontFamily: "Alice",
        textAlign: "center",
        flexDirection: "column",
        borderRadius: "20px",
        fontSize: "10px",
        height: "62px",
        width: "62px",
        "&:hover": { backgroundColor: "#C6B5D0", color: "#88679F" },
        ...selectedStyles,
        ...sx,
      }}
      onClick={onClick}
    >
      <Box
        component="img"
        sx={{
          ...styles.centerColumnFlex,
          height: "auto",
          maxWidth: "393px",
          color: "red",
        }}
        src={icon}
        alt="Logo"
      />
      {text}
    </MUIButton>
  );
};
