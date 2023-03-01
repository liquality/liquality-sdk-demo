import React, { useState } from "react";
import {
  Button as MUIButton,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  styled,
  TextField,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";

export const ButtonInput = ({ children, value, setValue, sx = {} }) => {
  const text = children.toString();

  return (
    <Input
      placeholder={text}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      sx={{
        fontFamily: "Alice",
        marginX: "auto",
        width: "100%",
        fontSize: ["16px", "20px"],
        lineHeight: "23px",
        maxWidth: "349px",
        borderRadius: "16px",
        textTransform: "none",
        height: "44px",
        backgroundColor: "#fff",
        color: "#88679F",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "&::before": {
          content: "none",
        },
        "&::after": {
          content: "none",
        },
        "&:hover": {
          backgroundColor: "#C6B5D0",
          color: "#88679F",
        },
        "& input": {
          boxShadow: "none",
          textAlign: "center",
          "&:focus": {
            boxShadow: "none",
          },
        },
        ...sx,
      }}
    />
  );
};
// <TextField
//   value={value}
//   onChange={(e) => setValue(e.target.value)}
//   variant="outlined"
//   label="Default Label"
//   margin="normal"
//   sx={{
//     fontFamily: "Alice",
//     // textAlign: "center",
//     width: "100%",
//     fontSize: ["16px", "20px"],
//     // lineHeight: "23px",
//     // maxWidth: "349px",
//     // borderRadius: "16px",
//     // textTransform: "none",
//     // // height: "44px",
//     backgroundColor: "#fff",
//     color: "#5E17EB",
//     boxShadow: "transparent !important",

//     // "&:focus": {
//     //   boxShadow: "red !important",
//     // },
//     ...sx,
//   }}
// />
