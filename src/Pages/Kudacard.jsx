import { Box } from "@chakra-ui/react";
import React from "react";
import Visa from "../Subpages/Kudacard/Visa";
import Savings from "../Subpages/Savea/Savings";
import Activate from "../Subpages/Kudacard/Activate";
import Needpay from "../Subpages/Kudacard/Needpay";

const Kudacard = () => {
  return (
    <Box>
      <Visa />
      <Savings />
      <Activate />
      <Needpay />
    </Box>
  );
};

export default Kudacard;
