import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const WalletStatus = styled((props) => {
  return (
    <Box {...props} className={`${props.className} wallet-status`}>
      <div className="icon">
        <div className="icon-color" />
      </div>
      <Typography>Wallet: DyNo...wgir</Typography>
    </Box>
  );
})`
  display: flex;
  align-items: center;
  
  * {
    font-size: inherit;
  }

  .icon {
    width: .8em;
    height: .8em;
    border-radius: 50%;
    margin-right: .5rem;
    display: grid;
    place-items: center;
    background: #FFF;

    .icon-color {
      border-radius: inherit;
      width: 65%;
      height: 65%;
      background: ${({theme}) => theme.palette.success.light};
    }
  }
`;

export default WalletStatus;
