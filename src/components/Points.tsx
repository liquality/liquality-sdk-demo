import { Box, Typography } from "@mui/material";

export const Points = ({ number = 0, noPoints = false, sx = {} }) => {
  if (noPoints) {
    return (
      <Box
        sx={{
          width: "40px",
          height: "40px",
          backgroundColor: "#fff",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          ...sx,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Alice",
            fontSize: "10px",
            textAlign: "center",
            color: "#5E17EB",
          }}
        >
          {number}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "40px",
        height: "40px",
        backgroundColor: "#fff",
        borderRadius: "20px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        zIndex: 1,
        position: "absolute",
        right: "12px",
        top: "12px",
        ...sx,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Alice",
          fontSize: "10px",
          textAlign: "center",
          color: "#5E17EB",
        }}
      >
        {number} points
      </Typography>
    </Box>
  );
};
