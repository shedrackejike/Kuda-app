import { Box } from "@chakra-ui/react";
import React from "react";
import Behind from "../Subpages/Internet/Behind";
import Network from "../Subpages/Airtime/Network";
import Provider from "../Subpages/Internet/Provider";
import Plans from "../Subpages/Internet/Plans";
import Mode from "../Subpages/Internet/Mode";
import Confirm from "../Subpages/Internet/Confirm";
import Datafqs from "../Subpages/Internet/Datafqs";
import Money from "../Subpages/Home/Money";

const Internetap = () => {
  return (
    <Box>
      <Behind />
      <Network />
      <Provider />
      <Plans />
      <Mode />
      <Confirm />
      <Datafqs />
      <Money />
    </Box>
  );
};

export default Internetap;
