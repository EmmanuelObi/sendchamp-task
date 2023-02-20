import { chakra, Link, shouldForwardProp } from '@chakra-ui/react';
import { AnimatePresence, isValidMotionProp, motion } from 'framer-motion';
import React, { ReactElement } from 'react';
import { NavLink, useMatch } from 'react-router-dom';

const MotionText = chakra(motion.p, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
type Props = {
  isOpen: boolean;
  label: string;
  url: string;
  onClick?(): void;
  icon?: ReactElement;
  darkIcon?: ReactElement;
};
function MenuItem({ isOpen, label, url, onClick, icon, darkIcon }: Props) {
  const isActive = useMatch(url);
  return (
    <Link
      textDecoration="none"
      transition="all .4s"
      _hover={{ textDecoration: 'none', '&:not(.active)': { bg: 'gray.50' } }}
      flexShrink="0"
      w="90%"
      h="100px"
      rounded="lg"
      display="flex"
      flexDirection="row"
      justifyContent={'center'}
      alignItems="center"
      as={NavLink}
      to={url}
      color="darkBlue.500"
      _activeLink={{
        bg: '#2335DB0F',
        color: '#2335DB',
      }}
      onClick={onClick}
    >
      {isActive ? icon : darkIcon}
      <AnimatePresence initial={false}>
        <MotionText
          initial={{ opacity: 0, fontSize: '0px' }}
          animate={{
            opacity: 1,
            fontSize: '14px',
            marginLeft: '12px',
            transition: { delay: 0.23 },
          }}
          fontWeight="medium"
        >
          {label}
        </MotionText>
      </AnimatePresence>
    </Link>
  );
}

export default MenuItem;
