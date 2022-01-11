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
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';

import ActivityContext from '../src/context/activity/activityContext';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import paw from '../src/images/paw.png';

export const ActivityManager = ({ addActivity }) => {
  const activityContext = useContext(ActivityContext);
  const [activity, setActivity] = useState({
    activity: '',
    note: '',
    date: Date.now().toLocaleString(),
  });
  const [id, setId] = useState('');
  const [enteredActivity, setEnteredActivity] = useState('');
  const [enteredNote, setEnteredNote] = useState('');
  const [enteredDate, setEnteredDate] = useState(
    new Date().toLocaleDateString()
  );
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

  const handleSelectChange = e => {
    setEnteredActivity(e.target.value);
  };
  const handleNoteChange = e => {
    setEnteredNote(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const submittedData = {
      id: Math.random().toString(),
      activity: enteredActivity,
      note: enteredNote,
      date: enteredDate,
    };
    addActivity(submittedData);
    setId('');
    setEnteredActivity('');
    setEnteredNote('');
  };
  const handleFormClear = e => {
    setEnteredActivity('');
    setEnteredNote('');
  };
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
        boxShadow="5px 5px 10px #3f3f3f"
      >
        <HStack alignSelf="flex-end">
          <ColorModeSwitcher />
        </HStack>

        <VStack spacing={3}>
          <Image alt="image" paddingBottom="15px" src={paw} />
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
              <FormLabel>Date:</FormLabel>
              <Badge
                variant="solid"
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
