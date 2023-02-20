import { Box, Flex } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout({ children }: any) {
  return (
    <Flex w="full" direction="column" flex="1" minH="100vh">
      <Navbar />
      <Box
        pt={{ base: '100px', lg: '120px' }}
        pb="100px"
        w="full"
        h="full"
        as="main"
        role="main"
        flex="1"
      >
        <Box w="full" h="full" px={{ base: 4, md: 6, lg: 10 }}>
          <Box w="full" maxW="container.xl" mx="auto">
            {children}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
}

export default Layout;
