import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Detail from './Detail';

const OrderWrapper = styled.div`
  color: #6e7790;
  font-size: 22px;
  margin: 0;
  margin-bottom: 10px;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
`;

const Order = ({ title, price, selectedToppings }) => {
  return (
    <>
      <OrderWrapper>
        <div>{title}</div>
        <div>${price}</div>
      </OrderWrapper>
      {selectedToppings.map(topping => (
        <Detail key={topping.name} name={topping.name} price={topping.price} />
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  selectedToppings: state.selectedToppings
});

export default connect(mapStateToProps, null)(Order);
Order.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  selectedToppings: PropTypes.array.isRequired
};
