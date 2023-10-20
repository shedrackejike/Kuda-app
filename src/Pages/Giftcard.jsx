import { Box } from "@chakra-ui/react";
import React from "react";
import Gift from "../Subpages/Giftcard/Gift";
import Network from "../Subpages/Airtime/Network";
import Dollar from "../Subpages/Giftcard/Dollar";

const Giftcard = () => {
  return (
    <Box>
      <Gift />
      <Network />
      <Dollar />
    </Box>
  );
};

export default Giftcard;
