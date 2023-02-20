import { chakra, HStack } from '@chakra-ui/react';
import { ReactComponent as LogoSVG } from '../../assets/images/sendchampLogo.svg';
import { Link } from 'react-router-dom';

import MyButton from './LoginButton';
import { companyItems, developerItems, useCaseItems } from './navbarItems';
import { NavbarLink } from './NavbarLink';
import { NavbarMenuLink } from './NavbarLink/NavbarLinkMenuItem';

function DesktopNav() {
  return (
    <HStack w="full" h="full" align="center" justify="space-between">
      <Link to="/">
        <LogoSVG width="200px" />
      </Link>

      <chakra.nav h="full">
        <HStack
          as="ul"
          listStyleType="none"
          spacing="12"
          h="full"
          align="center"
        >
          <NavbarLink label="Product" to="/pricing" />
          <NavbarMenuLink label="Developers" items={developerItems} />
          <NavbarMenuLink label="Company" items={companyItems} />
          <NavbarMenuLink label="Use Cases" items={useCaseItems} />
          <NavbarLink label="pricing" to="/pricing" />
        </HStack>
      </chakra.nav>
      <chakra.nav display={{ base: 'none', xl: 'block' }}>
        <HStack
          as="ul"
          listStyleType="none"
          spacing="4"
          h="full"
          align="center"
        >
          <NavbarLink label="Login" to="/login" />

          <chakra.li>
            <MyButton />
          </chakra.li>
          <chakra.li
            style={{
              display: 'inline-block',
              fontSize: '1.7em',
              lineHeight: '1em',
              verticalAlign: 'middle',
            }}
          >
            🇳🇬
          </chakra.li>
        </HStack>
      </chakra.nav>
    </HStack>
  );
}

export default DesktopNav;
