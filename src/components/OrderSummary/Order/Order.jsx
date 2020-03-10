import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import OrderDetail from './OrderDetail';

const OrderWrapper = styled.div`
  color: #6e7790;
  font-size: 22px;
  margin: 0;
  margin-bottom: 10px;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
`;

const Order = ({ title, amount, toppings }) => {
  return (
    <>
      <OrderWrapper>
        <div>{title}</div>
        <div>${amount}</div>
      </OrderWrapper>
      <OrderDetail name="Mushroom" amount={0.99} />
      <OrderDetail name="Bacon" amount={0.99} />
    </>
  );
};

export default Order;
