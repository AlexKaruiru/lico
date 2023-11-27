import React from 'react';

import { Heading, Text } from '@chakra-ui/react';

const Logo = () => {
  return (
    <>
      <Heading as="h1" size="lg" color="green.300" textTransform="uppercase">
        <Text display="inline" fontWeight="extrabold">
          Bright
        </Text>{' '}
        <Text display="inline" fontWeight="medium">
         .
        </Text>
      </Heading>
    </>
  )
}

export default Logo;
