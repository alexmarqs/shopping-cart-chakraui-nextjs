import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultVariant,
  theme as base,
  ThemeConfig
} from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'brand.500'
        }
      }
    }
  },
  sizes: {
    md: {
      field: {
        borderRadius: 'none'
      }
    }
  }
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.500'
  }
};

const theme = extendTheme(
  {
    config,
    colors: {
      brand: {
        50: '#f5fee5',
        100: '#e1fbb2',
        200: '#cdf781',
        300: '#b8ee56',
        400: '#a2e032',
        500: '#8ac919',
        600: '#71ab09',
        700: '#578602',
        800: '#3c5e00',
        900: '#203300'
      }
    },
    fonts: {
      heading: `Inter, ${base.fonts.heading}`,
      body: `Inter, ${base.fonts.body}`
    },
    components: {
      Button: {
        variants: {
          primary: (props: StyleFunctionProps) => ({
            rounded: 'none',
            color: mode('white', 'gray.800')(props),
            ...brandRing,
            backgroundColor: mode('brand.500', 'brand.200')(props),
            _hover: {
              backgroundColor: mode('brand.600', 'brand.300')(props)
            },
            _active: {
              backgroundColor: mode('brand.700', 'brand.400')(props)
            }
          })
        }
      },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: 'none',
            ...brandRing
          }
        }
      }
    }
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox']
  }),
  withDefaultVariant({
    variant: 'filled',
    components: ['Select', 'Input']
  })
);

export default theme;
