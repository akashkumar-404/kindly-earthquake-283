import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ManagedLeft from "./ManagedLeft";
import ManagedRight from "./ManagedRight";

const ManagedCommunityContainer = () => {
  return (
    <SimpleGrid columns={[1, 2, 2, 2]} margin="54px 24px" gap={"24px"}>
      <ManagedLeft></ManagedLeft>
      <ManagedRight></ManagedRight>
    </SimpleGrid>
  );
};

export default ManagedCommunityContainer;
