import { Center, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { ActivityCard } from './ActivityCard';
import { ActivityList } from './ActivityList';
import { ActivityManager } from './ActivityManager';

const activities = [
  {
    id: 4,
    checked: false,
    item: 'cookies',
    time: Date(),
  },
  {
    id: 5,
    checked: false,
    item: 'pet food',
    time: Date(),
  },
  {
    id: 6,
    checked: false,
    item: 'meal',
    time: Date(),
  },
];

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(activities);
    return () => {};
  }, [items]);
  return (
    <Center>
      <VStack height="100%" width="500px">
        <ActivityManager items={items} />
        <ActivityCard item={items} />
      </VStack>
    </Center>
  );
}

export default App;
