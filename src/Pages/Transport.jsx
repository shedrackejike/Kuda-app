import { Box } from "@chakra-ui/react";
import React from "react";
import Cowry from "../Subpages/Transports/Cowry";
import Network from "../Subpages/Airtime/Network";
import Lagos from "../Subpages/Transports/Lagos";

const Transport = () => {
  return (
    <Box>
      <Cowry />
      <Network />
      <Lagos />
    </Box>
  );
};

export default Transport;
