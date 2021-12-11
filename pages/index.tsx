import * as React from "react";
import { styled, keyframes } from "@mui/material/styles";
import { Container, Box } from "@mui/material";

import Image from "next/image";
import mockup from "../public/cadet.jpg";

import MintSupply from "../src/MintSupply";
import MultiButton from "../src/MultiButton";

import Header from "../src/Header";

const backgroundAnim = keyframes`
  100% {
    background-position: 310px 193px;
  }
`;

const Index = styled((props) => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh" }}
      {...props}
    >
      <Header
        socials={{
          discord: "https://discord.gg/kANVN9cUCZ",
          twitter: "https://twitter.com/crypto_cadets",
        }}
      />
      <Box sx={{ mb: 5 }} className="mystery">
        <Image src={mockup} layout="responsive" objectFit="contain" />
      </Box>
      <MintSupply sx={{ mb: 5 }} />
      <MultiButton>Connect Wallet</MultiButton>
    </Container>
  );
})`
  background-image: url(ar-bg.png);
  animation: ${backgroundAnim} 8s linear;
  animation-iteration-count: infinite;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 20vh;

  button {
    height: fit-content;
  }

  .mystery {
    width: clamp(150px, 80%, 300px);

    border-radius: 10px;
    
    border: 8px solid #999999;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 25%);
    img {
    }
  }

  .mint-supply {
    font-size: 1.6em;
  }
`;

export default Index;
