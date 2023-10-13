import { Box } from "@chakra-ui/react";
import React from "react";
import Invest from "../Subpages/Investment/Invest";
import Stock from "../Subpages/Investment/Stock";

const Investment = () => {
  return (
    <Box>
      <Invest />
      <Stock />
    </Box>
  );
};

export default Investment;
