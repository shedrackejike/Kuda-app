import { Box } from "@chakra-ui/react";
import React from "react";
import Airtimeap from "../Subpages/Airtime/Airtimeap";
import Network from "../Subpages/Airtime/Network";
import Find from "../Subpages/Airtime/Find";

const Airtime = () => {
  return (
    <Box>
      <Airtimeap />
      <Network />
      <Find />
    </Box>
  );
};

export default Airtime;
