import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
} from '@chakra-ui/react';
import { Link as RouterLink, useParams } from 'react-router-dom'; 

import { projects } from '../projects';

export default function Top() {

  const { id } = useParams();
  console.log('Project ID:', id);

  const selectedProject = projects.find(project => project.id === parseInt(id));

  if (!selectedProject) {
    return <Text>Project not found</Text>;
  }



  return (
    <>     
      <Container w={'100%'}>
        <Stack
          as={Box}
          textAlign={'center'}
          py={{ base: 2, md: 2 }}>
          <Flex justify="space-between">
            <Button as={RouterLink} to="/" bgColor="green.300" color="white" _hover={{ bgColor: "green.300" }}>
              Go Back
            </Button>
          </Flex>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '4xl' }}
            lineHeight={'110%'}>
            Welcome to  <br />
            <Text as={'span'} color={'green.300'}>
              {selectedProject.name}  
            </Text>
              <Text ml={2} as={'span'}  >Located in </Text>  <br />
            <Text as={'span'} color={'green.300'}>
              {selectedProject.location} 
            </Text>
          </Heading>
          <Text color={'gray.500'}>
           As a project under Lico, we have had the privilege of collaborating aimed at creating sustainable impact in Education. 
           The team at Lico has shown exceptional expertise, passion, and a genuine desire to make a difference.
           Their transparency, accountability, and effective communication have been instrumental in ensuring the success of our 
           joint initiatives. The impact assessments conducted by Lico have provided valuable insights into the tangible changes we've achieved together.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.300'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

