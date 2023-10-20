import { Box } from "@chakra-ui/react";
import React from "react";
import Gift from "../Subpages/Giftcard/Gift";
import Network from "../Subpages/Airtime/Network";

const Giftcard = () => {
  return (
    <Box>
      <Gift />
      <Network />
    </Box>
  );
};

export default Giftcard;
