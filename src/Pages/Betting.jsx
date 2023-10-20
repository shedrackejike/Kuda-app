import { Box } from "@chakra-ui/react";
import React from "react";
import Betts from "../Subpages/Bettings/Betts";
import Network from "../Subpages/Airtime/Network";
import Popular from "../Subpages/Bettings/Popular";

const Betting = () => {
  return (
    <Box>
      <Betts />
      <Network />
      <Popular />
    </Box>
  );
};

export default Betting;
