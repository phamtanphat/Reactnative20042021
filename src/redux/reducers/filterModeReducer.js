import {ACTION_TYPE_SET_FILTER_MODE} from '../actions/index';

export default function filterModeReducer(state = null, action) {
  if (action.type === ACTION_TYPE_SET_FILTER_MODE) {
    return action.filterMode;
  }
  return state;
}
