import { Flex } from '@chakra-ui/react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <Flex // alternative is chakra component: <ChakraContainer maxW="container.xl" p={0}>...
      direction="column"
      justifyContent="center"
      alignItems="center"
      maxW="container.xl"
      marginX="auto"
    >
      {children}
    </Flex>
  );
};

export default Container;
