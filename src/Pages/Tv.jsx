import { Box } from "@chakra-ui/react";
import React from "react";
import Paytv from "../Subpages/Tv/Paytv";
import Network from "../Subpages/Airtime/Network";
import Without from "../Subpages/Tv/Without";
import Unlock from "../Subpages/Tv/Unlock";
import Pack from "../Subpages/Tv/Pack";
import Tvfqs from "../Subpages/Tv/Tvfqs";
import Money from "../Subpages/Home/Money";

const Tv = () => {
  return (
    <Box>
      <Paytv />
      <Network />
      <Without />
      <Unlock />
      <Pack />
      <Tvfqs />
      <Money />
    </Box>
  );
};

export default Tv;
