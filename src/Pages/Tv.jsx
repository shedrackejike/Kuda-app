import { Box } from "@chakra-ui/react";
import React from "react";
import Paytv from "../Subpages/Tv/Paytv";
import Network from "../Subpages/Airtime/Network";
import Without from "../Subpages/Tv/Without";
import Unlock from "../Subpages/Tv/Unlock";

const Tv = () => {
  return (
    <Box>
      <Paytv />
      <Network />
      <Without />
      <Unlock />
    </Box>
  );
};

export default Tv;
