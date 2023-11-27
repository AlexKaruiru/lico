import React from 'react';
import { Flex, Text, Heading, Grid, Image } from '@chakra-ui/react';

const projects = [
  { name: 'Project 1', location: 'Nairobi', image: require('../images/5.png') },
  { name: 'Project 2', location: 'Thika', image: require('../images/1.jpg') },
  { name: 'Project 3', location: 'Nakuru', image: require('../images/6.png') },
  { name: 'Project 4', location: 'Kisumu', image: require('../images/2.jpg') },
  { name: 'Project 5', location: 'Mombasa', image: require('../images/5.png') },
  { name: 'Project 6', location: 'Ruiru', image: require('../images/6.png') },
];

const OurProject = () => {
  return (
    <Flex flexDirection="column" alignItems="center" mt="24">
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Our Projects
      </Heading>
      <Text fontSize="16px" mb="32px" maxW="460px" textAlign="center">
        Below are our ongoing projects:
      </Text>
      <Grid
        gridTemplateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gridGap="26px"
        px={['8', '8', '8', '24', '24']}
      >
        {projects.map((project, index) => (
          <Flex key={index} flexDirection="column" alignItems="center">
            <Image src={project.image} width="100%" />
            <Text mt="2">{project.name}</Text>
            <Text mt="1" color="green.300">{project.location}</Text>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default OurProject;
