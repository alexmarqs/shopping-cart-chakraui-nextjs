import {
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue
} from '@chakra-ui/react';

export const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  // by default VStack has alignItems center
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={5} alignItems="flex-start">
        <Heading size="2xl">Your details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
      <SimpleGrid w="full" columns={2} columnGap={3} rowGap={6}>
        <GridItem colSpan={colSpan}>
          <FormControl id="first-name">
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Alex" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl id="last-name">
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Marques" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl id="address">
            <FormLabel>Adress</FormLabel>
            <Input placeholder="Av. Liberdade XX" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl id="city">
            <FormLabel htmlFor="city">City</FormLabel>
            <Input placeholder="Lisbon" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl id="country">
            <FormLabel>Country</FormLabel>
            <Select placeholder="Select country" defaultValue="pt">
              <option value="pt">🇵🇹 Portugal</option>
              <option value="de">🇩🇪 Germany</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address.</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button variant="primary" size="lg" w="full">
            Order now
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
