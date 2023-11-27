import React from 'react';
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/react';

import Button from './Button';

const About = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" marginY="24" alignItems="center">
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 4', '1 / 4']}
        alignItems="center"
        paddingX={['8', '8', '8', '24', '24']}
        marginX="auto"
        maxW="850px"
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          fontSize="5xl"
          fontWeight="normal"
          mb="20px"
          alignSelf="flex-start"
        >
          About us
        </Heading>
        <Text fontSize="md" mb="20px" alignSelf="flex-start" textAlign="left">
          We believe in the transformative power of education and we aim to provide hope, opportunity, and a brighter future for communities across Africa through the gift of learning. We are here to change that narrative.
        </Text>
        <Text mb="20px">
          Education is more than just classrooms and textbooks; it is the key to breaking the cycle of poverty, fostering empowerment, and building resilient communities. By supporting schools in Africa, we are sowing the seeds of change and cultivating a future where knowledge is a beacon of hope.
        </Text>
        <Button mt={18}>Learn More</Button>
      </Flex>
      <Box gridColumn={['1 / 7', '1 / 7', '1 / 7', '4 / 7', '4 / 7']}>
        <Image
          borderRadius="lg"
          src={require('../images/about.png')}
          display={['block', 'block', 'block', 'block', 'block']}
          width={{base:"100%", md:"60%"}}
        />
      </Box>
    </Grid>
  );
};

export default About;
