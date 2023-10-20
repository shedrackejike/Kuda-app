import { Box } from "@chakra-ui/react";
import React from "react";
import Paytv from "../Subpages/Tv/Paytv";
import Network from "../Subpages/Airtime/Network";

const Tv = () => {
  return (
    <Box>
      <Paytv />
      <Network />
    </Box>
  );
};

export default Tv;
