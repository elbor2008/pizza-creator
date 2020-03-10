import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Layout = styled.div`
  display: flex;
  align-items: center;
  /* flex-basis: 23%; */
  flex-basis: calc((100% - 60px) / 4);
  margin: 0 15px 15px 0;
`;
const Img = styled.div`
  width: 40px;
  height: 42px;
  background: url(${props => props.toppingUrl}) #e6e6e6 no-repeat center center;
  background-size: 30px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;
const Label = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  padding-left: 20px;
  width: 100%;
  line-height: 42px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const PizzaTopping = ({ toppingUrl, name }) => {
  return (
    <Layout>
      <Img toppingUrl={toppingUrl} alt={name} />
      <Label>{name}</Label>
    </Layout>
  );
};
PizzaTopping.propTypes = {
  toppingUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default PizzaTopping;
