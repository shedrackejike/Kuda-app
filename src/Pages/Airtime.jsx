import { Box } from "@chakra-ui/react";
import React from "react";
import Airtimeap from "../Subpages/Airtime/Airtimeap";
import Network from "../Subpages/Airtime/Network";
import Find from "../Subpages/Airtime/Find";
import Trans from "../Subpages/Airtime/Trans";
import Fami from "../Subpages/Airtime/Fami";
import Internet from "../Subpages/Airtime/Internet";
import Money from "../Subpages/Home/Money";

const Airtime = () => {
  return (
    <Box>
      <Airtimeap />
      <Network />
      <Find />
      <Trans />
      <Fami />
      <Internet />
      <Money />
    </Box>
  );
};

export default Airtime;
