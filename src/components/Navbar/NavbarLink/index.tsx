import { chakra, Link } from '@chakra-ui/react';

import { NavLink as RouterLink } from 'react-router-dom';
import { TNavbarLink } from '../../../types/nav';

type NavbarLinkProps = TNavbarLink;

export function NavbarLink({ label, to }: NavbarLinkProps) {
  return (
    <chakra.li>
      <Link
        to={to}
        as={RouterLink}
        fontWeight="light"
        textTransform="capitalize"
        textDecoration="none"
        fontSize="15px"
        _hover={{ textDecoration: 'none' }}
        _activeLink={{ color: 'blue.500' }}
      >
        {label}
      </Link>
    </chakra.li>
  );
}
