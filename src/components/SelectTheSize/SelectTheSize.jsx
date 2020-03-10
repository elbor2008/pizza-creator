import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PizzaSize from './PizzaSize';
import pizzaUrl from '../../assets/pizza.svg';

const Layout = styled.div`
  padding: 10px 15px;
  margin-bottom: 15px;
`;
const H3 = styled.h3`
  color: #6e7790;
  font-size: 16px;
  position: relative;
  margin-bottom: 25px;
`;
const PizzaSizeWrapper = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const SelectTheSize = ({ title }) => {
  return (
    <Layout>
      <H3>{title}</H3>
      <PizzaSizeWrapper>
        <PizzaSize pizzaUrl={pizzaUrl} size={60} text={'Large (13")'} />
        <PizzaSize pizzaUrl={pizzaUrl} size={50} text={'Medium (11")'} />
        <PizzaSize pizzaUrl={pizzaUrl} size={40} text={'Small (9")'} />
      </PizzaSizeWrapper>
    </Layout>
  );
};

SelectTheSize.propTypes = {
  title: PropTypes.string.isRequired
};
export default SelectTheSize;
