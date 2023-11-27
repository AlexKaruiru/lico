import React from 'react';
import { Text, Flex, Grid, Box } from '@chakra-ui/react';
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'

import Logo from './Logo';

const Footer = () => {
  return (
    <Grid as="footer" templateColumns="repeat(6, 1fr)" mt="16" mb="16">
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 3', '1 / 3']}
        pl={['8', '8', '8', '24', '24']}
      >
        <Logo />
        <Text fontSize="sm" mt="4" textAlign="left" lineHeight="22px">
        We believe in the transformative power of education and we aim to provide hope, 
        opportunity, and a brighter future for communities across Africa through the gift of learning. 
        We are here to change that narrative.
        </Text>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt="8"
        >
          <Box as={FaFacebookF} size="22px" color="green.300" mr="12px" />
          <Box as={FaTwitter} size="22px" color="green.300" mr="12px" />
          <Box as={FaGoogle} size="22px" color="green.300" mr="12px" />
          <Box as={FaInstagram} size="22px" color="green.300" mr="12px" />
          <Box as={FaYoutube} size="22px" color="green.300" />
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '3 / 4', '3 / 4']}
        paddingX="8"
        mt={['12', '12', '12', '0', '0']}
      >
        <Text color="green.300" fontWeight="bold" fontSize="20px" mb="8px">
          Projects
        </Text>
        <Text mb="6px">Education</Text>
        <Text mb="6px">Community</Text>
        <Text mb="6px">Empowerment</Text>
        <Text>More Incoming ..</Text>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '4 / 5', '4 / 5']}
        paddingX={['8', '8', '8', '2', '2']}
        mt={['12', '12', '12', '0', '0']}
      >
        <Text color="green.300" fontWeight="bold" fontSize="20px" mb="8px">
          Contact Us
        </Text>
        <Text mb="6px">Address: C-308 Nairobi</Text>
        <Text mb="6px">Phone: +254 XXXXXX</Text>
        <Text>Email: info@bright.com</Text>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '5 / 6', '5 / 6']}
        paddingX={['8', '8', '8', '2', '2']}
        mt={['12', '12', '12', '0', '0']}
      >
        <Text color="green.300" fontWeight="bold" fontSize="20px" mb="8px">
          Newsletter
        </Text>
        <Text mb="6px">
          Subsribe to our newsletter
        </Text>
      </Flex>
    </Grid>
  )
}

export default Footer;
