import { Center, VStack } from '@chakra-ui/react';

import { ActivityCard } from './ActivityCard';
import { ActivityManager } from './ActivityManager';
import { useState } from 'react';

const activities = [
  {
    activity: 'Meal',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: Date(),
  },
];

function App() {
  const [date, setDate] = useState('');
  const [activity, setActivity] = useState('');
  const [note, setNote] = useState('');

  const handleGetActivity = activity => {
    console.log(activity.date);
    setDate(activity.date);
    console.log(activity.note);
    setNote(activity.note);
    console.log(activity.selector);
    setActivity(activity.selector);
    const newActivities = {
      ...activities,
      date,
      activity,
      note,
    };
    activities.push(newActivities);
  };
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
