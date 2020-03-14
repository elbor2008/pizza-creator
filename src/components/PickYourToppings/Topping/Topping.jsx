import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTopping } from '../../../stores/pizzaAction';

const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-basis: calc((100% / 4) - 15px);
  margin: 0 15px 15px 0;
`;
const Img = styled.div`
  width: 40px;
  height: 42px;
  background: url(${({ url }) => url}) #e6e6e6 no-repeat center center;
  background-size: 30px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;
const Label = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ chosen }) =>
    chosen ? 'rgb(26, 152, 225)' : 'rgba(0, 0, 0, 0.05)'};
  padding-left: 20px;
  width: 100%;
  height: 100%;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const Topping = ({ topping, selectedToppings, addTopping }) => {
  const chosen =
    selectedToppings.findIndex(
      selectedTopping => selectedTopping.name === topping.name
    ) > -1;
  return (
    <Layout onClick={() => addTopping(topping)}>
      <Img url={topping.url} alt={topping.name} />
      <Label chosen={chosen}>{topping.name}</Label>
    </Layout>
  );
};

const mapStateToProps = state => ({
  selectedToppings: state.selectedToppings
});
const mapDispatchToProps = dispatch => ({
  addTopping: topping => dispatch(addTopping(topping))
});

export default connect(mapStateToProps, mapDispatchToProps)(Topping);
Topping.propTypes = {
  topping: PropTypes.object.isRequired,
  selectedToppings: PropTypes.array.isRequired,
  addTopping: PropTypes.func.isRequired
};
