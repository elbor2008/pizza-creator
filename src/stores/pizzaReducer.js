import { SELECT_SIZE, ADD_TOPPING } from './actionType';
import anchovy from '../assets/anchovy.svg';
import bacon from '../assets/bacon.svg';
import base from '../assets/base.svg';
import basil from '../assets/basil.svg';
import board from '../assets/board.svg';
import chili from '../assets/chili.svg';
import mozzarella from '../assets/mozzarella.svg';
import mushroom from '../assets/mushroom.svg';
import olive from '../assets/olive.svg';
import onion from '../assets/onion.svg';
import pepper from '../assets/pepper.svg';
import pepperoni from '../assets/pepperoni.svg';
import prawn from '../assets/prawn.svg';
import sweetcorn from '../assets/sweetcorn.svg';
import tomato from '../assets/tomato.svg';

const initialState = {
  sizes: [
    { percentage: 60, text: 'Large (13")', price: 13.99 },
    { percentage: 50, text: 'Medium (11")', price: 11.99 },
    { percentage: 40, text: 'Small (9")', price: 9.99 }
  ],
  selectedSize: { percentage: 60, text: 'Large (13")', price: 13.99 },
  toppings: [
    {
      name: 'anchovy',
      url: anchovy,
      price: 0.99
    },
    {
      name: 'bacon',
      url: bacon,
      price: 0.99
    },
    {
      name: 'base',
      url: base,
      price: 0.99
    },
    {
      name: 'basil',
      url: basil,
      price: 0.99
    },
    {
      name: 'board',
      url: board,
      price: 0.99
    },
    {
      name: 'chili',
      url: chili,
      price: 0.99
    },
    {
      name: 'mozzarella',
      url: mozzarella,
      price: 0.99
    },
    {
      name: 'mushroom',
      url: mushroom,
      price: 0.99
    },
    {
      name: 'olive',
      url: olive,
      price: 0.99
    },
    {
      name: 'onion',
      url: onion,
      price: 0.99
    },
    {
      name: 'pepper',
      url: pepper,
      price: 0.99
    },
    {
      name: 'pepperoni',
      url: pepperoni,
      price: 0.99
    },
    {
      name: 'prawn',
      url: prawn,
      price: 0.99
    },
    {
      name: 'sweetcorn',
      url: sweetcorn,
      price: 0.99
    },
    {
      name: 'tomato',
      url: tomato,
      price: 0.99
    }
  ],
  selectedToppings: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_SIZE:
      return { ...state, selectedSize: { ...payload } };
    case ADD_TOPPING:
      let selectedToppings = [...state.selectedToppings];
      if (
        selectedToppings.findIndex(topping => topping.name === payload.name) >
        -1
      ) {
        selectedToppings = selectedToppings.filter(
          topping => topping.name !== payload.name
        );
      } else {
        selectedToppings = [...selectedToppings, { ...payload }];
      }
      return { ...state, selectedToppings: [...selectedToppings] };
    default:
      return state;
  }
};
