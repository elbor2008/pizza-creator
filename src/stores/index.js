import { createStore } from 'redux';
import pizzaReducer from './pizzaReducer';

export default createStore(pizzaReducer);