import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';

import { ReactComponent as LogoSVG } from '../../assets/images/sendchampLogo.svg';

import { HamburgerIcon } from '@chakra-ui/icons';

import MenuFlyout from './MenuFlyout';

function MobileNav() {
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  return (
    <>
      <HStack w="full" h="full" justify="space-between" align="center">
        <LogoSVG width="200px" />
        <IconButton
          aria-label="open nav"
          variant="ghost"
          bg="blue.50"
          size="sm"
          rounded="lg"
          icon={<HamburgerIcon width="18px" height="18px" />}
          onClick={onDrawerOpen}
        />

        <Drawer
          isOpen={isDrawerOpen}
          placement="bottom"
          onClose={onDrawerClose}
          size={{ base: 'full' }}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody>
              <MenuFlyout trigger={onDrawerClose} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </>
  );
}

export default MobileNav;
