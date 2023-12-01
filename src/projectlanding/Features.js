import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
  } from '@chakra-ui/react';
  import {   
    IoThumbsUpSharp,
    IoThumbsDownSharp ,
    IoNewspaper,
  } from 'react-icons/io5';
  import { useParams } from 'react-router-dom'; 

  import { projects } from '../projects';
  
  const Feature = ({ text, icon, iconBg }) => {    
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  }; 
  
  const  Features = () => {
    const { id } = useParams();
    console.log('Project ID:', id);

    const selectedProject = projects.find(project => project.id === parseInt(id));

    if (!selectedProject) {
      return <Text>Project not found</Text>;
    }

    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg='blue.50'
              _hover={{
                bg: 'blue.900',                
              }}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Our Story
            </Text>
            <Heading>{selectedProject.about}</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            {selectedProject.about}
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={'grey.100'}
                _hover={{
                  bg: 'grey.700',                
                }}
                 />
              }>
              <Feature
                icon={
                  <Icon as={IoThumbsUpSharp} color={'green.500'} w={5} h={5} />
                }
                bg='green.100'
                _hover={{
                  bg: 'green.900',                
                }}
                text={'Achievements'}
              />
              <Feature
                icon={<Icon as={IoThumbsDownSharp} color={'purple.500'} w={5} h={5} />}
                bg='purple.100'
                _hover={{
                  bg: 'purple.900',                
                }}
                text={'Challenges'}
              />
              <Feature
                icon={
                  <Icon as={IoNewspaper} color={'yellow.500'} w={5} h={5} />
                }
                bg='yellow.100'
                _hover={{
                  bg: 'yellow.900',                
                }}
                text={'Updates'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }

  export default Features;