import React from 'react';
import { Flex, Text, Heading, Grid, Image, Box } from '@chakra-ui/react';

const CreativeDirector = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      mt={['24', '24', '24', '24', '64']}
    >
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Team
      </Heading>
      <Text fontSize="16px" mb="32px" maxW="460px" textAlign="center">
       Our dedicated team that is committed and passionate about making a difference in the lives of our communities.
      </Text>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridGap="26px"
        px={['8', '8', '8', '24', '24']}
      >
        <Box
          position="relative"
          gridColumn={['1 / 4', '1 / 4', 'auto', 'auto', 'auto']}
        >
          <Image src= {require('../images/icon.png')}  w="100%"/>
          <Flex
            position="absolute"
            bottom="-35px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingY="6px"
            width="80%"
            backgroundColor="white"
            borderColor="green.300"
            borderWidth="6px"
          >
            <Text fontWeight="medium" fontSize="22px">
              Simme john
            </Text>
            <Text textTransform="uppercase" color="green.300">
              Director
            </Text>
          </Flex>
        </Box>

        <Box
          position="relative"
          gridColumn={['1 / 4', '1 / 4', 'auto', 'auto', 'auto']}
          mt={['16', '16', '0', '0', '0']}
        >
          <Image src= {require('../images/icon1.png')}  w="100%" h="420px"/>
          <Flex
            position="absolute"
            bottom="-35px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingY="6px"
            width="80%"
            backgroundColor="white"
            borderColor="green.300"
            borderWidth="6px"
          >
            <Text fontWeight="medium" fontSize="22px">
              Marie smith
            </Text>
            <Text textTransform="uppercase" color="green.300">
              Director
            </Text>
          </Flex>
        </Box>

        <Box
          position="relative"
          gridColumn={['1 / 4', '1 / 4', 'auto', 'auto', 'auto']}
          mt={['12', '12', '0', '0', '0']}
        >
          <Image src= {require('../images/icon1.png')}  w="100%" h="420px"/>
          <Flex
            position="absolute"
            bottom="-35px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingY="6px"
            width="80%"
            backgroundColor="white"
            borderColor="green.300"
            borderWidth="6px"
          >
            <Text fontWeight="medium" fontSize="22px">
              Barbara Jones
            </Text>
            <Text textTransform="uppercase" color="green.300">
              Director
            </Text>
          </Flex>
        </Box>
      </Grid>
    </Flex>
  );
};

export default CreativeDirector;
