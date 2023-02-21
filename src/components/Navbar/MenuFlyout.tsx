import {
  Container,
  HStack,
  VStack,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  chakra,
} from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/react';

import { ReactComponent as LogoSVG } from '../../assets/images/sendchampLogo.svg';
import { companyItems, developerItems, useCaseItems } from './navbarItems';

function MenuFlyout({ trigger }: { trigger: any }) {
  return (
    <Container w="full" centerContent>
      <VStack
        w="full"
        h="95vh"
        justify="space-evenly"
        align="start"
        position="absolute"
        top="0"
        bg="white"
        left="0"
        spacing="0"
        overflowY="scroll"
      >
        <HStack
          position="fixed"
          top={{ base: '5', md: '10' }}
          w="full"
          justifyContent="space-between"
          alignItems="center"
          px={{ base: '5', lg: '10' }}
          py={{ base: '5', md: '10' }}
          borderBottom={{ base: 'none', lg: '1px solid lightgray' }}
        >
          <LogoSVG width="200px" />
          <CloseButton
            bg="#2335DB0F"
            color="#2335DB"
            alignSelf="flex-start"
            mb="1vh"
            onClick={trigger}
          />
        </HStack>

        <VStack
          w="full"
          position="fixed"
          top="20vh"
          h="50vh"
          justify="space-evenly"
          align="start"
          spacing="0"
          overflowY="scroll"
        >
          <Accordion w="full" allowToggle h="full">
            <AccordionItem w="full">
              <h2>
                <AccordionButton h="50px">
                  <Box fontSize="xs" as="span" flex="1" textAlign="left">
                    PRODUCTS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                bg="#EEF4FF"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
              >
                <chakra.p fontSize="xs" w="50%" my="2">
                  SMS
                </chakra.p>
                <chakra.p fontSize="xs" w="50%" my="2">
                  Email
                </chakra.p>
                <chakra.p fontSize="xs" w="50%" my="2">
                  Whatsapp
                </chakra.p>
                <chakra.p fontSize="xs" w="50%" my="2">
                  Voice
                </chakra.p>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem w="full">
              <h2>
                <AccordionButton h="50px">
                  <Box fontSize="xs" as="span" flex="1" textAlign="left">
                    DEVELOPERS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                bg="#EEF4FF"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
              >
                {developerItems.map((item, id) => (
                  <chakra.p key={id} fontSize="xs" w="50%" my="2">
                    {item.label}
                  </chakra.p>
                ))}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem w="full">
              <h2>
                <AccordionButton h="50px">
                  <Box fontSize="xs" as="span" flex="1" textAlign="left">
                    COMPANIES
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                bg="#EEF4FF"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
              >
                {companyItems.map((item, id) => (
                  <chakra.p key={id} fontSize="xs" w="50%" my="2">
                    {item.label}
                  </chakra.p>
                ))}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem w="full">
              <h2>
                <AccordionButton h="50px">
                  <Box fontSize="xs" as="span" flex="1" textAlign="left">
                    USE CASES
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                bg="#EEF4FF"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
              >
                {useCaseItems.map((item, id) => (
                  <chakra.p key={id} fontSize="xs" w="50%" my="2">
                    {item.label}
                  </chakra.p>
                ))}
              </AccordionPanel>
            </AccordionItem>
            <chakra.h2
              h="50px"
              px="4"
              pt="3"
              borderBottom="1px solid lightgray"
            >
              <Box fontSize="xs" as="span" flex="1" textAlign="left">
                PRICING
              </Box>
            </chakra.h2>
          </Accordion>
        </VStack>

        <VStack w="full" spacing="3" position="fixed" bottom="3">
          <Button
            bg="#fff"
            fontWeight="medium"
            textTransform="none"
            rounded="md"
            color="black"
            fontSize="sm"
            _hover={{ bg: 'none' }}
            w="90%"
            h="50px"
            border="1px solid black"
          >
            Login
          </Button>
          <Button
            bg="#2887f0"
            fontWeight="medium"
            textTransform="none"
            rounded="md"
            color="white"
            fontSize="sm"
            _hover={{ bg: '#197EEF' }}
            w="90%"
            h="50px"
          >
            Get Started
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
}

export default MenuFlyout;
