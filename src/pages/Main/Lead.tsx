import { useContext, useState } from "react";
import {
  Box,
  TableCell,
  TableContainer,
  TableBody,
  Table,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { styles } from "../../styles";
import { CardsContext, DataContext } from "../../Context";

import Navbar from "../../components/Navbar";
import BottomNav from "../../components/BottomNav";
import { QuestCard } from "../../components/QuestCard";
import { ButtonInput } from "../../components/ButtonInput";
import Search from "../../assets/search.png";
import { Points } from "../../components/Points";

const quest = [
  {
    name: "sereneissa",
    points: 500,
  },
  {
    name: "doniawamer",
    points: 300,
  },
  {
    name: "sheFiMember",
    points: 240,
  },
  {
    name: "serenityIssa",
    points: 150,
  },
  {
    name: "herDAOMember",
    points: 100,
  },
  {
    name: "LiquidityLemon",
    points: 30,
  },
  {
    name: "MINAPROTOCOL",
    points: 10,
  },
];

export default function Lead() {
  const [search, setSearch] = useState("");

  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(198, 181, 208, 0.8) 0%, rgba(41, 173, 204, 0.8) 55.73%, rgba(79, 4, 132, 0.8) 100%)",
      }}
    >
      <Box
        sx={{
          ...styles.skeleton,
          paddingTop: "116px",
          background:
            "linear-gradient(180deg, #C6B5D0 0%, #29ADCC 55.73%, #4F0484 100%)",
          maxWidth: "768px",
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

        <TableContainer
          sx={{
            width: "100%",
            height: "70%",
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.28) 0%, #88679F 100%)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(2px)",
            maxWidth: "500px",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "none",
                    paddingY: 1,
                    fontWeight: "600",
                    pb: 1,
                  }}
                >
                  RANK
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "none",
                    paddingY: 1,
                    fontWeight: "600",
                    pb: 1,
                  }}
                >
                  USERNAME
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "none",
                    paddingY: 1,
                    fontWeight: "600",
                    pb: 1,
                  }}
                >
                  POINTS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {quest.map((row, i) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    align="center"
                    sx={{ borderBottom: "none", paddingY: 1 }}
                  >
                    <Points sx={{ fontSize: "15px" }} number={i} noPoints />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderBottom: "none", paddingY: 1 }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderBottom: "none", paddingY: 1 }}
                  >
                    {row.points}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <BottomNav />
      </Box>
    </Box>
  );
}
