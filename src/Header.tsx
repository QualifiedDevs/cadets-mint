import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

import WalletStatus from "./WalletStatus";
import SocialsMenu from "./SocialsMenu";

const Header = styled((props) => {
  return (
    <Container maxWidth={false} {...props}>
      <WalletStatus />
      <SocialsMenu 
        socials={{
          discord: props.socials.discord,
          twitter: props.socials.twitter,
        }}
      />
    </Container>
  );
})`
  position: absolute;
  height: 80px;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .wallet-status {
    font-size: 1.2em;
  }

  &>* {
    margin: 0 1.5rem;
    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
    }
  }
`;

export default Header;
