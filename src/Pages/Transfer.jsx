import { Box } from "@chakra-ui/react";
import React from "react";
import Send from "../Subpages/Transfer/Send";
import Atms from "../Subpages/Transfer/Atms";
import Free from "../Subpages/Transfer/Free";

const Transfer = () => {
  return (
    <Box>
      <Send />
      <Atms />
      <Free />
    </Box>
  );
};

export default Transfer;
