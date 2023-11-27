import React from 'react';
import { Flex, Heading, Text, Icon} from '@chakra-ui/react';
import { PiShootingStar } from "react-icons/pi";
import { RiUserStarLine } from "react-icons/ri";
import { TbSunset } from "react-icons/tb";

import Button from './Button';

const BrightHome = () => {
  return (
    <Flex width="100%" flexDirection="column" alignItems="center" mt="24">
      <Heading
        as="h3"
        mb="20"
        fontSize={['2xl', '2xl', '3xl', '3xl', '3xl']}
        textAlign="center"
        marginX="auto"
      >
        All the more reasons to join our cause
      </Heading>
      <Flex
        width="90%"
        flexDirection={['column', 'column', 'column', 'row', 'row']}
        justifyContent="space-between"
        alignItems="center"
        maxW="1280px"
        mb="12"
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
        >
          <Icon 
            as={PiShootingStar} 
            color="green.300"          
            width="50px"
            height="50px"
            mr="18px"
          />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">Improving access to education:</Text>
            <Text fontSize="sm">
              Providing scholarships, building various infrastructures in schools especially in remote areas and 
              congested urban areas, so that more children can go to school.
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
        >
          <Icon 
            as={RiUserStarLine} 
            color="green.300"          
            width="50px"
            height="50px"
            mr="18px"
          />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">Promoting equity in education:</Text>
            <Text fontSize="sm">
             Ensure that all children have equal access to quality education, regardless of their gender, 
             race, ethnicity, or socioeconomic background.
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
        >
          <Icon 
            as={TbSunset} 
            color="green.300"          
            width="50px"
            height="50px"
            mr="18px"
          />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">Making schools safe and inclusive: </Text>
            <Text fontSize="sm">
            Working to prevent bullying and violence in schools, and
            creating inclusive environments for students with disabilities.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Button>Consult us now</Button>
    </Flex>
  )
}
export default BrightHome;
