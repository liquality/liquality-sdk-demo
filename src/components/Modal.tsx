import React from "react";
import { Box, Modal as MUIModal, Typography } from "@mui/material";

// primary, secondary, text
export const Modal = ({ sx = {}, open, handleClose, title, desc }) => {
  return (
    <MUIModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        ...sx,
      }}
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "#fff",
          border: "2px solid #5E17EB",
          boxShadow: 24,
          p: 4,
          color: "#5E17EB",
          // marginX: "14px",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {desc}
        </Typography>
      </Box>
    </MUIModal>
  );
};
