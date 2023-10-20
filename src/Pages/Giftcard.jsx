import { Box } from "@chakra-ui/react";
import React from "react";
import Gift from "../Subpages/Giftcard/Gift";
import Network from "../Subpages/Airtime/Network";
import Dollar from "../Subpages/Giftcard/Dollar";
import Game from "../Subpages/Giftcard/Game";
import Treat from "../Subpages/Giftcard/Treat";
import Giftfqs from "../Subpages/Giftcard/Giftfqs";
import Money from "../Subpages/Home/Money";

const Giftcard = () => {
  return (
    <Box>
      <Gift />
      <Network />
      <Dollar />
      <Game />
      <Treat />
      <Giftfqs />
      <Money />
    </Box>
  );
};

export default Giftcard;
