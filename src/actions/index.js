import axios from 'axios';
import { FETCH_USERS } from "./types";

export const fetchUsers = (callback) => async dispatch => {
  const resp = await axios.get('https://randomuser.me/api/?nat=us&results=200&seed=0b1d37f7e15e392d');

  dispatch({
    type: FETCH_USERS,
    payload: resp.data
  });
};