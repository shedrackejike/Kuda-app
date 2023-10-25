import { Box } from "@chakra-ui/react";
import React from "react";
import Discoverb from "../Subpages/DiscoverB/Discoverb";
import Trusted from "../Subpages/DiscoverB/Trusted";
import Create from "../Subpages/DiscoverB/Create";

const Discover = () => {
  return (
    <Box>
      <Discoverb />
      <Trusted />
      <Create />
    </Box>
  );
};

export default Discover;
