import { Center, VStack } from '@chakra-ui/react';

import { ActivityCard } from './ActivityCard';
import { ActivityManager } from './ActivityManager';

const activities = [
  {
    activity: 'Meal',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: Date(),
  },
];

const handleGetActivity = activity => {
  console.log(activity.date);
  console.log(activity.note);
  console.log(activity.selector);
};

function App() {
  return (
    <Center margin="20px">
      <VStack height="100%" width="500px">
        <ActivityManager
          activities={activities}
          getActivity={handleGetActivity}
        />
        {activities.map(activity => (
          <ActivityCard
            activity={activity.activity}
            date={activity.date}
            note={activity.note}
          />
        ))}
      </VStack>
    </Center>
  );
}

export default App;
