import { UnlockIcon } from '@chakra-ui/icons';
import {
  Card,
  CardBody,
  CardFooter,
  GridItem,
  VStack,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  Grid,
  chakra,
  Tag,
  Box,
} from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { valuePackages } from '../data';
import { valueModalData, valueModalState } from '../state/atoms';

const ValueCards = () => {
  const setIsOpen = useSetRecoilState(valueModalState);
  const setValueModalData = useSetRecoilState(valueModalData);
  const onOpenModal = () => setIsOpen(true);

  const handleModalData = (body: any) => {
    setValueModalData(body);
    onOpenModal();
  };
  return (
    <VStack
      w="90%"
      py="10"
      mt={{ base: '10', lg: '-24' }}
      px={{ base: 1, md: 6, lg: 10 }}
      mx="auto"
      mb="20"
    >
      <Grid
        w="full"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        flexWrap="wrap"
        gap={6}
      >
        {valuePackages.map((item, id) => (
          <GridItem w="100%" key={id}>
            <Card
              maxW="sm"
              border="0.5px solid"
              borderColor="#197EEF"
              minH="320px"
            >
              <CardBody>
                <Stack mt="6" spacing="3" px="4">
                  <Box
                    bg="#197EEF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    w="60px"
                    h="60px"
                    rounded="lg"
                  >
                    <UnlockIcon width="25px" height="25px" color="white" />
                  </Box>
                  <Heading size="md">{item.valueName}</Heading>
                  <Text
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <chakra.span fontSize={{ base: 'sm', lg: 'lg' }}>
                      {item.preText}
                    </chakra.span>
                    <chakra.span fontSize={{ base: 'sm', lg: 'lg' }}>
                      {item.postText}
                    </chakra.span>
                  </Text>
                  <Text
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <chakra.span fontWeight="medium">{item.value}</chakra.span>
                    <chakra.span>
                      {item.isTag && (
                        <Tag
                          size="md"
                          variant="solid"
                          bg="rgba(25, 126, 239, 0.08)"
                          color="#197EEF"
                          fontSize="xs"
                          fontWeight="light"
                        >
                          Coming Soon
                        </Tag>
                      )}
                    </chakra.span>
                  </Text>
                </Stack>
              </CardBody>
              {item.hasMore && (
                <>
                  <Divider color="#197EEF" />
                  <CardFooter display="flex" justify="center">
                    <Button
                      variant="unstyled"
                      colorScheme="blue"
                      textDecoration="underline"
                      color="#197EEF"
                      textAlign="center"
                      onClick={() => handleModalData(item)}
                    >
                      More Details
                    </Button>
                  </CardFooter>
                </>
              )}
            </Card>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
};

export default ValueCards;
