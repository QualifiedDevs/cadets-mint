import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import Link from "./Link";

import Image from "next/image";
import discord from "../public/social-icons/discord.svg";
import twitter from "../public/social-icons/twitter.svg";

const images = {
  discord,
  twitter,
};

const SocialIcon = styled((props) => {
  return (
    <Box {...props}>
      <Link href={props.href}>
        {/*@ts-ignore*/}
        <Image src={props.src} />
      </Link>
    </Box>
  );
})`
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
`;

const SocialsMenu = styled((props) => {
  const items = [];
  let index = 0;
  for (const social in props.socials) {
    items[index++] = (
      <li>
        {/* @ts-ignore */}
        <SocialIcon src={images[social]} href={props.socials[social]} />
      </li>
    );
  }
  return (
    <Box {...props}>
      <nav>
        <ul>{items}</ul>
      </nav>
    </Box>
  );
})`
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.4rem;
  }
`;

export default SocialsMenu;
