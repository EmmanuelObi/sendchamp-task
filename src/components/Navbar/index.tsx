import { Box, BoxProps, Container, useBreakpointValue } from '@chakra-ui/react';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

function Navbar(props: BoxProps) {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box
      w="100vw"
      h={{ base: '70px', lg: '84px' }}
      px={{ base: 1, md: 6, lg: 10 }}
      role="navigation"
      position="fixed"
      zIndex="banner"
      bg="#EEF4FF"
      {...props}
    >
      <Container
        w="full"
        h="full"
        maxW="container.xl"
        py="1rem"
        px={{ base: 4, md: 0 }}
      >
        {isDesktop ? <DesktopNav /> : <MobileNav />}
      </Container>
    </Box>
  );
}

export default Navbar;
