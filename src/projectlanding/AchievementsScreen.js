import React from 'react';
import { Box, Container, SimpleGrid, Image, Heading, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { projects } from '../projects';

const AchievementCard = ({ image, description }) => (
  <Box p={6} boxShadow="lg" borderWidth="1px" borderRadius="md" overflow="hidden">
    <Image src={image} alt="Achievement" />
    <Heading as="h3" mt={4} fontSize="xl">
      Achievement
    </Heading>
    <Text mt={2}>{description}</Text>
  </Box>
);

const AchievementsScreen = () => {
  const { id } = useParams();
  console.log('Project ID:', id);

  const selectedProject = projects.find((project) => project.id === parseInt(id));

  if (!selectedProject) {
    return <Text>Project not found</Text>;
  }

  return (
    <Container maxW="6xl" py={12}>
      <Heading as="h1" mb={8}>
        Achievements for {selectedProject.name}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {selectedProject.achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            image={achievement.image}
            description={achievement.description}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default AchievementsScreen;
