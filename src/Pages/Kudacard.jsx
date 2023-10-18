import { Box } from "@chakra-ui/react";
import React from "react";
import Visa from "../Subpages/Kudacard/Visa";
import Savings from "../Subpages/Savea/Savings";
import Activate from "../Subpages/Kudacard/Activate";
import Needpay from "../Subpages/Kudacard/Needpay";
import Turnn from "../Subpages/Kudacard/Turnn";
import Money from "../Subpages/Home/Money";

const Kudacard = () => {
  return (
    <Box>
      <Visa />
      <Savings />
      <Activate />
      <Needpay />
      <Turnn />
      <Money />
    </Box>
  );
};

export default Kudacard;
