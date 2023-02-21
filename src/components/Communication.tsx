import { VStack, Text, HStack, Button } from '@chakra-ui/react';

const Communication = () => {
  return (
    <VStack w="full" py="24">
      <Text
        fontSize={{ base: '2xl', lg: '4xl' }}
        color="black"
        fontWeight="bold"
        textAlign="center"
        wordBreak="break-word"
        lineHeight="45px"
        w={{ base: '80%', lg: '50%' }}
      >
        Start building better communication experience with Sendchamp
      </Text>
      <Text
        py="5"
        fontSize={{ base: 'md', lg: 'lg' }}
        color="black"
        fontWeight="light"
        textAlign="center"
        wordBreak="break-word"
        w={{ base: '90%', lg: '50%' }}
      >
        Access a platform that is modernizing communications and making it
        possible for your customers to communicate with your business the same
        way they do with their friends and family.
      </Text>
      <HStack
        w="full"
        justifyContent="center"
        alignItems="center"
        spacing={{ base: '4', lg: '6' }}
        py="10"
      >
        <Button
          bg="#2887f0"
          fontWeight="medium"
          textTransform="none"
          rounded="md"
          color="white"
          fontSize="md"
          _hover={{ bg: '#197EEF' }}
          h="50px"
        >
          Start For Free
        </Button>
        <Button
          bg="#fff"
          border="1px solid gray"
          fontWeight="medium"
          textTransform="none"
          rounded="md"
          color="gray.600"
          fontSize="md"
          _hover={{ bg: '#fff' }}
          h="50px"
        >
          Talk To Sales
        </Button>
      </HStack>
    </VStack>
  );
};

export default Communication;
