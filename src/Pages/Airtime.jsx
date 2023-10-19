import { Box } from "@chakra-ui/react";
import React from "react";
import Airtimeap from "../Subpages/Airtime/Airtimeap";
import Network from "../Subpages/Airtime/Network";
import Find from "../Subpages/Airtime/Find";
import Trans from "../Subpages/Airtime/Trans";

const Airtime = () => {
  return (
    <Box>
      <Airtimeap />
      <Network />
      <Find />
      <Trans />
    </Box>
  );
};

export default Airtime;
