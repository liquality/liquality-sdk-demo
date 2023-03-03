import { useState } from "react";
import { Box } from "@mui/material";

import Navbar from "../../components/Navbar";
import BottomNav from "../../components/BottomNav";
import { QuestCard } from "../../components/QuestCard";
import { ButtonInput } from "../../components/ButtonInput";

import Search from "../../assets/search.png";
import { styles } from "../../styles";

const quest = {
  title: "Quest: Networking 101",
  subtitle:
    "This quest is to introduce you to entry level networking with like-minded individuals",
  points: "60",
};
export default function Quests() {
  const [search, setSearch] = useState("");

  return (
    <Box
      sx={{
        background: "rgba(198, 181, 208, 0.5)",
      }}
    >
      <Box
        sx={{
          ...styles.skeleton,
          paddingTop: "116px",
          background: "#C6B5D0",
        }}
      >
        <Navbar fullNav={true} />
        <ButtonInput
          type="secondary"
          value={search}
          setValue={setSearch}
          img={Search}
          sx={{
            maxWidth: "361px",
            marginBottom: "36px",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#88679F",
            },
          }}
        >
          Search
        </ButtonInput>
        <QuestCard quest={quest} />
        <BottomNav />
      </Box>
    </Box>
  );
}
