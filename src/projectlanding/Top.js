import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Image,
} from '@chakra-ui/react';
import {  useParams } from 'react-router-dom'; 

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
      <Flex
        direction="column"
        align="center"
        maxW={'6xl'}
        m="0 auto"
        >
        <Flex
              align="center"
              justify={{ base: "center", md: "space-around", xl: "space-between" }}
              direction={{ base: "column-reverse", md: "row" }}
              wrap="no-wrap"
              minH="70vh"
              px={8}
              mb={16}              
              mt={{ base: 8, md: 8 }}
          >
          <Stack
            spacing={4}
            w={{ base: "80%", md: "40%" }}
            align={["center", "center", "flex-start", "flex-start"]}
            >
            <Heading
              fontWeight={600}
              mt={4}
              fontSize={{ base: '2xl', sm: '4xl', md: '4xl' }}
              lineHeight={'110%'}>
              Welcome to  <br />
              <Text as={'span'} color={'green.300'}>
                {selectedProject.name}  
              </Text>
                <Text ml={4} as={'span'}  >Located in </Text>  <br />
              <Text as={'span'} color={'green.300'}>
                {selectedProject.location} 
              </Text>
            </Heading>
            <Text mt={10} color={'gray.700'}>
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
          <Box w={{ base: "100%",  md: "50%" }} mb={{ base: 12, md: 0 }}>
              <Image
                  src="https://source.unsplash.com/700x500/?school"
                  size="100%"
                  rounded="1rem"
                  shadow="2xl"
              />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

