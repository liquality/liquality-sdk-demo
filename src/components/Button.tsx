import React from "react";
import { Button as MUIButton } from "@mui/material";

// primary, secondary, text
export const Button = ({
  children,
  variant = "primary",
  onClick,
  sx = {},
  disabled = false,
}) => {
  const buttonStyles =
    variant === "primary"
      ? {
          backgroundColor: "#5E17EB",
          color: "white",
          height: "61px",
          fontSize: ["20px", "25px"],
          lineHeight: "29px",
          maxWidth: "320px",
          "&:hover": {
            backgroundColor: "#C6B5D0",
            color: "#88679F",
          },
          "&:disabled": {
            backgroundColor: "#C6B5D0",
            color: "white",
            opacity: 0.8,
          },
        }
      : variant === "secondary"
      ? {
          height: "44px",
          backgroundColor: "#fff",
          color: "#5E17EB",
          fontSize: ["16px", "20px"],
          lineHeight: "22px",
          maxWidth: "349px",
          "&:hover": {
            backgroundColor: "#C6B5D0",
            color: "#88679F",
          },
        }
      : {};

  if (variant === "text") {
    return (
      <MUIButton
        variant="text"
        disabled={disabled}
        sx={{
          fontFamily: "Alice",
          textAlign: "center",
          width: "100%",
          color: "#fff",
          fontSize: ["16px", "20px"],
          lineHeight: "23px",
          maxWidth: "320px",
          borderRadius: "16px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#C6B5D0",
            color: "#88679F",
          },
          ...sx,
        }}
        onClick={onClick}
      >
        {children}
      </MUIButton>
    );
  }

  return (
    <MUIButton
      variant="contained"
      disabled={disabled}
      sx={{
        fontFamily: "Alice",
        textAlign: "center",
        width: "100%",
        borderRadius: "16px",
        boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
        ...buttonStyles,
        ...sx,
      }}
      onClick={onClick}
    >
      {children}
    </MUIButton>
  );
};
