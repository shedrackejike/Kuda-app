import { Box } from "@chakra-ui/react";
import React from "react";
import Cityapp from "../Subpages/Electricity/Cityapp";
import Buy from "../Subpages/Electricity/Buy";
import Meter from "../Subpages/Electricity/Meter";

const Electricity = () => {
  return (
    <Box>
      <Cityapp />
      <Buy />
      <Meter />
    </Box>
  );
};

export default Electricity;
