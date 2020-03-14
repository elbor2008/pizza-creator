import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Topping from './Topping';

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
const ToppingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  &:hover {
    cursor: pointer;
  }
`;

const PickYourToppings = ({ title, toppings }) => {
  return (
    <Layout>
      <H3>{title}</H3>
      <ToppingWrapper>
        {toppings.map(topping => (
          <Topping key={topping.name} topping={topping} />
        ))}
      </ToppingWrapper>
    </Layout>
  );
};

const mapStateToProps = state => ({
  toppings: state.toppings
});

export default connect(mapStateToProps, null)(PickYourToppings);
PickYourToppings.propTypes = {
  title: PropTypes.string.isRequired,
  toppings: PropTypes.array.isRequired
};
