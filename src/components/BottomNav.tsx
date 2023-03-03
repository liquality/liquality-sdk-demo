import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { IconButton } from "../components/IconButton";

import Explore from "../assets/explore.svg";
import Home from "../assets/home.svg";
import Lead from "../assets/lead.svg";
import Quests from "../assets/quests.svg";
import ExploreSelected from "../assets/exploreSelected.svg";
import HomeSelected from "../assets/homeSelected.svg";
import LeadSelected from "../assets/leadSelected.svg";
import QuestsSelected from "../assets/questsSelected.png";

export default function BottomNav({ color = "transparent" }) {
  const location = useLocation();
  const navigate = useNavigate();
  const page = location.pathname;

  const handleNavigation = (links) => {
    navigate(links);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginX: "20px",
        width: "100%",
        marginTop: "auto",
        maxWidth: "500px",
        position: "fixed",
        bottom: "15px",
        background: color,
        paddingX: "14px",
      }}
    >
      <IconButton
        onClick={() => handleNavigation("/home")}
        icon={page === "/home" ? HomeSelected : Home}
        selected={page === "/home"}
      >
        Home
      </IconButton>
      <IconButton
        onClick={() => handleNavigation("/quests")}
        icon={page === "/quests" ? QuestsSelected : Quests}
        selected={page === "/quests"}
      >
        Quests
      </IconButton>
      <IconButton
        onClick={() => handleNavigation("/lead")}
        icon={page === "/lead" ? LeadSelected : Lead}
        selected={page === "/lead"}
      >
        Lead
      </IconButton>
      <IconButton
        onClick={() => handleNavigation("/explore")}
        icon={page === "/explore" ? ExploreSelected : Explore}
        selected={page === "/explore"}
      >
        Explore
      </IconButton>
    </Box>
  );
}
