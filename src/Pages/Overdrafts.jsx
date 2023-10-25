import { Box } from "@chakra-ui/react";
import React from "react";
import Active from "../Subpages/Overdrafts/Active";
import Network from "../Subpages/Airtime/Network";
import Paper from "../Subpages/Overdrafts/Paper";
import Spend from "../Subpages/Overdrafts/Spend";
import Intrest from "../Subpages/Overdrafts/Intrest";
import Overfqs from "../Subpages/Overdrafts/Overfqs";
import Money from "../Subpages/Home/Money";

const Overdrafts = () => {
  return (
    <Box>
      <Active />
      <Network />
      <Paper />
      <Spend />
      <Intrest />
      <Overfqs />
      <Money />
    </Box>
  );
};

export default Overdrafts;
