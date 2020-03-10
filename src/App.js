import React from 'react';
import Section from './components/Section';
import styled from 'styled-components';
import EnterYourDetails from './components/EnterYourDetails';
import SelectTheSize from './components/SelectTheSize';
import PickYourToppings from './components/PickYourToppings';
import OrderSummary from './components/OrderSummary';
import Total from './components/OrderSummary/Total/Total';

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

const App = () => {
  return (
    <Layout>
      <Section title="Enter your details">
        <EnterYourDetails />
      </Section>
      <Section title="Choose your pizza">
        <SelectTheSize title="Select the size *" />
        <PickYourToppings title="Pick your toppings" />
      </Section>
      <Section title="Order summary">
        <OrderSummary />
        <Total />
      </Section>
      <PlaceOrderButton>Place order</PlaceOrderButton>
    </Layout>
  );
};

export default App;
