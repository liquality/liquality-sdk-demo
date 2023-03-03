import { InputBase } from "@mui/material";

export const ButtonInput = ({
  type = "text",
  children,
  value,
  setValue,
  sx = {},
  img = null,
}) => {
  const text = children.toString();

  return (
    <InputBase
      type={type}
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
