import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Order from './Order/Order';

const Layout = styled.div`
  margin-bottom: 20px;
`;

const OrderSummary = () => {
  return (
    <Layout>
      <Order title="Medium Pizza" amount={12.99} />
    </Layout>
  );
};

export default OrderSummary;
