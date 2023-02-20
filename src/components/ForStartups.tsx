import { VStack, Text, Button } from '@chakra-ui/react';

const ForStartups = () => {
  return (
    <VStack w="full" bg="#EEF4FF" py="24">
      <Text
        fontSize="4xl"
        color="black"
        fontWeight="bold"
        textAlign="center"
        wordBreak="break-word"
      >
        Sendchamp for Startups
      </Text>
      <Text
        pt="5"
        pb="8"
        fontSize="lg"
        color="black"
        fontWeight="light"
        textAlign="center"
        wordBreak="break-word"
      >
        Apply for $1,000 in credits, if you are a startup that is less than 3
        years <br /> old with less than $500k in total funding.
      </Text>
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
        Apply Now
      </Button>
    </VStack>
  );
};

export default ForStartups;
