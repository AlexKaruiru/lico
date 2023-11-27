import React from 'react';
import { Grid, Text, Flex, Heading, Button, Box, Image } from '@chakra-ui/react';

const Service = () => {
  return (
    <Box position="relative">
      <Image
        width={['0%', '0%', '0%', '40%', '60%']}
        maxW="660px"
        position="absolute"
        top="40%"
        left="5%"
        src= {require('../images/service.jpg')}
        display={['none', 'none', 'none', 'block', 'block']}
        borderColor="white"
        borderWidth="10px"
        borderStyle="solid"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      />
      <Grid
        backgroundColor="green.300"
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(3, 1fr)"
      >
        <Flex
          flexDirection="column"
          flexWrap="nowrap"
          alignItems="center"
          maxW="850px"
          color="white"
          paddingY="88px"
          gridColumn={['2 / 12', '2 / 12', '2 /12', '7 / 13', '7 / 13']}
          gridRow="1 / 4"
        >
          <Heading
            as="h3"
            textTransform="uppercase"
            fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
            fontWeight="extrabold"
            mb="8px"
            alignSelf="flex-start"
          >
            Our Goals
          </Heading>
          <Heading
            as="h4"
            fontSize={['lg', 'lg', 'xl', 'xl', 'xl']}
            fontWeight="normal"
            mb="20px"
            alignSelf="flex-start"
          >
            What are We Doing ?
          </Heading>
          <Text
            fontSize="sm"
            mb="20px"
            alignSelf="flex-start"
            textAlign="left"
            lineHeight="23px"
          >
            Our Mission is to make a lasting impact. As advocates for education, we strive to create a world where
             every child has the chance to learn, grow, and dream. Through collaborative efforts and the generosity of 
             compassionate individuals like you, we aim to build a foundation for sustainable education.
          </Text>
          <Text
            fontSize="sm"
            mb="20px"
            alignSelf="flex-start"
            textAlign="left"
            lineHeight="23px"
          >
            Education and Empowerment: 
            Education is more than just classrooms and textbooks; it is the key to breaking the cycle of poverty, 
            fostering empowerment, and building resilient communities. By supporting schools in Africa, we are sowing 
            the seeds of change and cultivating a future where knowledge is a beacon of hope.
          </Text>
          <Button
            alignSelf="flex-start"
            variantColor="white"
            backgroundColor="#fff"
            color="green.300"
            width="fit-content"
          >
            Learn More
          </Button>
        </Flex>
      </Grid>
    </Box>
  )
}

export default Service;
