import { SELECT_SIZE, ADD_TOPPING } from './actionType';

export const selectSize = size => ({
  type: SELECT_SIZE,
  payload: size
});
export const addTopping = topping => ({
  type: ADD_TOPPING,
  payload: topping
});
