import { Center, VStack } from '@chakra-ui/react';

import { ActivityCard } from './ActivityCard';
import { ActivityManager } from './ActivityManager';

const activities = [
  {
    activity: 'Meal',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    date: Date(),
  },
  {
    activity: 'Meal',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: Date(),
  },
  {
    activity: 'Meal',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: Date(),
  },
  {
    activity: 'Meal',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: Date(),
  },
];

function App() {
  return (
    <Center>
      <VStack height="100%" width="500px">
        <ActivityManager />
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
