import {
  Button,
  Checkbox,
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
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

export const ActivityManager = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-end">
      <HStack alignSelf="flex-end">
        <ColorModeSwitcher />
      </HStack>
      <VStack spacing={3}>
        <Image
          alt="image"
          src="https://th.bing.com/th/id/R.c4334baba71a39e82c2b141f43777145?rik=uPYV4ft2WuWFFQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_233291.png&ehk=ct%2blPQ8K7WhEwuWDOcyMJw87BXZ6CbQzx5Oc0e9Wx1s%3d&risl=&pid=ImgRaw&r=0"
        />
        <Heading alignSelf="flex-start" size="xl">
          Pet Activity Tracker
        </Heading>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Choose an activity</FormLabel>
            <Select>
              <option value="Meal">Meal</option>
              <option value="Medicine">Medicine</option>
              <option value="Misc">Misc</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Add Note</FormLabel>
            <Input placeholder="Enter additional info" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <HStack>
            <Button size="lg" w="full">
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
