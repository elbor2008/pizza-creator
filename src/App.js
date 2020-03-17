import React from 'react';
import Section from './components/Section';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import EnterYourDetails from './components/EnterYourDetails';
import SelectTheSize from './components/SelectTheSize';
import PickYourToppings from './components/PickYourToppings';
import OrderSummary from './components/OrderSummary';
import Total from './components/OrderSummary/Total/Total';
import store from './stores';
import ValidatorForm from './components/Validator';

const Layout = styled.div`
  padding: 20px 30px;
`;

const PlaceOrderButton = styled.button`
  border: 0;
  outline: 0;
  background: #98c550;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 15px;
  width: 100%;
  color: white;
  &:hover {
    background: #b9ea6a;
  }
`;

const App = ({ getField, validateAll }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Section title="Enter your details">
          <EnterYourDetails getField={getField} />
        </Section>
        <Section title="Choose your pizza">
          <SelectTheSize title="Select the size *" />
          <PickYourToppings title="Pick your toppings" />
        </Section>
        <Section title="Order summary">
          <OrderSummary />
          <Total />
        </Section>
        <PlaceOrderButton
          onClick={() => {
            validateAll();
          }}
        >
          Place order
        </PlaceOrderButton>
      </Layout>
    </Provider>
  );
};

export default ValidatorForm(App);
