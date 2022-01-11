import {
  ADD_ACTIVITY,
  CLEAR_CURRENT,
  DELETE_ACTIVITY,
  SET_CURRENT,
  UPDATE_ACTIVITIES,
} from '../types';

import ActivityContext from './activityContext';
import activityReducer from './activityReducer';
import { useReducer } from 'react';

export const ActivityState = props => {
  const initialState = {
    activities: [{}, {}, {}],
  };
};
