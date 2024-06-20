import { Container, Text, VStack, Heading, Box, Image, Link, Flex } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Financial Times</Heading>
          <Text fontSize="lg">Your trusted source for financial news and analysis.</Text>
        </Box>
        
        <Box>
          <Image src="/images/financial-news.jpg" alt="Financial News" borderRadius="md" />
        </Box>
        
        <Box>
          <Heading as="h2" size="lg" mb={4}>Top Stories</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Market Hits All-Time High</Heading>
              <Text mt={2}>The stock market reached an all-time high today, driven by strong earnings reports and economic data.</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Cryptocurrency Regulation</Heading>
              <Text mt={2}>New regulations are being proposed to govern the cryptocurrency market, aiming to protect investors and reduce fraud.</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Tech Stocks on the Rise</Heading>
              <Text mt={2}>Tech stocks are seeing significant gains as companies report better-than-expected earnings and growth projections.</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
          </VStack>
        </Box>
        
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>Follow Us</Heading>
          <Flex justify="center" spacing={4}>
            <Link href="https://twitter.com" isExternal mx={2}>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://facebook.com" isExternal mx={2}>
              <FaFacebook size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal mx={2}>
              <FaLinkedin size="24px" />
            </Link>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;