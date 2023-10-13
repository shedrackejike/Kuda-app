import { Box } from "@chakra-ui/react";
import React from "react";
import Invest from "../Subpages/Investment/Invest";
import Stock from "../Subpages/Investment/Stock";
import Buying from "../Subpages/Investment/Buying";
import Paypal from "../Subpages/Investment/Paypal";

const Investment = () => {
  return (
    <Box>
      <Invest />
      <Stock />
      <Buying />
      <Paypal />
    </Box>
  );
};

export default Investment;
