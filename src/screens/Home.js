import React from 'react';
import { Divider, Box } from '@chakra-ui/react';

import Nav from "../components/Nav";
import Header from "../components/Header";
import BrightHome from "../components/BrightHome";
import About from "../components/About";
import Service from "../components/Service";
import Footer from "../components/Footer";
import OurProject from "../components/OurPojects";
import CreativeDirector from "../components/CreativeDirector";
import Contact from '../components/Contact';

const Home = () => {
  return (
    <Box flex='1' mt={6} overflow='auto'>
      <Nav />
      <Header />
      <BrightHome />
      <About />
      <Service />
      <CreativeDirector />
      <OurProject />
      <Contact />
      <Divider mt="12" />
      <Footer />
    </Box>
  )
}

export default Home;