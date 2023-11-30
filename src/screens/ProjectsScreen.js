import { Link as RouterLink, useParams } from 'react-router-dom'; 
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';

import { projects } from '../components/projects';

const ProjectScreen = () => {
  const { id } = useParams();
  console.log('Project ID:', id);

  const selectedProject = projects.find(project => project.id === parseInt(id));

  if (!selectedProject) {
    return <Text>Project not found</Text>;
  }

  return (
    <Box py="6" px={{ base: '4', md: '10' }}>
      <Flex justify="space-between" mb="4">
        <Button as={RouterLink} to="/" bgColor="green.300" color="white" _hover={{ bgColor: "green.400" }}>
          Go Back
        </Button>
      </Flex>

      <Grid templateColumns={{ base: '1fr', md: '5fr 4fr 3fr' }} gap="10">
        {/* Column 1 */}
        <Flex direction="column">
          <Image src={selectedProject.image} alt={selectedProject.name} borderRadius="md" h="400px" w="350px" />
          <Heading as="h2" fontSize="lg" mb="4">
            {selectedProject.name}
          </Heading>

          <Heading
            as="h5"
            fontSize="xl"
            fontWeight="bold"
            color="green.300"
            my="5"
            mb="4"
          >
            {selectedProject.location}
          </Heading>
        </Flex>

        {/* Column 2 */}
        <Flex direction="column">
          <Flex justifyContent="space-between" py="2">
            <Text m={2} fontSize="lg" fontWeight="semibold" color="green.400">
              About
            </Text>
            <Text>{selectedProject.about}</Text>
          </Flex>          

          <Flex justifyContent="space-between" py="2">
            <Text m={2} fontSize="lg" fontWeight="semibold" color="green.400">
              Achievements
            </Text>
            <Text>{selectedProject.achievements}</Text>
          </Flex>
        </Flex>

        {/* Column 3 */}
        <Flex direction="column">  

          <Flex justifyContent="space-between" py="2">
            <Text m={2} fontSize="lg" fontWeight="semibold" color="green.400">
              Challenges:
            </Text>
            <Text>{selectedProject.challenges}</Text>
          </Flex>

          <Flex justifyContent="space-between" py="2">
            <Text m={2} fontSize="lg" fontWeight="semibold" color="green.400">
              Partnerships:
            </Text>
            <ul>
              {selectedProject.partners}
            </ul>
          </Flex>          
        </Flex>
      </Grid>
    </Box>
  );
};

export default ProjectScreen;
