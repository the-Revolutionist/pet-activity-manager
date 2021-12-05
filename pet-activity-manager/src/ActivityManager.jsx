import {
  Button,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  Heading,
  Image,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import paw from './paw.png';

export const ActivityManager = () => {
  const toast = useToast();
  const handleClick = () => {
    toast({
      title: 'Updated',
      description: 'New Activity Added to List',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <VStack
      bgColor="grey"
      opacity="0.9"
      w="full"
      borderColor="transparent"
      borderWidth={1}
      borderRadius="10px"
      h="100%"
      p={10}
      spacing={10}
      alignItems="flex-end"
      boxShadow="3px 3px 10px tomato"
    >
      <HStack alignSelf="flex-end">
        <ColorModeSwitcher />
      </HStack>
      <VStack spacing={3}>
        <Image
          alt="image"
          paddingBottom="15px"
          //src="https://th.bing.com/th/id/R.c4334baba71a39e82c2b141f43777145?rik=uPYV4ft2WuWFFQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_233291.png&ehk=ct%2blPQ8K7WhEwuWDOcyMJw87BXZ6CbQzx5Oc0e9Wx1s%3d&risl=&pid=ImgRaw&r=0"
          src={paw}
        />
        <Heading alignSelf="center" size="xl">
          Pet Activity Tracker
        </Heading>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Choose an activity:</FormLabel>
            <Select focusBorderColor="tomato">
              <option value="">Choices</option>
              <option value="Meal">Meal</option>
              <option value="Medicine">Medicine</option>
              <option value="Misc">Misc</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <Text>TIme</Text>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Add Note:</FormLabel>
            <Input
              focusBorderColor="tomato"
              placeholder="Enter additional info"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <HStack>
            <Button size="lg" w="full" onClick={handleClick}>
              Add Activity
            </Button>
            <Button size="lg" w="full">
              Clear Form
            </Button>
          </HStack>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};
