import { styled } from "@mui/material/styles";
import { Container, Box } from "@mui/material";

import WalletStatus from "./WalletStatus";
import SocialsMenu from "./SocialsMenu";

import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

const Logo = styled((props) => {
  return (
    <Box {...props}>
      <Image src={logo} layout="responsive" objectFit="contain" />
    </Box>
  );
})``;

const Header = styled((props) => {
  return (
    <Container maxWidth={false} {...props}>
      <Link href="https://cryptocadets.io/">
        <Logo className="logo" />
      </Link>
      <Box className="header-right-container">
        <WalletStatus className="wallet-status" />
        <SocialsMenu
          socials={{
            discord: props.socials.discord,
            twitter: props.socials.twitter,
          }}
        />
      </Box>
    </Container>
  );
})`
  position: absolute;
  height: 80px;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);

  display: flex;
  justify-content: space-between;
  align-items: center;

  .wallet-status {
    font-size: 1.2em;
  }

  .logo {
    width: 250px;
    cursor: pointer;
  }

  .header-right-container {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
  }

  @media screen and (max-width: 680px) {
    .wallet-status {
      display: none;
    }
  }
`;

export default Header;
