import { Box } from "@chakra-ui/react";
import React from "react";
import Leave from "../Subpages/Cardlessap/Leave";
import Atms from "../Subpages/Transfer/Atms";

const Cardless = () => {
  return (
    <Box>
      <Leave />
      <Atms />
    </Box>
  );
};

export default Cardless;
