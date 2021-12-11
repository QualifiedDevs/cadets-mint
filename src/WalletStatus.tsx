import React, { useMemo, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import { useWallet } from "@solana/wallet-adapter-react";

const Icon = styled((props) => {
  return (
    <Box {...props} className={props.className + " icon"}>
      <div className="icon-color" />
    </Box>
  );
})`
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #fff;

  .icon-color {
    border-radius: inherit;
    width: 65%;
    height: 65%;
    background: ${({ theme, status }) => {
      return status ? theme.palette.success.light : theme.palette.error.light;
    }};
  }
`;

const WalletStatus = styled((props) => {
  const { publicKey, connected, disconnect } = useWallet();

  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);
  const walletShort = useMemo(() => {
    if (!base58) return null;
    return base58.slice(0, 4) + "..." + base58.slice(-4);
  }, [base58]);

  return (
    <Box {...props} className={`${props.className} wallet-status`}>
      <Icon status={connected} />
      <Typography>{connected? ("Wallet: " + walletShort) : "Wallet Not Connected"}</Typography>
    </Box>
  );
})`
  display: flex;
  align-items: center;

  .icon {
    margin-right: .6rem;
  }

  * {
    font-size: inherit;
  }
`;

export default WalletStatus;
