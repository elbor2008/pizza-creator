import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Layout = styled.div`
  flex-grow: 1;
`;
const Img = styled.img`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  vertical-align: middle;
`;
const Label = styled.label`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  margin-left: 20px;
`;

const PizzaSize = ({ pizzaUrl, size, text }) => {
  return (
    <Layout>
      <Img src={pizzaUrl} alt="pizza" size={size} />
      <Label>{text}</Label>
    </Layout>
  );
};
PizzaSize.propTypes = {
  pizzaUrl: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default PizzaSize;
