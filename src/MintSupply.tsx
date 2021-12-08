import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

import useCandyMachine from "../hooks/useCandyMachine";

const MintSupply = styled((props) => {
  const { nftsData } = useCandyMachine();
  return (
    //@ts-ignore
    <Typography {...props} className={`${props.className} mint-supply`}>
      {nftsData.itemsRemaining}/{nftsData.itemsAvailable}
    </Typography>
  );
})``;

export default MintSupply;
