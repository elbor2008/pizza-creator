import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Order from './Order/Order';

const Layout = styled.div`
  margin-bottom: 20px;
`;

const OrderSummary = ({ selectedSize }) => {
  return (
    <Layout>
      <Order title={selectedSize.text} price={selectedSize.price} />
    </Layout>
  );
};

const mapStateToProps = state => ({
  selectedSize: state.selectedSize
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);
OrderSummary.propTypes = {
  selectedSize: PropTypes.object.isRequired
};
