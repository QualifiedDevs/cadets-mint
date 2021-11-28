import * as React from "react";
import { styled, keyframes } from "@mui/material/styles";
import { Container, Box } from "@mui/material";

import Image from "next/image";
import mockup from "../public/cadet.jpg"

import MintButton from "../src/MintButton";
import MintSupply from "../src/MintSupply"

const backgroundAnim = keyframes`
  100% {
    background-position: 310px 193px;
  }
`

const Index = styled((props) => {
  return (
    <Container disableGutters maxWidth={false} sx={{height: "100vh"}} {...props}>
      <Box sx={{mb: 5}}>
        <Image src={mockup} width="300" height="300" layout="fixed" />
      </Box>
      <MintSupply sx={{mb: 5}}/>
      <MintButton variant="contained" sx={{width: "fit-content"}} />
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

  img {
    border-radius: 10px;
  }

  .mint-supply {
    font-size: 1.6em;
  }
`;

export default Index;
