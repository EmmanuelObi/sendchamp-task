import { VStack, Text, HStack } from '@chakra-ui/react';
import CountrySelect from './CountrySelect';

const HeroBanner = () => {
  return (
    <VStack w="full" bg="#EEF4FF" py="16">
      <Text
        fontSize="5xl"
        color="black"
        fontWeight="medium"
        lineHeight="52px"
        textAlign="center"
        wordBreak="break-word"
      >
        Pricing for every <br /> business
      </Text>
      <Text
        py="10"
        fontSize="lg"
        color="black"
        fontWeight="light"
        textAlign="center"
        wordBreak="break-word"
      >
        No hidden fees or charges - simple & flexible pricing that fits with
        your <br /> business at any stage.
      </Text>
      <HStack w="full" justifyContent="center" alignItems="center">
        <CountrySelect />
        <CountrySelect />
      </HStack>
    </VStack>
  );
};

export default HeroBanner;
