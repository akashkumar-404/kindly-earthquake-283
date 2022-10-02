import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/HomePageComponent/Banner";
import InvestementComponent from "./Components/HomePageComponent/InvestementComponent";
import ManagedCommunityContainer from "./Components/HomePageComponent/ManagedCommunityContainer";
import OwnerHomeContainer from "./Components/HomePageComponent/OwnerHomeContainer";
import TopVacations from "./Components/HomePageComponent/TopVacations";
import VacationIdeas from "./Components/HomePageComponent/VacationIdeas";
import Navbar from "./Components/Navbar/Navbar";

const HomePage = () => {
  return <div>
    <Navbar />
    <Banner />
    <TopVacations />
    <ManagedCommunityContainer />
    <Flex flexWrap={"wrap"} margin="24px 0" justifyContent="center" gap={"12px"} >
      <InvestementComponent />
      <OwnerHomeContainer />
    </Flex>
    <VacationIdeas />
    <Footer />
  </div>;
};

export default HomePage;
