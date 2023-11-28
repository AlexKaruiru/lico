import { Link } from "react-router-dom"
import { 
    Box, 
    Flex, 
    Heading, 
    Text, 
    Icon, 
    Stack, 
    Image, 
    Link as ChakraLink, 
    Input,
    Textarea,
    FormControl,
    FormLabel,
    Button, 
} from "@chakra-ui/react";
import { FaEnvelope, FaPhoneSquareAlt, FaFacebook, FaTwitter } from 'react-icons/fa';

const Contact = () => {
 return (  
    <Flex
        direction="column"
        align="center"
        mt={14}
        >
             <Heading 
                    as="h2" 
                    size="lg" 
                    fontWeight="bold"
                    color="black"
                    textTransform="uppercase" mb="20px"
                    >
                    Contact Us
                </Heading>
                <Text 
                    as="h4" 
                    fontSize="lg" 
                    color="primary.800" 
                    opacity="0.8"
                    textAlign={["center", "center", "left", "left"]}
                    mb={4}
                    >
                    Contact us for your questions, partnerships, comments or suggestions.
                </Text>

        <Flex
            align="center"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            direction={{ base: "column-reverse", md: "row" }}
            wrap="no-wrap"
            minH="70vh"
            px={8}
            mb={16}
        >
            <Stack
                spacing={4}
                w={{ base: "80%", md: "50%" }}
                align={["center", "center", "flex-start", "flex-start"]}
            >               
                <Box
                w={['100%', '100%', '100%', '95%', '95%']}
                borderWidth="3px"
                borderRadius="lg"
                overflow="hidden"
                shadow="md"
                p={4}
                boxShadow="0px 24px 34px rgba(80, 79, 89, 0.14)"
                _hover={{
                transform: 'scale(1.05)',
                }}
            >
            <Heading
              as="h6"
              size="xl"
              mb={4}
              fontWeight="normal"
              color="green.300"
            >
              Drop us a Line
            </Heading>
            <form>
              <FormControl id="name" mb={4}>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Your Name" />
              </FormControl>
              <Flex direction={{ base: "column", md: "row" }} >
              <FormControl id="phone" mb={4}  m={1}>
                <FormLabel>Phone</FormLabel>
                <Input type="tel" placeholder="Your Phone Number" />
              </FormControl>
              <FormControl id="email" mb={4} m={1}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your Email" />
              </FormControl>
              </Flex>
              <FormControl id="message" mb={4}>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your Message" />
              </FormControl>
              <ChakraLink
                href="#"
                color="green.300"
                fontSize="md"
                fontWeight="bold"
                mt={2}
                display="block"
              >
                <Button>
                Submit
                </Button>
              </ChakraLink>
            </form>
          </Box>
                
            </Stack>
            
            <Box w={{ base: "100%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
            <Image
                src="https://source.unsplash.com/700x500/?call"
                size="100%"
                rounded="1rem"
                shadow="2xl"
            />
            </Box>

        </Flex>

        <Flex mx='auto'>
            {/* Cards */}
            <Box gridTemplateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }} >
                <Stack
                    direction={{ base: "column", sm: "row", md: "row", lg: "row" }}
                    justify="center"                    
                    spacing={2}
                    wrap="wrap"
                    align="center"
                    >                

                    <Box
                        maxW="md"
                        borderWidth="2px"
                        borderRadius="lg"
                        overflow="hidden"
                        shadow="md"
                        p={4}
                        borderColor="green.300"
                        boxShadow="0px 24px 34px rgba(80, 79, 89, 0.14)"
                        height="100px"
                        width={['100%', '100%', '100%', '300px', '250px']} 
                        _hover={{
                          transform: 'scale(1.05)',
                        }}
                    >
                        <ChakraLink href="" isExternal>                                                 
                            <Flex alignItems="center" m={4}>
                                <Icon as={FaPhoneSquareAlt} boxSize={6} color="green.300" />
                                <Text ml={2}>254 700XXXX</Text>
                            </Flex>
                        </ChakraLink>
                    </Box>

                    <Box
                        maxW="md"
                        borderWidth="2px"
                        borderRadius="lg"
                        overflow="hidden"
                        shadow="md"
                        p={4}
                        borderColor="green.300"
                        boxShadow="0px 24px 34px rgba(80, 79, 89, 0.14)"
                        height="100px"
                        width={['100%', '100%', '100%', '300px', '250px']} 
                        _hover={{
                          transform: 'scale(1.05)',
                        }}
                    >
                        <Link to="">                        
                            <Flex alignItems="center" m={4}>
                                <Icon as={FaEnvelope} boxSize={6} color="green.300" />
                                <Text ml={2}>info@lico.com</Text>
                            </Flex>
                        </Link> 
                    </Box> 

                    <Box
                        maxW="md"
                        borderWidth="2px"
                        borderRadius="lg"
                        overflow="hidden"
                        shadow="md"
                        p={4}
                        borderColor="green.300"
                        boxShadow="0px 24px 34px rgba(80, 79, 89, 0.14)"
                        height="100px"
                        width={['100%', '100%', '100%', '300px', '250px']} 
                        _hover={{
                          transform: 'scale(1.05)',
                        }}
                    >
                        <Link to="">                        
                            <Flex alignItems="center" m={4}>
                                <Icon as={FaFacebook} boxSize={6} color="green.300" />
                                <Text ml={2}>lico kenya</Text>
                            </Flex>
                        </Link> 
                    </Box> 

                    <Box
                        maxW="md"
                        borderWidth="2px"
                        borderRadius="lg"
                        overflow="hidden"
                        shadow="md"
                        p={4}
                        borderColor="green.300"
                        boxShadow="0px 24px 34px rgba(80, 79, 89, 0.14)"
                        height="100px"
                        width={['100%', '100%', '100%', '300px', '250px']} 
                        _hover={{
                          transform: 'scale(1.05)',
                        }}
                    >
                        <Link to="">                        
                            <Flex alignItems="center" m={4}>
                                <Icon as={FaTwitter} boxSize={6} color="green.300" />
                                <Text ml={2}>@lico ke</Text>
                            </Flex>
                        </Link> 
                    </Box>                      
                </Stack>
                </Box>
         </Flex>
    </Flex>    
);
  
};

export default Contact;
