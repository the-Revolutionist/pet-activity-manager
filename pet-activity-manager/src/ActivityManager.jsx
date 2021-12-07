import {
  Badge,
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
import { useState } from 'react';

export const ActivityManager = (props, { activities }) => {
  const [enteredActivity, setEnteredActivity] = useState('');
  const [enteredNote, setEnteredNote] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const toast = useToast();
  const handleAddActivity = e => {
    toast({
      title: 'Updated',
      description: 'New Activity Added to List',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };
  const getDate = () => {
    const month = new Date().toLocaleString('default', { month: 'long' });
    const day = new Date().getDate();
    const year = new Date().getFullYear();
    return day + '/' + month + '/' + year;
  };

  console.log(getDate());

  const handleSelectChange = e => {
    setEnteredActivity(e.target.value);
  };
  const handleNoteChange = e => {
    setEnteredNote(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setEnteredDate(getDate());
    const submittedData = {
      activity: enteredActivity,
      note: enteredNote,
      date: enteredDate,
    };
    props.addActivity(submittedData);
    setEnteredActivity('');
    setEnteredDate('');
    setEnteredNote('');
  };
  const handleFormClear = e => {};
  return (
    <form onSubmit={handleSubmit}>
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
              <Select
                value={enteredActivity}
                placeholder="Select"
                size="md"
                focusBorderColor="tomato"
                onChange={handleSelectChange}
              >
                <option value="Meal">Meal</option>
                <option value="Medicine">Medicine</option>
                <option value="Misc">Misc</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1} paddingLeft={2} display="flex">
            <FormControl alignItems="center">
              <Text paddingBottom={2}>Date</Text>
              <Badge
                variant="solid"
                //color="tomato"
                fontSize="24px"
                alignContent="center"
                justifyItems="baseline"
              >
                {enteredDate}
              </Badge>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Add Note:</FormLabel>
              <Input
                value={enteredNote}
                onChange={handleNoteChange}
                focusBorderColor="tomato"
                placeholder="Enter additional info"
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <HStack>
                <Button
                  type="submit"
                  size="lg"
                  w="full"
                  onClick={handleAddActivity}
                >
                  Add Activity
                </Button>
                <Button size="lg" w="full" onClick={handleFormClear}>
                  Clear Form
                </Button>
              </HStack>
            </FormControl>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </form>
  );
};
