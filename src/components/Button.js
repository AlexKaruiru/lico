import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

const Button = ({ children }) => {
  return (
    <ChakraButton
      bgColor="green.300"
      color="white"
      textTransform="uppercase"
      width="fit-content"
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
