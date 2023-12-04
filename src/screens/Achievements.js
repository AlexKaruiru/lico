
import {  Box } from '@chakra-ui/react';

import Navbar from '../projectlanding/Navbar';
import Footer from "../projectlanding/Footer";
import AchievementsScreen from '../projectlanding/AchievementsScreen';

const Achievements= () => {
 

  return (
    <Box flex='1' mt={6} overflow='auto'>
        <Navbar />
        <AchievementsScreen />
        <Footer />

    </Box>
  );
};

export default Achievements;

