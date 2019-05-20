import _ from 'lodash';
import { FETCH_USERS } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_USERS:
      return _.mapKeys(action.payload.results, 'login.uuid');
    default:
      return state;
  }
}
