import { Box } from "@chakra-ui/react";
import React from "react";
import Behind from "../Subpages/Internet/Behind";
import Network from "../Subpages/Airtime/Network";
import Provider from "../Subpages/Internet/Provider";

const Internetap = () => {
  return (
    <Box>
      <Behind />
      <Network />
      <Provider />
    </Box>
  );
};

export default Internetap;
