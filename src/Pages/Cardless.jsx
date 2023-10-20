import { Box } from "@chakra-ui/react";
import React from "react";
import Leave from "../Subpages/Cardlessap/Leave";
import Atms from "../Subpages/Transfer/Atms";
import Pos from "../Subpages/Cardlessap/Pos";

const Cardless = () => {
  return (
    <Box>
      <Leave />
      <Atms />
      <Pos />
    </Box>
  );
};

export default Cardless;
