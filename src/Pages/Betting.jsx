import { Box } from "@chakra-ui/react";
import React from "react";
import Betts from "../Subpages/Bettings/Betts";
import Network from "../Subpages/Airtime/Network";
import Popular from "../Subpages/Bettings/Popular";
import Wallet from "../Subpages/Bettings/Wallet";
import Smallar from "../Subpages/Bettings/Smallar";
import Betfqs from "../Subpages/Bettings/Betfqs";
import Money from "../Subpages/Home/Money";

const Betting = () => {
  return (
    <Box>
      <Betts />
      <Network />
      <Popular />
      <Wallet />
      <Smallar />
      <Betfqs />
      <Money />
    </Box>
  );
};

export default Betting;
