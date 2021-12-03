import { Center, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

import { ActivityList } from './ActivityList';
import { ActivityManager } from './ActivityManager';

const activityPicked = 'meal';
const timeStamp = Date.now();
const note =
  'nim pariatur cliche reprehenderit, ' +
  'enim eiusmod high life accusamus terry richardson' +
  ' ad squid. Nihil anim keffiyeh helvetica, craft beer' +
  ' labore wes anderson cred nesciunt sapiente ea proident.';

const items = {
  activity: {
    activityPicked,
    timeStamp,
    note,
  },
};

function App() {
  const [activity, setActivity] = useState();

  return (
    <Center>
      <VStack height="100%" width="500px">
        <ActivityManager />
        <ActivityList item={items} />
      </VStack>
    </Center>
  );
}

export default App;
