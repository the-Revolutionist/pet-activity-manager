import { Center, VStack } from '@chakra-ui/react';

import { ActivityList } from './ActivityList';
import { ActivityManager } from './ActivityManager';
import React from 'react';

function App() {
  return (
    <Center>
      <VStack height="100%" width="500px">
        <ActivityManager />
        <ActivityList />
      </VStack>
    </Center>
  );
}

export default App;
