import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Layout = styled.div`
  font-size: 24px;
  color: #6e7790;
  font-weight: 300;
  text-align: right;
`;

const Total = ({ selectedSize, selectedToppings }) => {
  return (
    <Layout>
      <hr />
      Total: $
      {selectedSize.price +
        selectedToppings.reduce(
          (initial, current) => initial + current.price,
          0
        )}
    </Layout>
  );
};

const mapStateToProps = state => ({
  selectedSize: state.selectedSize,
  selectedToppings: state.selectedToppings
});

export default connect(mapStateToProps, null)(Total);
Total.propTypes = {
  selectedSize: PropTypes.object.isRequired,
  selectedToppings: PropTypes.array.isRequired
};
