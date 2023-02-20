import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  chakra,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemProps,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';
import { TNavbarLink } from '../../../types/nav';
import uuid from 'react-uuid';

function NavbarLinkMenuItem({
  children,
  url,
  ...rest
}: MenuItemProps & { url: string }) {
  return (
    <MenuItem
      py="3"
      color="darkBlue.500"
      fontWeight="light"
      fontSize="12px"
      textTransform="capitalize"
      as={RouterLink}
      to={url}
      _hover={{
        bg: 'none',
        color: 'darkBlue.600',
      }}
      _focus={{
        bg: 'none',
      }}
      {...rest}
    >
      {children}
    </MenuItem>
  );
}

type Props = {
  label: string;
  items: TNavbarLink[];
};

export function NavbarMenuLink({ label, items }: Props) {
  return (
    <chakra.li>
      <Menu>
        <MenuButton
          as={Button}
          variant="link"
          fontWeight="light"
          textTransform="capitalize"
          textDecoration="none"
          color="black"
          _hover={{
            textDecoration: 'none',
          }}
          fontSize="15px"
        >
          {label} <ChevronDownIcon />
        </MenuButton>

        <MenuList
          border="none"
          shadow="2px 4px 4px 2px rgba(0, 0, 0, 0.1)"
          rounded="lg"
          p="3"
        >
          <Text color="gray" p="3" fontSize="12px">
            {' '}
            {label}
          </Text>
          {items.map((item) => (
            <NavbarLinkMenuItem url={item.to} key={uuid()}>
              {item.label}
            </NavbarLinkMenuItem>
          ))}
        </MenuList>
      </Menu>
    </chakra.li>
  );
}
