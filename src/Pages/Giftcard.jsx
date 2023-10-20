import { Box } from "@chakra-ui/react";
import React from "react";
import Gift from "../Subpages/Giftcard/Gift";
import Network from "../Subpages/Airtime/Network";
import Dollar from "../Subpages/Giftcard/Dollar";
import Game from "../Subpages/Giftcard/Game";
import Treat from "../Subpages/Giftcard/Treat";

const Giftcard = () => {
  return (
    <Box>
      <Gift />
      <Network />
      <Dollar />
      <Game />
      <Treat />
    </Box>
  );
};

export default Giftcard;
