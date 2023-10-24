import { Box } from "@chakra-ui/react";
import React from "react";
import Active from "../Subpages/Overdrafts/Active";
import Network from "../Subpages/Airtime/Network";
import Paper from "../Subpages/Overdrafts/Paper";

const Overdrafts = () => {
  return (
    <Box>
      <Active />
      <Network />
      <Paper />
    </Box>
  );
};

export default Overdrafts;
