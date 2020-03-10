import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.5);
  padding-left: 10px;
  margin-bottom: 10px;
`;
const Label = styled.label`
  margin-left: 10px;
`;

const OrderDetail = ({ name, amount }) => {
  return (
    <Layout>
      <div>
        <i class="fa fa-plus"></i>
        <Label>{name}</Label>
      </div>
      <div>${amount}</div>
    </Layout>
  );
};

export default OrderDetail;
