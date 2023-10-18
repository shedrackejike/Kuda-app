import { Box } from "@chakra-ui/react";
import React from "react";
import Cityapp from "../Subpages/Electricity/Cityapp";
import Buy from "../Subpages/Electricity/Buy";

const Electricity = () => {
  return (
    <Box>
      <Cityapp />
      <Buy />
    </Box>
  );
};

export default Electricity;
