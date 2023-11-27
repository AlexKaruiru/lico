import React, { useState, useEffect, useMemo } from 'react';
import { Flex, Grid, Heading } from '@chakra-ui/react';

const Header = () => {
  const images = useMemo(() => [
    require('../images/charity.jpeg'),
    require('../images/charity2.jpg'),
    require('../images/charity1.jpg'),
  ], []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <Grid
      backgroundImage={`url(${images[currentImageIndex]})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height={['60vh', '60vh', '60vh', '70vh']}
      templateRows="1fr 1fr 1fr"
    >
      <Flex
        flexDirection="column"
        gridRow="3 / 3"
        paddingX={['1.5em', '1.5em', '1.5em', '15%']}
      >
        <Heading
          as="h2"
          fontSize={['2xl', '3xl', '4xl', '4xl', '4xl']}
          color="white"
          bg="green.300"
          mb="3"
          width="fit-content"
          paddingX={['4px', '12px', '12px', '16px', '24px']}
          paddingY={['4px', '4px', '12px', '12px', '16px']}
        >
          Welcome to Bright
        </Heading>
        <Heading
          as="h3"
          fontSize={['lg', 'lg', 'xl', 'xl', 'xl']}
          textTransform="uppercase"
          color="green.300"
          bg="white"
          width="fit-content"
          paddingX={['24px', '24px', '30px', '30px', '30px']}
          paddingY={['8px', '8px', '14px', '14px', '14px']}
        >
          Helping One Another Can Make The World Better.
        </Heading>
      </Flex>
    </Grid>
  );
};

export default Header;
