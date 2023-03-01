import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import { styles } from "../../styles";

export default function GetStarted({}) {
  const navigate = useNavigate();

  const [nft, setNft] = useState(false);
  const [liquidity, setLiquidity] = useState(false);

  const handleStart = () => {
    navigate("/mint");
  };
  const handleSkip = () => {
    navigate("/home");
  };

  const toggleNFTModal = () => setNft((prevState) => !prevState);
  const toggleLiquidityModal = () => setLiquidity((prevState) => !prevState);
  return (
    <Box
      sx={{
        ...styles.skeleton,
        paddingTop: "116px",
        background: "linear-gradient(180deg, #C6B5D0 0%, #29ADCC 100%);",
      }}
    >
      <Navbar />
      <Typography variant="h1" sx={{ ...styles.h2, marginBottom: "47px" }}>
        Welcome Friend!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          ...styles.bodyBigger,
          marginBottom: "72px",
        }}
      >
        In order to view your quests, Mint your first NFT. Don’t worry, we will
        walk you through the steps!
      </Typography>
      <Button sx={{ marginBottom: "13px" }} onClick={handleStart}>
        Get Started
      </Button>
      <Button variant="text" onClick={handleSkip}>
        Skip For Now
      </Button>
      <Box
        sx={{
          marginY: "auto",
          ...styles.centerColumnFlex,
        }}
      >
        <Button
          variant="secondary"
          sx={{ marginBottom: "15px", fontSize: "15px" }}
          onClick={toggleNFTModal}
        >
          Learn More about NFTs
        </Button>
        <Button
          variant="secondary"
          sx={{ marginBottom: "15px", fontSize: "15px" }}
          onClick={toggleLiquidityModal}
        >
          Learn More about Liquality
        </Button>
      </Box>
      <Modal
        open={nft}
        handleClose={toggleNFTModal}
        title="What are NFTs?"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, sapien et posuere facilisis, sem nisl vehicula mauris, quis porta quam lorem a nisl. Nulla facilisi."
      />
      <Modal
        open={liquidity}
        handleClose={toggleLiquidityModal}
        title="What is Liquidity?"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, sapien et posuere facilisis, sem nisl vehicula mauris, quis porta quam lorem a nisl. Nulla facilisi."
      />
    </Box>
  );
}
