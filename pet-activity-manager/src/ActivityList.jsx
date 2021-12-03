import { ActivityCard } from './ActivityCard';

export const ActivityList = ({ note, time, activity }) => {
  return (
    <>
      <ul>
        <ActivityCard note={note} activity={activity} time={time} />
      </ul>
    </>
  );
};
