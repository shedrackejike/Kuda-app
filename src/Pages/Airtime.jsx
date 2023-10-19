import { Box } from "@chakra-ui/react";
import React from "react";
import Airtimeap from "../Subpages/Airtime/Airtimeap";
import Network from "../Subpages/Airtime/Network";

const Airtime = () => {
  return (
    <Box>
      <Airtimeap />
      <Network />
    </Box>
  );
};

export default Airtime;
