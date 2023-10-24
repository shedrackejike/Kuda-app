import { Box } from "@chakra-ui/react";
import React from "react";
import Cowry from "../Subpages/Transports/Cowry";
import Network from "../Subpages/Airtime/Network";
import Lagos from "../Subpages/Transports/Lagos";
import Danfo from "../Subpages/Transports/Danfo";

const Transport = () => {
  return (
    <Box>
      <Cowry />
      <Network />
      <Lagos />
      <Danfo />
    </Box>
  );
};

export default Transport;
