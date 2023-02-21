import { VStack, Text, HStack } from '@chakra-ui/react';
import CountrySelect from './CountrySelect';

const HeroBanner = () => {
  return (
    <VStack w="full" bg="#EEF4FF" py="24">
      <Text
        fontSize={{ base: '4xl', lg: '5xl' }}
        color="black"
        fontWeight="medium"
        lineHeight={{ base: '38px', lg: '48px' }}
        textAlign="center"
        wordBreak="break-word"
      >
        Pricing for every <br /> business
      </Text>
      <Text
        py={{ base: '5', lg: '10' }}
        fontSize={{ base: 'md', lg: 'lg' }}
        color="black"
        fontWeight="light"
        textAlign="center"
        wordBreak="break-word"
        w={{ base: '90%', lg: 'full' }}
      >
        No hidden fees or charges - simple & flexible pricing that fits with
        your <br /> business at any stage.
      </Text>
      <HStack
        w="full"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <CountrySelect maxW="300px" h="60px" fontSize="lg" my="3" />
        <CountrySelect maxW="300px" h="60px" fontSize="lg" my="3" />
      </HStack>
    </VStack>
  );
};

export default HeroBanner;
