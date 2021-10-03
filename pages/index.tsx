import { Flex } from '@chakra-ui/layout';
import type { NextPage } from 'next';
import Cart from '../components/Cart';
import Container from '../components/Container';
import Details from '../components/Details';

const Home: NextPage = () => {
  return (
    <Container>
      <Flex
        py={{ base: 0, md: 10, lg: 20 }}
        w="full"
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default Home;
