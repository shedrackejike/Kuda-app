import { Box } from "@chakra-ui/react";
import React from "react";
import Leave from "../Subpages/Cardlessap/Leave";
import Atms from "../Subpages/Transfer/Atms";
import Pos from "../Subpages/Cardlessap/Pos";
import Online from "../Subpages/Cardlessap/Online";
import Forever from "../Subpages/Cardlessap/Forever";

const Cardless = () => {
  return (
    <Box>
      <Leave />
      <Atms />
      <Pos />
      <Online />
      <Forever />
    </Box>
  );
};

export default Cardless;
