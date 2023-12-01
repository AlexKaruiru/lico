import React from 'react';
import { Flex, Text, Heading, Grid, Image, Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; 

import { projects } from '../projects';

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
        {projects.map((project) => (
          <ChakraLink
            key={project.id}
            as={RouterLink}
            to={`/projects/${project.id}`}
            _hover={{ textDecor: 'none' }}
          >
            <Flex flexDirection="column" alignItems="center">
              <Image src={project.image} width="100%" />
              <Text mt="2">{project.name}</Text>
              <Text mt="1" color="green.300">
                {project.location}
              </Text>
            </Flex>
          </ChakraLink>
        ))}
      </Grid>
    </Flex>
  );
};

export default OurProject;
