import {
  VStack,
  Heading,
  Text,
  Box,
  HStack,
  Stack,
  Divider,
  Button,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { Image } from './Image';
import React from 'react';
import surfBoardsImage from '../public/images/surf-boards-unsplash.jpg';

export const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack spacing={5} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If price is too hard on your eyes,{' '}
          <Button
            onClick={toggleColorMode}
            variant="link"
            fontWeight="bold"
            colorScheme="dark"
          >
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack w="full" spacing={6} alignItems="center">
        <Image
          transition="ease-out"
          transitionProperty="all"
          transitionDuration="normal"
          _hover={{ transform: 'scale(1.1, 1.1)' }}
          placeholder="blur"
          src={surfBoardsImage}
          width="100px"
          priority={true}
          height="100px"
          alt="surf-boards"
        />
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Heading size="md" fontWeight="bold">
              Penny board
            </Heading>
            <Text color={secondaryTextColor}>PNYCOMP27541</Text>
          </Box>
          <Text fontWeight="bold">€119.00</Text>
        </Stack>
      </HStack>
      <VStack spacing={4} w="full" alignItems="stretch">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">€119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">€19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes</Text>
          <Heading size="sm">€23.80</Heading>
        </HStack>
      </VStack>

      <Divider borderColor="gray.300" />
      <HStack w="full" justifyContent="space-between">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="md">€162.79</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
