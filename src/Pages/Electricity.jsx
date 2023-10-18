import { Box } from "@chakra-ui/react";
import React from "react";
import Cityapp from "../Subpages/Electricity/Cityapp";
import Buy from "../Subpages/Electricity/Buy";
import Meter from "../Subpages/Electricity/Meter";
import Major from "../Subpages/Electricity/Major";

const Electricity = () => {
  return (
    <Box>
      <Cityapp />
      <Buy />
      <Meter />
      <Major />
    </Box>
  );
};

export default Electricity;
