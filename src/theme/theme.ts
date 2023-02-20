import {
  defineStyleConfig,
  extendTheme,
  theme as baseTheme,
  ThemeComponents,
  ThemeConfig,
  withDefaultColorScheme,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

const components: ThemeComponents = {
  Button: defineStyleConfig({
    baseStyle: {
      fontWeight: 'normal',
      textTransform: 'capitalize',
    },
    defaultProps: {
      size: 'md',
      variant: 'solid',
    },
  }),
};

const colors = {
  lightblue: {
    100: '#2887f0',
  },
  blue: {
    50: '#E9EBFB',
    100: '#C1C6F5',
    200: '#9AA2EF',
    300: '#727EE9',
    400: '#4B5AE2',
    500: '#2335DB',
    600: '#1C2BB0',
    700: '#152084',
    800: '#0E1558',
    900: '#070B2C',
  },
  darkBlue: {
    50: '#ECF0F9',
    100: '#C9D4EE',
    200: '#A6B8E3',
    300: '#839CD8',
    400: '#6080CD',
    500: '#1B2C55',
    600: '#31509B',
    700: '#253C74',
    800: '#19284D',
    900: '#0C1427',
  },
};

const theme = extendTheme(
  {
    config,
    components: {
      ...components,
    },
    colors,
    fonts: {
      heading: `DM Sans, ${baseTheme.fonts.heading}`,
      body: `DM Sans, ${baseTheme.fonts.body}`,
    },
  },
  withDefaultColorScheme({
    colorScheme: 'lightblue',
  })
);

export default theme;
