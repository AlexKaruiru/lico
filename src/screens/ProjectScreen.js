
import {  Box } from '@chakra-ui/react';

import Navbar from '../projectlanding/Navbar';
import Top from "../projectlanding/Top";
import Features from "../projectlanding/Features";
import Testimonials from "../projectlanding/Testimonials";
import Footer from "../projectlanding/Footer";

const ProjectScreen = () => {
 

  return (
    <Box flex='1' mt={6} overflow='auto'>
        <Navbar />
        <Top/>
        <Features />
        <Testimonials />
        <Footer />

    </Box>
  );
};

export default ProjectScreen;
