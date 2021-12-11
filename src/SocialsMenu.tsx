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
    <Link href={props.href}>
      <Box {...props}>
        <Image src={props.src} layout="responsive" objectFit="contain" />
      </Box>
    </Link>
  );
})`
  width: 35px;
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
  nav {
    ul {
      list-style-type: none;

      display: flex;
      justify-content: flex-end;

      li {

        margin: 0 .25em;

      }
    }
  }
`;

export default SocialsMenu;
