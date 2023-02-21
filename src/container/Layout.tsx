import { Box, Flex } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout({ children }: any) {
  return (
    <Flex
      w="full"
      direction="column"
      flex="1"
      minH="100vh"
      align="flex-start"
      justify="flex-start"
    >
      <Navbar />
      <Box pt="70px" w="full" h="full" as="main" role="main" flex="1">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}

export default Layout;
