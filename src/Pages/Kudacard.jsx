import { Box } from "@chakra-ui/react";
import React from "react";
import Visa from "../Subpages/Kudacard/Visa";
import Savings from "../Subpages/Savea/Savings";
import Activate from "../Subpages/Kudacard/Activate";

const Kudacard = () => {
  return (
    <Box>
      <Visa />
      <Savings />
      <Activate />
    </Box>
  );
};

export default Kudacard;
