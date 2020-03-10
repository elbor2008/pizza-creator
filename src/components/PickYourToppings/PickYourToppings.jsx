import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PizzaTopping from './PizzaTopping/PizzaTopping';

import anchovy from '../../assets/anchovy.svg';
import bacon from '../../assets/bacon.svg';
import base from '../../assets/base.svg';
import basil from '../../assets/basil.svg';
import board from '../../assets/board.svg';
import chili from '../../assets/chili.svg';
import mozzarella from '../../assets/mozzarella.svg';
import mushroom from '../../assets/mushroom.svg';
import olive from '../../assets/olive.svg';
import onion from '../../assets/onion.svg';
import pepper from '../../assets/pepper.svg';
import pepperoni from '../../assets/pepperoni.svg';
import prawn from '../../assets/prawn.svg';
import sweetcorn from '../../assets/sweetcorn.svg';
import tomato from '../../assets/tomato.svg';

const TOPPING_IMAGE = {
  anchovy,
  bacon,
  base,
  basil,
  board,
  chili,
  mozzarella,
  mushroom,
  olive,
  onion,
  pepper,
  pepperoni,
  prawn,
  sweetcorn,
  tomato
};

const Layout = styled.div`
  padding: 10px 15px;
  margin-bottom: 5px;
`;
const H3 = styled.h3`
  color: #6e7790;
  font-size: 16px;
  position: relative;
  margin-bottom: 25px;
`;
const PizzaToppingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  &:hover {
    cursor: pointer;
  }
`;

const PickYourToppings = class extends Component {
  constructor(props) {
    super(props);
    this.state = { toppings: [] };
  }
  componentDidMount() {
    const toppings = [];
    for (const key in TOPPING_IMAGE) {
      toppings.push({ name: key, toppingUrl: TOPPING_IMAGE[key] });
    }
    this.setState({ toppings });
  }
  render() {
    const { title } = this.props;
    const { toppings } = this.state;
    return (
      <Layout>
        <H3>{title}</H3>
        <PizzaToppingWrapper>
          {toppings.map(topping => (
            <PizzaTopping
              key={topping.name}
              toppingUrl={topping.toppingUrl}
              name={topping.name}
            />
          ))}
        </PizzaToppingWrapper>
      </Layout>
    );
  }
};
PickYourToppings.propTypes = {
  title: PropTypes.string.isRequired
};

export default PickYourToppings;
