import { Center, VStack } from '@chakra-ui/react';

import { ActivityCard } from './ActivityCard';
import { ActivityManager } from './ActivityManager';

const activities = [
  {
    id: 1,
    title: 'Toilet Paper',
    amount: 94.12,
    date: Date(),
  },
  {
    id: 2,
    title: 'New TV',
    amount: 799.99,
    date: Date(),
  },
  {
    id: 3,
    title: 'Car Insurance',
    amount: 294.67,
    date: Date(),
  },
  {
    id: 4,
    title: 'New Desk',
    amount: 450,
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
            title={activity.title}
            date={activity.date}
            amount={activity.amount}
          />
        ))}
      </VStack>
    </Center>
  );
}

export default App;
